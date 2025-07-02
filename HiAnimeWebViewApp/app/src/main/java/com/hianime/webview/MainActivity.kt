package com.hianime.webview

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val webView = WebView(this)
        setContentView(webView)

        // Enable JavaScript and other required settings for modern websites
        val settings = webView.settings
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.userAgentString = settings.userAgentString + " HiAnimeWebViewApp/1.0"

        // Prevent opening new windows (pop-ups)
        webView.webChromeClient = object : WebChromeClient() {
            override fun onCreateWindow(view: WebView?, isDialog: Boolean, isUserGesture: Boolean, resultMsg: Message?): Boolean {
                // Returning false cancels the creation of new WebView windows (blocks pop-ups)
                Toast.makeText(this@MainActivity, "Pop-up blocked", Toast.LENGTH_SHORT).show()
                return false
            }

            // Optional: suppress JavaScript alerts that some ad scripts might trigger
            override fun onJsAlert(view: WebView?, url: String?, message: String?, result: JsResult?): Boolean {
                result?.cancel()
                return true // we handled it
            }
        }

        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                val url = request?.url?.toString() ?: return true
                return handleUrl(view, url)
            }

            // For API < 21
            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                return handleUrl(view, url)
            }

            // Helper to decide whether to load or block the URL
            private fun handleUrl(view: WebView?, url: String?): Boolean {
                if (url == null) return true
                val host = try {
                    Uri.parse(url).host
                } catch (e: Exception) {
                    null
                }

                return if (host != null && host.endsWith("hianime.to")) {
                    // Allow the navigation inside HiAnime
                    false // returning false lets WebView load the URL
                } else {
                    // Block any external redirects/pop-ups
                    Toast.makeText(this@MainActivity, "Navigation blocked: $host", Toast.LENGTH_SHORT).show()
                    true // we handled it (do not load)
                }
            }
        }

        // Finally, load the HiAnime website
        webView.loadUrl("https://hianime.to/")
    }
}