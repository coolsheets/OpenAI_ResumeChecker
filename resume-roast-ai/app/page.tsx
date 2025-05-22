'use client'
import { useState } from "react";

export default function Home() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");

  
  const sendRoast = async () => {
    const res = await fetch("/api/roast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume, job }),
    });
    const data = await res.json();
    console.log(data); // We'll handle display in Phase 3
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
    </div>
  );
}
