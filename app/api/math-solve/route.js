import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const { question } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `You are a friendly math tutor explaining concepts to a 7-year-old child. Solve this math problem and explain it in simple terms: "${question}"`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text();
    console.log(answer);

    return new Response(JSON.stringify({ answer }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}