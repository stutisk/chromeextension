/**
 * Content script: runs on every page. Listens for text selection and shows "Save Highlight".
 */
const { MESSAGE_TYPES, HIGHLIGHT_POPUP } = EXTENSION_CONSTANTS;

function getSelectedText() {
  return window.getSelection().toString().trim();
}

function clampPopupPosition(posX, posY, popupWidth, popupHeight) {
  let x = posX;
  let y = posY;
  const maxX = window.scrollX + window.innerWidth - popupWidth - 10;
  const maxY = window.scrollY + window.innerHeight - popupHeight - 10;
  if (x + popupWidth > window.scrollX + window.innerWidth) x = maxX;
  if (y + popupHeight > window.scrollY + window.innerHeight) y = maxY;
  return { x, y };
}

function createPopupStyles() {
  return {
    position: "absolute",
    backgroundColor: "#000",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    zIndex: "999999",
    fontSize: "14px",
    transition: "all 0.2s",
  };
}

function applyStyles(el, styles) {
  Object.entries(styles).forEach(([key, value]) => {
    el.style[key] = value;
  });
}

function showSaveHighlightPopup(text, event) {
  const existing = document.getElementById(HIGHLIGHT_POPUP.ID);
  if (existing) existing.remove();

  const popup = document.createElement("div");
  popup.id = HIGHLIGHT_POPUP.ID;
  popup.textContent = "Save Highlight";
  applyStyles(popup, createPopupStyles());

  const popupWidth = 130;
  const popupHeight = 32;
  const { x, y } = clampPopupPosition(
    event.pageX,
    event.pageY - popupHeight - 20,
    popupWidth,
    popupHeight
  );
  popup.style.left = x + "px";
  popup.style.top = y + "px";

  popup.addEventListener("click", () => {
    chrome.runtime.sendMessage(
      { type: MESSAGE_TYPES.SAVE_HIGHLIGHT, text },
      (response) => {
        if (response?.success) {
          popup.textContent = "Saved!";
          setTimeout(() => popup.remove(), HIGHLIGHT_POPUP.SAVED_CLOSE_MS);
        }
      }
    );
  });

  setTimeout(() => popup.remove(), HIGHLIGHT_POPUP.AUTO_CLOSE_MS);
  document.body.appendChild(popup);
}

document.addEventListener("mouseup", (event) => {
  const selectedText = getSelectedText();
  if (!selectedText) return;
  showSaveHighlightPopup(selectedText, event);
});
