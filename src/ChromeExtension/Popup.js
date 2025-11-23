/* global chrome */
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

export const Popup = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    chrome.storage.local.get(["highlights"], (result) => {
      setHighlights(result.highlights || []);
    });
  }, []);

  const removeHighlight = (index) => {
    const updatedList = highlights.filter((_, i) => i !== index);
    setHighlights(updatedList);
    chrome.storage.local.set({ highlights: updatedList });
  };

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Saved Highlights
      </h3>

      <div className="max-h-[300px] overflow-y-auto space-y-2">
        {highlights.length > 0 ? (
          highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-2   hover:bg-gray-50 transition"
            >
              <p className="text-sm text-gray-700 break-words">
                {highlight.text}
              </p>
              <button
                className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded flex items-center justify-center"
                onClick={() => removeHighlight(idx)}
                title="Delete highlight"
              >
                <MdDelete />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm text-center">
            No highlights saved yet.
          </p>
        )}
      </div>
    </div>
  );
};
