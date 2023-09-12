import type { NextRequest } from 'next/server';
 
export const config = {
  runtime: 'edge',
  regions: ['iad1', 'cdg1'],
};
 
export default function handler(request: NextRequest) {
  const { searchParams } = new URL(request.url);
 
  return new Response(
    JSON.stringify({
      body: request.body,
      query: searchParams.get('query'),
      cookies: request.cookies,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}