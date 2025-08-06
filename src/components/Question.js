import React from "react";
import Option from "./Option";

export default function Question({ question, dispatch, index }) {
  const { question: questionText, options } = question;
  return (
    <div className="question">
      <h2>{questionText}</h2>
      <Option options={options} />
      <button
        onClick={() => {
          dispatch({ type: "nextQ", payload: index });
        }}
        className="btn"
      >
        Next
      </button>
    </div>
  );
}
