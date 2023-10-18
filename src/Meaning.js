import React from "react";
import Synonyms from "./Synonyms";
import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <Definition definition={definition.example} />
              <br />
              {index === 0 && <Synonyms synonyms={props.meaning.synonyms} />}
            </p>
          </div>
        );
      })}
    </div>
  );
}
