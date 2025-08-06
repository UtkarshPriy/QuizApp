import React from "react";
import Option from "./Option";

export default function Question({ question, dispatch, index, answer }) {
  const { question: questionText, options, correctOption } = question;
  return (
    <div className="question">
      <h2>{questionText}</h2>
      <Option
        className="options"
        options={options}
        dispatch={dispatch}
        correctOption={correctOption}
        answer={answer}
        index={index}
      />
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
