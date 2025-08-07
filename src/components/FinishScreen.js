import React from "react";

export default function FinishScreen({ points, totalMarks, dispatch }) {
  const percentage = Number(points / totalMarks) * 100;
  let emoji;
  if (percentage === 100) emoji = "";
  if (percentage >= 80 && percentage < 100) emoji = "🥇";
  if (percentage >= 50 && percentage < 80) emoji = "🤩";
  if (percentage >= 0 && percentage < 50) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        Your Score:{points} Out of <strong>{totalMarks} </strong>(
        {percentage.toFixed(0)} % {emoji})
      </p>
    </>
  );
}
