import { useState, useEffect, useCallback } from "react";
import { MdDelete } from "react-icons/md";
import { getHighlights, setHighlights } from "./storage";

export function Popup() {
  const [highlights, setHighlightsState] = useState([]);

  useEffect(() => {
    getHighlights(setHighlightsState);
  }, []);

  const removeHighlight = useCallback(
    (index) => {
      const updated = highlights.filter((_, i) => i !== index);
      setHighlightsState(updated);
      setHighlights(updated);
    },
    [highlights]
  );

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Saved Highlights
      </h3>

      <div className="max-h-[300px] overflow-y-auto space-y-2">
        {highlights.length > 0 ? (
          highlights.map((highlight, idx) => (
            <div
              key={`${highlight.timestamp}-${idx}`}
              className="flex justify-between items-center p-2 hover:bg-gray-50 transition"
            >
              <p className="text-sm text-gray-700 break-words">
                {highlight.text}
              </p>
              <button
                type="button"
                className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded flex items-center justify-center"
                onClick={() => removeHighlight(idx)}
                title="Delete highlight"
                aria-label="Delete highlight"
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
}
