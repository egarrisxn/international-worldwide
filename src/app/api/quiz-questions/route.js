import {NextResponse} from 'next/server';
import {
  cssQuestions,
  htmlQuestions,
  javascriptQuestions,
  nextjsQuestions,
  nodejsQuestions,
  reactQuestions,
  sqlQuestions,
  tailwindcssQuestions,
  typescriptQuestions,
  vercelQuestions
} from '../../../data/get-quiz-data';

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const topic = searchParams.get('topic');

  const allQuestions = {
    css: cssQuestions,
    html: htmlQuestions,
    javascript: javascriptQuestions,
    nextjs: nextjsQuestions,
    nodejs: nodejsQuestions,
    react: reactQuestions,
    sql: sqlQuestions,
    tailwindcss: tailwindcssQuestions,
    typescript: typescriptQuestions,
    vercel: vercelQuestions
  };

  if (topic && allQuestions[topic]) {
    return NextResponse.json(allQuestions[topic]);
  } else {
    return NextResponse.json({error: 'Topic not found'}, {status: 404});
  }
}
