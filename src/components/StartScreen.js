import React from "react";

export default function StartScreen({ questionsNumber }) {
  return (
    <main className="main">
      <h2>Welcome to the React Quiz</h2>
      <p>{questionsNumber} questions to test your react Mastery</p>
      <button>Let's Start</button>
    </main>
  );
}
