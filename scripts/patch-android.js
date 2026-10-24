// Adds the permissions and AdMob ID the app needs to the generated Android manifest.
// Runs in the GitHub build after `npx cap add android`.
const fs = require("fs");
const path = "android/app/src/main/AndroidManifest.xml";
let xml = fs.readFileSync(path, "utf8");

const permissions = [
  "android.permission.ACCESS_COARSE_LOCATION",
  "android.permission.ACCESS_FINE_LOCATION",
  "android.permission.FOREGROUND_SERVICE",
  "android.permission.FOREGROUND_SERVICE_LOCATION",
  "android.permission.POST_NOTIFICATIONS",
  "android.permission.VIBRATE",
];
const missing = permissions.filter(p => !xml.includes(`"${p}"`));
const permXml = missing.map(p => `    <uses-permission android:name="${p}" />`).join("\n");
xml = xml.replace("</manifest>", `${permXml}\n</manifest>`);

// Google's official AdMob TEST app ID. Replace with your real one before publishing.
const ADMOB_APP_ID = process.env.ADMOB_APP_ID || "ca-app-pub-3940256099942544~3347511713";
if (!xml.includes("com.google.android.gms.ads.APPLICATION_ID")) {
  xml = xml.replace(/<application([^>]*)>/, (m) =>
    `${m}\n        <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="${ADMOB_APP_ID}" />`);
}

fs.writeFileSync(path, xml);
console.log("Patched manifest:", missing.length, "permissions added, AdMob ID set.");
