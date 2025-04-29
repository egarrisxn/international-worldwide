"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";

export default function QuestionCard({
  question,
  answer,
  isSubmitted,
  onAnswer,
}) {
  return (
    <div className="rounded-base border-border shadow-shadow mx-auto w-full border-2 bg-white p-6 text-black dark:bg-black dark:text-white">
      <h2 className="leadning-none mb-4 text-xl font-extrabold tracking-tight">
        {question.question}
      </h2>
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
            "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base transition-all border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none py-2 px-3 text-sm cursor-pointer";

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
