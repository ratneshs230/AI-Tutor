import React from 'react';

const SuggestionsList = ({ suggestions, onSelectSuggestion, className }) => {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <ul className={`list-none p-0 mt-2 border border-border-color rounded-md max-h-48 overflow-y-auto bg-white shadow-lg ${className}`}>
      {suggestions.map((suggestion) => (
        <li
          key={suggestion.id}
          className="px-4 py-2 cursor-pointer border-b border-gray-200 last:border-b-0 hover:bg-gray-100"
          onClick={() => onSelectSuggestion(suggestion)}
        >
          {suggestion.name}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
