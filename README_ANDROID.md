# HiAnime WebView Android App

An Android application that loads **hianime.to** in a WebView with built-in ad blocking and external redirect protection.

## Features

- **Secure Browsing**: Only allows navigation within hianime.to domain
- **Ad Blocking**: Automatically blocks common ad elements and popup advertisements
- **Redirect Protection**: Blocks external redirects outside of hianime.to
- **Popup Blocking**: Prevents unwanted popup windows and JavaScript dialogs
- **Clean UI**: Fullscreen WebView experience with minimal interface
- **Back Navigation**: Use device back button to navigate within the WebView

## Security Features

### Domain Restriction
- Only allows URLs from `hianime.to` and its subdomains
- Blocks all external redirects with user notification
- Prevents malicious redirects to external sites

### Ad Blocking
- Removes common ad elements by CSS selectors
- Blocks JavaScript-based popup advertisements
- Overrides `window.open()` to prevent popup windows
- Blocks JavaScript alerts, confirms, and prompts from ads

### JavaScript Protection
- Disables `document.write()` and `document.writeln()` to prevent ad injections
- Overrides common popup methods used by advertisements
- Maintains functionality for legitimate site features

## Build Instructions

### Prerequisites
- Android Studio Arctic Fox or later
- Android SDK 21+ (minimum)
- Java 8+

### Building the App

1. **Open in Android Studio**:
   ```bash
   # Clone or download the project
   # Open Android Studio and select "Open an existing project"
   # Navigate to the project folder and open it
   ```

2. **Sync Gradle Files**:
   - Android Studio will automatically prompt to sync
   - Or manually: File > Sync Project with Gradle Files

3. **Build the App**:
   ```bash
   # From command line (if you have Android SDK tools in PATH):
   ./gradlew assembleDebug
   
   # Or use Android Studio:
   # Build > Make Project
   # Build > Build Bundle(s) / APK(s) > Build APK(s)
   ```

4. **Install on Device**:
   ```bash
   # Via ADB (Android Debug Bridge):
   adb install app/build/outputs/apk/debug/app-debug.apk
   
   # Or use Android Studio:
   # Run > Run 'app'
   ```

## File Structure

```
app/
├── src/main/
│   ├── java/com/hianime/webview/
│   │   └── MainActivity.java          # Main activity with WebView
│   ├── res/
│   │   ├── layout/
│   │   │   └── activity_main.xml      # Main layout
│   │   ├── values/
│   │   │   ├── strings.xml            # String resources
│   │   │   └── themes.xml             # App themes
│   │   ├── xml/
│   │   │   ├── backup_rules.xml       # Backup configuration
│   │   │   └── data_extraction_rules.xml
│   │   └── mipmap-*/                  # App icons
│   └── AndroidManifest.xml            # App manifest
├── build.gradle                       # App-level build config
└── proguard-rules.pro                 # ProGuard configuration
```

## Configuration

### Changing Target Website
To change the target website, modify the constants in `MainActivity.java`:

```java
private static final String TARGET_DOMAIN = "your-domain.com";
private static final String HOME_URL = "https://your-domain.com";
```

### Customizing Ad Blocking
The ad blocking script can be customized in the `injectAdBlockingScript()` method. Add or modify selectors in the `adSelectors` array to target specific ad elements.

## Permissions

The app requires the following permissions:
- `INTERNET`: To load web content
- `ACCESS_NETWORK_STATE`: To check network connectivity

## Compatibility

- **Minimum SDK**: Android 5.0 (API level 21)
- **Target SDK**: Android 14 (API level 34)
- **Architecture**: All (ARM, ARM64, x86, x86_64)

## Security Notes

This app is designed for safe browsing of hianime.to by:
- Restricting navigation to trusted domains
- Blocking potentially malicious content
- Preventing data exfiltration through external redirects

**Important**: This app is intended for educational purposes. Ensure you comply with the terms of service of any website you access.

## Troubleshooting

### App Won't Load Website
- Check internet connection
- Verify the target URL is accessible in a regular browser
- Check if the domain restriction is too strict

### Ads Still Showing
- Some ads may use techniques not covered by the current blocking script
- The ad blocking script can be enhanced by adding more selectors
- Consider updating the JavaScript injection method

### Build Errors
- Ensure you have the latest Android SDK tools
- Check that all dependencies in `build.gradle` are available
- Clean and rebuild the project: Build > Clean Project