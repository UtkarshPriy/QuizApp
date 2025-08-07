import React from "react";

export default function Points({ points, outOfScore }) {
  return (
    <div className="highscore">{`Total Score : ${points} out of ${outOfScore}`}</div>
  );
}
