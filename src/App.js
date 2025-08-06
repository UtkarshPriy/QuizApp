// import "./App.css";
import "./index.css";
import Header from "./components/Header";
// import Main from "./components/Main";
import { useEffect, useReducer } from "react";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

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
    case "startQuiz":
      return {
        ...state,
        status: "active",
        index: 0,
      };
    case "nextQ":
      return {
        ...state,
        status: "active",
        index: action.payload + 1,
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ status, questions, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const questionsNumbers = questions.length;
  console.log(questions[index]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/questions", {
          signal: controller.signal,
        });
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
        // console.log(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          console.log(error);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="app">
      <Header />
      <main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorPage />}
        {status === "ready" && (
          <StartScreen questionsNumber={questionsNumbers} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            index={index}
            answer={answer}
          />
        )}
      </main>
    </div>
  );
}

export default App;
