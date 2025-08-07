import React from "react";

export default function Retry({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "startQuiz" })}
    >
      Retry
    </button>
  );
}
