'use client';
import {useState, useEffect} from 'react';
import Quiz from './quiz';

export default function QuizContainer({questions}) {
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
      <div className="pb-4 text-lg 2xl:text-xl pt-2">
        <p>Time Remaining: {timer}s</p>
      </div>
      <Quiz
        questions={questions}
        answers={answers}
        onAnswer={handleAnswer}
        isSubmitted={isSubmitted}
      />
      <div className="pt-4 flex flex-row gap-2 items-center">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={!allAnswered || isSubmitted}
        >
          Submit
        </button>
        {isSubmitted && <p>Your score has been submitted!</p>}
      </div>
    </>
  );
}
