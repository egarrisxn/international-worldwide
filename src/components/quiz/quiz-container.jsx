"use client";
import { useState, useEffect } from "react";
import Button from "../ui/button";
import QuizComponent from "./quiz-component";

export default function QuizContainer({ questions }) {
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (timer <= 0) {
      setIsTimerRunning(false);
      setIsSubmitted(true);
      return;
    }

    if (isTimerRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, isTimerRunning]);

  const handleAnswer = (questionIndex, answerIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answerIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const score = answers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0);

    alert(`You scored ${score} out of ${questions.length}`);
    setIsSubmitted(true);
    setIsTimerRunning(false);
  };

  const allAnswered = answers.every((answer) => answer !== null);

  return (
    <>
      <div className="pt-2 pb-4 text-lg 2xl:text-xl">
        <p>Time Remaining: {timer}s</p>
      </div>
      <QuizComponent
        questions={questions}
        answers={answers}
        onAnswer={handleAnswer}
        isSubmitted={isSubmitted}
      />
      <div className="flex flex-row items-center gap-2 pt-4">
        <Button
          onClick={handleSubmit}
          variant="primary"
          size="medium"
          disabled={!allAnswered || isSubmitted}
        >
          Submit
        </Button>
        {isSubmitted && <p>Your score has been submitted!</p>}
      </div>
    </>
  );
}
