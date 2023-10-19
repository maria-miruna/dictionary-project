import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyWordChange}
              defaultValue={props.defaultKeyWord}
              placeholder="Search for a word"
            />
          </form>
          <div className="hint">i.e. sunset, wine, yoga, coding</div>
        </section>
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
