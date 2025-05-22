# Phase 4 (60–90 min): Deploy to Vercel
**Goal**: Deploy the app to share with friends, family, and hiring managers who need a laugh.

## 🪄 1. Push to GitHub
Ensure that the build succeeds without errors:
```npm run build```
If this fails, then the deployment will also fail! So, ensure this passes.

Next, commit and push to your GitHub repo

## 🚀 2. Deploy to Vercel
Go to https://vercel.com

Import your GitHub repo

Add environment variable: OPENAI_API_KEY

Click “Deploy”

✅ Final product: Publicly accessible Resume Roast AI for you to show off or customize.

## 🧠 3. Additional Challenges
**Mild**:
Focus on UI polish, basic features, and light experimentation.

- Add a “Clear” Button. Let users reset the input fields and roast result.

- Add Character Counters. Show live character counts below the resume and job description boxes.

- Improve Layout with Responsive Design. Stack fields on mobile; side-by-side on desktop using Tailwind.

- Add Loading State. Show a spinner or “Roasting in progress…” message while awaiting API response.

- Add a Footer with Your Info. Add a link to your portfolio or a fun credit line: “Built with tears and TypeScript.”

- Allow Light/Dark Mode Toggle. Use Tailwind's dark: utilities to add basic theme switching.


**Medium**:
Adds API complexity, state handling, and user options.

- Add “Roast Mode” Selector. Dropdown or radio buttons for roast tone:

  🔥 Sarcastic Recruiter

  🤗 Hype Coach

  🤓 Honest Career Counselor

- Create a “Save My Roast” Feature. Save roast results to localStorage so users can revisit later.

- Generate a Visual Match Score. Use a progress bar or emoji-based rating system:

  0–25: 💀

  26–50: 😬

  51–75: 😐

  76–100: 🔥

- Add Cover Letter Generator. Add a second button to generate a personalized cover letter based on the job/resume.

- Log All Prompts/Responses to Console for Debugging. Help yourself understand what’s actually being sent and received.

- Deploy Silly Mode. Cover letter in Shakespearean, Pirate, or Rap format (based on a dropdown).


**Spicy**:
These will test your full-stack chops, creativity, or understanding of deployment environments.

- Add File Upload Support. Parse uploaded resumes (PDF or .docx) using a library like pdf-parse or mammoth.

- Add Rate Limiting or Abuse Prevention. Prevent too many API calls per user (simulate a production safeguard).

- Handle OpenAI Errors Gracefully. Show user-friendly errors if the API is down, missing keys, or input is too long.

- Enable Shared Roast Links. Store the roast in a database or temporary JSON blob and let users share via URL.

- Use OpenAI’s Function Calling API. Instead of plain text prompts, use structured output to extract roast, score, and advice cleanly.

- Add a “Buzzword Eliminator” Tool. Highlight and strike through words like “synergy,” “go-getter,” and “self-starter” in the resume before submission.

- Hook Up Real-Time Job Trends. Use LinkedIn API, Google Trends, or mock data to display trending skills the AI can recommend learning.

- Add Multiplayer Mode. Let people vote on whose roast was the most savage from a leaderboard of past submissions (requires backend/db).