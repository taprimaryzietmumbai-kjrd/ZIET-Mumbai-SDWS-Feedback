
/*
 * ZIET Mumbai - SDWS Feedback Portal
 * Google Apps Script Integration
 */

const APPS_SCRIPT_WEB_APP_URL =
  "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

const frame = document.getElementById("feedbackFrame");
const notice = document.getElementById("setupNotice");

if (
  APPS_SCRIPT_WEB_APP_URL.startsWith(
    "https://script.google.com/macros/s/"
  ) &&
  APPS_SCRIPT_WEB_APP_URL.endsWith("/exec")
) {
  frame.src = APPS_SCRIPT_WEB_APP_URL;
  frame.style.display = "block";
  notice.style.display = "none";
} else {
  frame.style.display = "none";
  notice.style.display = "block";
}

