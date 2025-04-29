import { getTranslations } from "next-intl/server";
import QuizContainer from "../../../../components/quiz-container";

export default async function Subject({ params }) {
  const { subject } = await params;

  const subjectKey = subject.toLowerCase();

  const t = await getTranslations("subject");
  const questions = t.raw(subjectKey)?.questions || [];

  return (
    <>
      <h1 className="pb-2 text-4xl leading-none font-semibold tracking-tight uppercase">
        {subject}
      </h1>
      {questions.length > 0 ? (
        <QuizContainer questions={questions} />
      ) : (
        <p className="text-lg text-gray-600">
          Sorry, there is no quiz available for "
          <span className="font-bold">{subject}</span>".
        </p>
      )}
    </>
  );
}
