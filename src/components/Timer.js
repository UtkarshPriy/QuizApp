import React, { useEffect } from "react";

export default function Timer({ dispatch, time }) {
  useEffect(() => {
    if (time <= 0) {
      dispatch({ type: "finish" });
    }
    const timer = setInterval(() => dispatch({ type: "counter" }), 1000);
    return () => clearInterval(timer);
  }, [time, dispatch]);

  const hr = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);
  return (
    <div className="timer">
      Time Remaining -- {String(hr).padStart(2, "0")}:
      {String(mins).padStart(2, "0")}:{String(sec).padStart(2, "0")}
    </div>
  );
}
