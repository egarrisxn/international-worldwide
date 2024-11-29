import {NextResponse} from 'next/server';
import {
  nextjsQuestions,
  reactQuestions,
  vercelQuestions
} from '../../../data/get-quiz-data';

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const topic = searchParams.get('topic');

  const allQuestions = {
    nextjs: nextjsQuestions,
    react: reactQuestions,
    vercel: vercelQuestions
  };

  if (topic && allQuestions[topic]) {
    return NextResponse.json(allQuestions[topic]);
  } else {
    return NextResponse.json({error: 'Topic not found'}, {status: 404});
  }
}
