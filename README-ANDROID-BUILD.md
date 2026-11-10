# Hishab Khata Android build

This project is configured to build an Android WebView app with Capacitor using GitHub Actions. Android Studio is not required on your computer.

## GitHub upload

1. Extract this ZIP on your computer.
2. Open your GitHub repository `https://github.com/senpai90ko/hishab-khata`.
3. Choose **Add file → Upload files**.
4. Upload the *contents* of this folder (including the hidden `.github` folder), not this ZIP file itself.
5. Commit the files to the `main` branch.

## Build

After the upload is committed, open the repository's **Actions** tab. Select **Build Android APK**, choose **Run workflow**, then click the green **Run workflow** button.

When the run succeeds, open the completed run and download the artifact named `Hishab-Khata-debug-APK`. Extract that downloaded artifact ZIP to get `app-debug.apk`.

The first build may take several minutes. A debug APK is suitable for testing and sideloading; a signed release APK requires a private signing key and should be configured separately.
