'use client'
import { useState } from "react";

export default function Home() {
  const [resume, setResume] = useState("");
  const [cover, setCover] = useState("");
  const [job, setJob] = useState("");
  const [roastResult, setRoastResult] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const sendRoast = async () => {
    const res = await fetch("/api/roast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume, cover, job }),
    });
    const data = await res.json();
  
    const text = data.roast as string;
    setRoastResult(text);
  
    const scoreMatch = text.match(/(\d{1,3})/); // crude parse
    if (scoreMatch) {
      const parsed = parseInt(scoreMatch[1]);
      if (!isNaN(parsed)) {
        setScore(parsed);
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">🔥 Resume Roast AI</h1>
      <textarea
        className="w-full p-2 border rounded mb-3"
        placeholder="Paste your resume here"
        rows={5}
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded mb-3"
        placeholder="Paste your cover letter here"
        rows={5}
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />      <textarea
        className="w-full p-2 border rounded mb-3"
        placeholder="Paste the job description here"
        rows={5}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button
        onClick={sendRoast}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Roast Me
      </button>
      {roastResult && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-bold text-black">💬 Roast Response</h2>
          <p className="whitespace-pre-wrap text-black">{roastResult}</p>
          {score !== null && (
            <p className="mt-2 font-bold text-red-600">🔥 Match Score: {score}/100</p>
          )}
        </div>
      )}
    </div>
  );
}
