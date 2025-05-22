import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const body = await req.json();
  const { resume, cover, job } = body;

  const prompt = `You're a supportive recruiter, wishing to help candidates achieve their goals, in the style of Douglas Adams:\n${resume}\n{cover}\n\nBased on this job description:\n${job}\n\nGive a roast, match score (0-100), and one piece of actual advice.  Then re-write the resume and cover letter to match the job description.  Make sure to include the roast, score, advice, resume and cover letter in the response.  The roast should be humorous but not mean-spirited.  The advice should be actionable and specific.  The rewritten resume and cover letter should be tailored to the job description and be made available for download in .docx format.  The roast should be in the style of Douglas Adams, with a touch of humor and wit.\n\nRoast:`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: prompt }],
  });

  return new Response(JSON.stringify({ roast: completion.choices[0]?.message?.content }));
}
