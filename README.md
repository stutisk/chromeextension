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

## 🚀 How It Works

1. Highlight text on a webpage  
2. Click the extension icon  
3. Saved highlight appears in the popup list  
4. Delete or manage highlights from the popup

Highlights are stored using Chrome’s internal storage system, not `localStorage`, which ensures your data persists across extension sessions and can be synced in future versions.

---

## 📦 Installation

1. Clone this repository  
   ```bash
   git clone https://github.com/stutisk/chromeextension.git
