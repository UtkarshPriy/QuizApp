import React from "react";

export default function Progress({ questionsNumbers, index, answer }) {
  const hasAnswered = answer !== undefined;
  return (
    <div className="progress">
      <progress
        value={hasAnswered ? index + 1 : index}
        max={questionsNumbers}
      />
      <strong>
        {hasAnswered ? index + 1 : index}/{questionsNumbers}
      </strong>
    </div>
  );
}
