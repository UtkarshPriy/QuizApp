import React from "react";

export default function NextBtn({ index, dispatch }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: "nextQ", payload: index });
      }}
      className="btn"
    >
      Next
    </button>
  );
}
