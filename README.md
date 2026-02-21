# Chrome Highlight Saver Extension

A Chrome extension that lets you **save text highlights from any webpage** and manage them in one place.

Currently this extension:
✔️ Saves highlighted text  
✔ Stores highlights using `chrome.storage` for persistence  
✔ Shows all saved highlights in the popup  
✔ Allows deleting saved highlights

This makes it easy to collect useful text or notes while browsing and review them later.

---

## 🧠 Features (Current)

- **Highlight & Save** — Select text on any webpage and save it with a click  
- **Store Highlights Locally** — Uses Chrome’s storage API for stable, browser-persistent storage  
- **View All Highlights** — See a list of all saved highlights in the popup  
- **Delete Highlights** — Remove saved items individually or clear all

---
## 🚀 Video Walkthrough
https://www.loom.com/share/9cc0653c26a44f4cb0a5371f23547b3a


## 🚀 How It Works

1. Highlight text on a webpage  
2. Click the extension icon  
3. Saved highlight appears in the popup list  
4. Delete or manage highlights from the popup

Highlights are stored using Chrome’s internal storage system, not `localStorage`, which ensures your data persists across extension sessions and can be synced in future versions.

---

## 🚀 Installation & Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/stutisk/chromeextension.git
cd chromeextension
```

---

### 2️⃣ Open Chrome Extensions Page

Open Google Chrome and go to:

```
chrome://extensions/
```

---


### 3️⃣ Enable Developer Mode

- Toggle **Developer mode** (top right corner)

---

### 4️⃣ Load the Extension

- Click **Load unpacked**
- Select the cloned project folder
- The extension will now be installed in your browser

---

## 🧪 How to Test the Extension in Chrome

### ✅ Step 1: Open Any Website
Open any webpage (Medium, Dev.to, documentation site, blog, etc.)

---

### ✅ Step 2: Select Text
Highlight any text on the page using your mouse.

---

### ✅ Step 3: Save Highlight
Click the extension icon and save the selected text.

---

### ✅ Step 4: Verify Highlight
- Open the extension popup again
- Confirm the highlight appears in the list
- Try deleting the highlight
- Confirm it is removed properly

---

## 🔄 Reload After Code Changes

Whenever you modify the extension code:

1. Go to `chrome://extensions/`
2. Click the **Reload** button on your extension
3. Refresh the webpage you are testing on

---

## 🌍 Open Source

This project is open source and open to contributions.

If you’d like to improve it:

1. Fork the repository
2. Create a new feature branch
3. Submit a Pull Request

Please make sure your code is clean and well documented.


