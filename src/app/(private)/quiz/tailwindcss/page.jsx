import QuizContainer from '../../../../components/quiz-container';

export default async function TailwindCssQuizPage() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/quiz-questions?topic=tailwindcss`, {
    cache: 'no-store'
  });

  const questions = await res.json();

  return (
    <>
      <h1 className="text-4xl 2xl:text-5xl pb-2 font-semibold tracking-tight">
        Tailwind CSS
      </h1>
      <QuizContainer questions={questions} />
    </>
  );
}