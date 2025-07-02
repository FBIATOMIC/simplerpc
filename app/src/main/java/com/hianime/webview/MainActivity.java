package com.hianime.webview;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.Toast;

public class MainActivity extends Activity {

    private WebView webView;
    private ProgressBar progressBar;
    private static final String TARGET_DOMAIN = "hianime.to";
    private static final String HOME_URL = "https://hianime.to";

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webview);
        progressBar = findViewById(R.id.progressBar);

        // Configure WebView settings
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(false);
        webSettings.setAllowContentAccess(false);
        webSettings.setGeolocationEnabled(false);
        webSettings.setJavaScriptCanOpenWindowsAutomatically(false);
        webSettings.setSupportMultipleWindows(false);
        webSettings.setSupportZoom(true);
        webSettings.setBuiltInZoomControls(true);
        webSettings.setDisplayZoomControls(false);
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setUseWideViewPort(true);

        // Set custom WebViewClient to handle URL loading and block external redirects
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                Uri uri = Uri.parse(url);
                String host = uri.getHost();

                // Allow only hianime.to and its subdomains
                if (host != null && (host.equals(TARGET_DOMAIN) || host.endsWith("." + TARGET_DOMAIN))) {
                    return false; // Allow the WebView to load the URL
                } else {
                    // Block external redirects
                    Toast.makeText(MainActivity.this, "External redirects blocked: " + host, Toast.LENGTH_SHORT).show();
                    return true; // Block the URL
                }
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                progressBar.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                progressBar.setVisibility(View.GONE);
                
                // Inject JavaScript to block popups and unwanted elements
                injectAdBlockingScript(view);
            }
        });

        // Set custom WebChromeClient to handle JavaScript dialogs and block popups
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                // Block JavaScript alerts from ads
                result.cancel();
                return true;
            }

            @Override
            public boolean onJsConfirm(WebView view, String url, String message, JsResult result) {
                // Block JavaScript confirms from ads
                result.cancel();
                return true;
            }

            @Override
            public boolean onCreateWindow(WebView view, boolean isDialog, boolean isUserGesture, android.os.Message resultMsg) {
                // Block popup windows
                return false;
            }

            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                super.onProgressChanged(view, newProgress);
                progressBar.setProgress(newProgress);
            }
        });

        // Load the website
        webView.loadUrl(HOME_URL);
    }

    private void injectAdBlockingScript(WebView webView) {
        String adBlockScript = 
            "javascript:(function() {" +
            "  // Block common ad elements" +
            "  var adSelectors = [" +
            "    '[id*=\"ad\"]'," +
            "    '[class*=\"ad\"]'," +
            "    '[id*=\"banner\"]'," +
            "    '[class*=\"banner\"]'," +
            "    '[id*=\"popup\"]'," +
            "    '[class*=\"popup\"]'," +
            "    'iframe[src*=\"ads\"]'," +
            "    'iframe[src*=\"doubleclick\"]'," +
            "    'iframe[src*=\"googlesyndication\"]'" +
            "  ];" +
            "  " +
            "  adSelectors.forEach(function(selector) {" +
            "    var elements = document.querySelectorAll(selector);" +
            "    elements.forEach(function(el) {" +
            "      el.style.display = 'none !important';" +
            "      el.remove();" +
            "    });" +
            "  });" +
            "  " +
            "  // Override window.open to prevent popups" +
            "  window.open = function() { return null; };" +
            "  " +
            "  // Override document.write to prevent ad injections" +
            "  document.write = function() {};" +
            "  document.writeln = function() {};" +
            "  " +
            "  // Block alert, confirm, and prompt dialogs" +
            "  window.alert = function() {};" +
            "  window.confirm = function() { return false; };" +
            "  window.prompt = function() { return null; };" +
            "})()";

        webView.evaluateJavascript(adBlockScript, null);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        // Handle back button to navigate back in WebView
        if (keyCode == KeyEvent.KEYCODE_BACK && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.destroy();
        }
        super.onDestroy();
    }
}