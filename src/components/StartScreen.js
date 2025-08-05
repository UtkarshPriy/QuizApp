import React from "react";

export default function StartScreen({ questionsNumber }) {
  return (
    <main className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{questionsNumber} questions to test your react Mastery</h3>
      <button className="btn">Let's Start</button>
    </main>
  );
}
