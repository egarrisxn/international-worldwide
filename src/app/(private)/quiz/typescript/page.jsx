import QuizContainer from "../../../../components/quiz-container";

export default async function TypeScriptQuizPage() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/quiz-questions?topic=typescript`, {
    cache: "no-store",
  });

  const questions = await res.json();

  return (
    <>
      <h1 className="pb-2 text-4xl font-semibold tracking-tight 2xl:text-5xl">
        TypeScript
      </h1>
      <QuizContainer questions={questions} />
    </>
  );
}
