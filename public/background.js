chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("highlights", (result) => {
    if (!result.highlights) {
      chrome.storage.local.set({ highlights: [] });
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SAVE_HIGHLIGHT") {
    chrome.storage.local.get("highlights", (result) => {
      const currentHighlights = result.highlights || [];
      const newHighlight = {
        text: message.text,
        url: sender.tab?.url || window.location.href,
        timestamp: Date.now(),
      };

      const updatedHighlights = [...currentHighlights, newHighlight];

      chrome.storage.local.set({ highlights: updatedHighlights }, () => {
        sendResponse({ success: true });
      });
    });

    return true;
  }
});
