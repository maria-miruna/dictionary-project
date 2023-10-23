import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSheCodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;

    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert(
            "Sorry, the word you entered does not exist in our dictionary. Please check your spelling or try another word. 📖 "
          );
          window.location.reload();
        }
      });

    let sheCodesApiKey = `b3b90fo474e98fbe2dt0209a2baa7df2`;
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${sheCodesApiKey}`;

    axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
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
          <div className="hint">i.e. summer, wine, yoga, coding</div>
        </section>
        <Results results={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
