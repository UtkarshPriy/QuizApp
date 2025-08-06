import React from "react";

export default function Option({
  options,
  dispatch,
  answer,
  correctOption,
  points,
}) {
  console.log(options);
  const hasAnswered = answer !== undefined;
  return (
    <div className="options">
      {options.map((op, index) => (
        <button
          key={index}
          className={
            hasAnswered
              ? `btn btn-option ${index === correctOption ? "answer" : ""} ${
                  answer === correctOption ? "correct" : "wrong"
                }`
              : "btn btn-option"
          }
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: { answer: index, points: points },
            })
          }
          disabled={hasAnswered}
        >
          {op}
        </button>
      ))}
    </div>
  );
}
