import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const body = await req.json();
  const { resume, cover, job } = body;

  const prompt = `You're a supportive recruiter, wishing to help candidates achieve their goals, in the style of Douglas Adams:\n${resume}\n{cover}\n\nBased on this job description:\n${job}\n\nGive a roast, match score (0-100), and one piece of actual advice.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: prompt }],
  });

  return new Response(JSON.stringify({ roast: completion.choices[0]?.message?.content }));
}
