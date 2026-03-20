# Meta-Feed-Cleanser

# ⚔️ Meta Feed Cleanser (v1.3)

**Reclaim your timeline from the algorithmic noise.**

## 📖 Why This Exists
Modern social media has shifted from "connecting with friends" to "maximizing engagement." For many users, the ratio of unwanted "Suggested for You," "Sponsored," and "Recommended" content to actual friend updates has reached an exhausting **8:2 ratio**. 

**Zanno's Feed Cleanser** is a lightweight, open-source "Bottom-Up" DOM-traversal engine. Instead of trying to play cat-and-mouse with Facebook's scrambled "Sponsored" tags, this extension identifies the structural signatures of non-organic content and vaporizes them before they hit your eyes.

## 🚀 Key Features
*   **Bottom-Up Assassin Logic:** Finds the specific UI "Follow/Join" buttons and traces the code upward to identify and delete the entire parent container.
*   **Language-Agnostic Core:** Works by targeting universal ARIA accessibility tags (`aria-posinset`) required by law, making it harder for the algorithm to hide.
*   **Friend-Share Protection:** Intelligently ignores posts that were organically shared by your actual friends (posts containing *"delade ett inlägg"*).
*   **Zero Data Collection:** Runs entirely in your browser. No servers, no tracking, just clean code.

---

## 🌍 How to Localize (English, Spanish, etc.)

By default, the script is set for **Swedish** Facebook. To use it in your language, it takes 10 seconds of editing:

1. Open `content.js` in any text editor (Notepad, TextEdit, etc.).
2. Find **Line 17**:
   `if (text === "Följ" || text === "Gå med") {`
3. Change the words inside the quotes to match the "Follow" and "Join" buttons in your language:
   *   **English:** "Follow" and "Join"
   *   **Spanish:** "Seguir" and "Unirte"
   *   **German:** "Folgen" and "Beitreten"
4. **Save** the file and **Reload** the extension in your browser.

---

## 🛠️ Installation

### Chrome & Microsoft Edge
1.  **Download:** Clone this repo or download the ZIP and extract it.
2.  **Open Extensions:** Navigate to chrome://extensions/ (or edge://extensions/).
3.  **Developer Mode:** Toggle the "Developer mode" switch to **ON**.
4.  **Load:** Click "Load unpacked" and select the folder containing these files.

### Mozilla Firefox
1.  **Open Debugging:** Type about:debugging in the address bar.
2.  **Select Device:** Click "This Firefox".
3.  **Load Add-on:** Click "Load Temporary Add-on...".
4.  **Select File:** Select the manifest.json file inside the project folder.

---

## 🛠️ Technical Details for Nerds
This extension uses a MutationObserver to monitor the Facebook Feed as it infinitely scrolls. It scans for the Följ or Gå med text nodes and uses the .closest() method to climb the DOM tree until it identifies a container with the aria-posinset attribute. By targeting accessibility roles, the extension remains functional even when Facebook obfuscates its standard CSS classes.

## ⚖️ Disclaimer
This project is an independent security and UI research tool. It is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. Use of this tool is at the user's discretion.
"""
