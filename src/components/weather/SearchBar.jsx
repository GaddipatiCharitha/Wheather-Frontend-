import React, { useState } from "react";

export default function SearchBar({ onSearch, onLocation }) {
  const [input, setInput] = useState("");

  return (
    <div className="search">
      <input
        placeholder="Enter city or zip"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onSearch(input)}>Search</button>
      <button onClick={onLocation}>Use My Location</button>
    </div>
  );
}