import React from "react";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <em> {props.definition}</em>
      </div>
    );
  } else {
    return null;
  }
}
