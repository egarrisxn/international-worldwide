"use client";
import QuestionCard from "./ui/quiz-card";

export default function QuizComponent({
  questions,
  answers,
  onAnswer,
  isSubmitted,
}) {
  if (!questions || questions.length === 0) {
    return <p>No questions available.</p>;
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <QuestionCard
            question={question}
            answer={answers[index]}
            isSubmitted={isSubmitted}
            onAnswer={(answerIndex) => onAnswer(index, answerIndex)}
          />
        </div>
      ))}
    </div>
  );
}
