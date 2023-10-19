import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="blank" rel="noreferrer">
        <i className="fa-solid fa-volume-high"></i>
      </a>{" "}
      <span className="text"> {props.phonetic.text} </span>
    </div>
  );
}
