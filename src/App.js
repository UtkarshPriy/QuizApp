// import "./App.css";
import "./index.css";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Points from "./components/Points";
import Progress from "./components/Progress";
import NextBtn from "./components/NextBtn";
import FinishScreen from "./components/FinishScreen";
import Retry from "./components/Retry";

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
        points: 0,
        outOfScore: 0,
      };
    case "nextQ":
      return {
        ...state,
        status: "active",
        index: action.payload + 1,
        answer: undefined,
        outOfScore: state.outOfScore + state.questions[state.index].points,
      };
    case "newAnswer":
      const isCorrectAnswered =
        action.payload.answer === state.questions[state.index].correctOption;
      return {
        ...state,
        outOfScore: state.outOfScore + action.payload.points,
        answer: action.payload.answer,
        points: isCorrectAnswered
          ? state.points + action.payload.points
          : state.points,
      };
    case "finish":
      return { ...state, status: "finished" };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ status, questions, index, answer, points, outOfScore }, dispatch] =
    useReducer(reducer, initialState);
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
          <>
            <Progress
              questionsNumbers={questionsNumbers}
              index={index}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              index={index}
              answer={answer}
            />
            <NextBtn
              index={index}
              dispatch={dispatch}
              questionsNumbers={questionsNumbers}
            />
            <Points points={points} outOfScore={outOfScore} />
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen
              points={points}
              outOfScore={outOfScore}
              dispatch={dispatch}
            />
            <Retry dispatch={dispatch} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
