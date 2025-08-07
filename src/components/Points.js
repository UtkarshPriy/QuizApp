import React from "react";

export default function Points({ points, outOfScore }) {
  return (
    <div className="counter">{`Total Score : ${points} out of ${outOfScore}`}</div>
  );
}
