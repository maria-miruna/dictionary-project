import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} definition`);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
