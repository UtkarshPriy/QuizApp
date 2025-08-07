import React from "react";

export default function NextBtn({ index, dispatch, questionsNumbers }) {
  const notLastQuestion = questionsNumbers !== index + 1;
  return (
    <button
      onClick={() => {
        dispatch({
          type: notLastQuestion ? "nextQ" : "finish",
          payload: index,
        });
      }}
      className="btn"
    >
      {notLastQuestion ? "Next" : "Finish"}
    </button>
  );
}
