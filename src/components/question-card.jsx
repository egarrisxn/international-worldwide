"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";

export default function QuestionCard({
  question,
  answer,
  isSubmitted,
  onAnswer,
}) {
  return (
    <div className="rounded-md bg-background-secondary p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">{question.question}</h2>
      <RadioGroup.Root
        className="flex flex-row flex-wrap gap-2"
        value={answer !== null ? answer.toString() : null}
        onValueChange={(value) => onAnswer(parseInt(value))}
        disabled={isSubmitted}
      >
        {question.options.map((option, index) => {
          const isSelected = answer === index;
          const isCorrect = index === question.answer;

          let optionClass =
            "p-2 text-sm xl:text-base border rounded-md hover:bg-gray-100 cursor-pointer";

          if (isSubmitted) {
            if (isSelected) {
              optionClass += isCorrect
                ? " bg-green-500 text-white"
                : " bg-red-500 text-white";
            } else if (isCorrect) {
              optionClass += " bg-green-100 text-green-700";
            }
          } else {
            if (isSelected) {
              optionClass += " bg-blue-100";
            }
          }

          return (
            <RadioGroup.Item
              key={index}
              value={index.toString()}
              className={`btn-secondary ${optionClass}`}
            >
              <span>{option}</span>
            </RadioGroup.Item>
          );
        })}
      </RadioGroup.Root>
    </div>
  );
}
