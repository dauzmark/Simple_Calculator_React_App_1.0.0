import React from "react";
export default function Output(props) {
  // console.log(props.output);
  return (
    <div
      style={{ width: "150px", height: "30px", border: "2px solid #a1a1a1" }}
    >
      <div style={{ width: "100px" }}>{props.output}</div>
    </div>
  );
}
