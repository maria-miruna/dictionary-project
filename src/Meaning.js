import React from "react";
import Synonyms from "./Synonyms";
import Definition from "./Definition";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 1).map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              {definition.definition.replace(/\.$/, "")}
            </div>
            <div className="example">
              <Definition definition={definition.example} />
            </div>

            {index === 0 && <Synonyms synonyms={props.meaning.synonyms} />}
          </div>
        );
      })}
    </div>
  );
}
