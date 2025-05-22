"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const[resume, setResume] = useState("")
  const [job, setjobDescription] = useState("")

  // function handleJobChange(){
  //   setResume = (reume) => 
  // }
  return (
  <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">🔥 Resume Roast AI</h1>
      <textarea
        className="w-full p-2 border rounded mb-3"
        placeholder="Paste your resume here"
        rows={9}
        value={resume}
       //can i place this inside a function just preactise
        onChange={(e) => setResume(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded mb-3"
        placeholder="Paste the job description here"
        rows={5}
        value = {job}
        onChange={(e)=>setjobDescription(e.target.value)}
      />
      <button
       // onClick={sendRoast}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Roast Me
      </button>
    </div>
  );
    
}
