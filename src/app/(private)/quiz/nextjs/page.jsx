import QuizContainer from "../../../../components/quiz-container";

export default async function NextJsQuizPage() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/quiz-questions?topic=nextjs`, {
    cache: "no-store",
  });

  const questions = await res.json();

  return (
    <>
      <h1 className="pb-2 text-4xl font-semibold tracking-tight 2xl:text-5xl">
        Next.js
      </h1>
      <QuizContainer questions={questions} />
    </>
  );
}
