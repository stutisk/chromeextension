document.addEventListener("mouseup", (event) => {
  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) return;
  displayHighlightPopup(selectedText, event);
});

function displayHighlightPopup(text, event) {
  const existingPopup = document.getElementById("highlight-popup");
  if (existingPopup) existingPopup.remove();
  const popup = document.createElement("div");
  popup.id = "highlight-popup";
  popup.textContent = "Save Highlight";
  popup.style.position = "absolute";
  popup.style.backgroundColor = "#000";
  popup.style.color = "#fff";
  popup.style.padding = "6px 10px";
  popup.style.borderRadius = "6px";
  popup.style.cursor = "pointer";
  popup.style.zIndex = "999999";
  popup.style.fontSize = "14px";
  popup.style.transition = "all 0.2s";

  const popupWidth = 130;
  const popupHeight = 32;
  let posX = event.pageX;
  let posY = event.pageY - popupHeight - 20;

  if (posX + popupWidth > window.scrollX + window.innerWidth) {
    posX = window.scrollX + window.innerWidth - popupWidth - 10;
  }
  if (posY + popupHeight > window.scrollY + window.innerHeight) {
    posY = window.scrollY + window.innerHeight - popupHeight - 10;
  }

  popup.style.left = posX + "px";
  popup.style.top = posY + "px";

  popup.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "SAVE_HIGHLIGHT", text }, (response) => {
      if (response?.success) {
        popup.textContent = "Saved!";
        setTimeout(() => popup.remove(), 1500);
      }
    });
  });

  setTimeout(() => popup.remove(), 5000);

  document.body.appendChild(popup);
}
