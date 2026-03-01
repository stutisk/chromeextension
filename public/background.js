importScripts("constants.js");

const { STORAGE_KEYS, MESSAGE_TYPES } = EXTENSION_CONSTANTS;

function initStorage() {
  chrome.storage.local.get(STORAGE_KEYS.HIGHLIGHTS, (result) => {
    if (!result[STORAGE_KEYS.HIGHLIGHTS]) {
      chrome.storage.local.set({ [STORAGE_KEYS.HIGHLIGHTS]: [] });
    }
  });
}

function saveHighlight(text, sourceUrl, sendResponse) {
  chrome.storage.local.get(STORAGE_KEYS.HIGHLIGHTS, (result) => {
    const current = result[STORAGE_KEYS.HIGHLIGHTS] || [];
    const newHighlight = {
      text,
      url: sourceUrl,
      timestamp: Date.now(),
    };
    const updated = [...current, newHighlight];
    chrome.storage.local.set({ [STORAGE_KEYS.HIGHLIGHTS]: updated }, () => {
      sendResponse({ success: true });
    });
  });
}

chrome.runtime.onInstalled.addListener(initStorage);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === MESSAGE_TYPES.SAVE_HIGHLIGHT) {
    const sourceUrl = sender.tab?.url || (typeof window !== "undefined" ? window.location.href : "");
    saveHighlight(message.text, sourceUrl, sendResponse);
    return true; // keep channel open for async sendResponse
  }
});
