import React from "react";

export default function FinishScreen({ points, outOfScore, dispatch }) {
  const percentage = Number(points / outOfScore) * 100;
  let emoji;
  if (percentage === 100) emoji = "";
  if (percentage >= 80 && percentage < 100) emoji = "🥇";
  if (percentage >= 50 && percentage < 80) emoji = "🤩";
  if (percentage >= 0 && percentage < 50) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        Your Score:{points} Out of <strong>{outOfScore} </strong>(
        {percentage.toFixed(0)} % {emoji})
      </p>
    </>
  );
}
