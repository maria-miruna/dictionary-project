import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonrtic">
      <a href={props.phonetic.audio} target="blank">
        <i class="fa-solid fa-volume-high"></i>
      </a>{" "}
      <span> {props.phonetic.text} </span>
    </div>
  );
}
