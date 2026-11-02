/*
 * ZIET Mumbai - SDWS Feedback Portal
 * Google Apps Script Integration
 */

const APPS_SCRIPT_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwYalcz2T0FMxhQ0vBm5iJJ7v2f8rBen7WcDz9g-jPtLBWbNQ6YzU-CIljEq784CGaUzw/exec";

const frame = document.getElementById("feedbackFrame");
const notice = document.getElementById("setupNotice");

if (
  APPS_SCRIPT_WEB_APP_URL.startsWith("https://script.google.com/macros/s/") &&
  APPS_SCRIPT_WEB_APP_URL.endsWith("/exec")
) {
  frame.src = APPS_SCRIPT_WEB_APP_URL;
  frame.style.display = "block";
  notice.style.display = "none";
} else {
  frame.style.display = "none";
  notice.style.display = "block";
}
