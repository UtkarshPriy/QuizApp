import React from "react";
import Option from "./Option";

export default function Question({
  question,
  dispatch,
  index,
  answer,
  questionsNumbers,
}) {
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
    </div>
  );
}
