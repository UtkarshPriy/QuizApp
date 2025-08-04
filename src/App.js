// import "./App.css";
import "./index.css";
import Header from "./components/Header";
// import Main from "./components/Main";
import { useEffect, useReducer, useState } from "react";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ status, questions }, dispatch] = useReducer(reducer, initialState);
  const questionsNumbers = questions.length;
  console.log(questionsNumbers);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <Header />
      <main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorPage />}
        {status === "ready" && (
          <StartScreen questionsNumber={questionsNumbers} />
        )}
      </main>
    </div>
  );
}

export default App;
