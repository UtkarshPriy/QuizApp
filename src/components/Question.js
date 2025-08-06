import React from "react";
import Option from "./Option";
import NextBtn from "./NextBtn";

export default function Question({ question, dispatch, index, answer }) {
  const { question: questionText, options, correctOption, points } = question;
  return (
    <div className="question">
      <h2>{questionText}</h2>
      <Option
        className="options"
        options={options}
        dispatch={dispatch}
        correctOption={correctOption}
        answer={answer}
        // index={index}
        points={points}
      />
      <NextBtn index={index} dispatch={dispatch} />
    </div>
  );
}
