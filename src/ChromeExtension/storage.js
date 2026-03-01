/* global chrome */
/**
 * Chrome storage helpers for the popup.
 * Centralizes storage keys and shapes for easier changes later.
 */
import { STORAGE_KEYS } from "./constants";

export function getHighlights(callback) {
  chrome.storage.local.get([STORAGE_KEYS.HIGHLIGHTS], (result) => {
    callback(result[STORAGE_KEYS.HIGHLIGHTS] || []);
  });
}

export function setHighlights(highlights, callback) {
  chrome.storage.local.set({ [STORAGE_KEYS.HIGHLIGHTS]: highlights }, callback || (() => {}));
}
