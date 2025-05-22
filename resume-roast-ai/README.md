# Phase 2 (20–40 min): Input UI & Basic API Route
**Goal**: Create the frontend input boxes and set up a backend API route /api/roast.

## 1. 🧑‍🎨 app/pages.tsx — UI Inputs
The main page should roughly resemble the pages.tsx file in this folder.

## 2. 🧠 app/api/roast/route.ts — Basic API Handler
A POST call to openAI's completions API. The prompt can be adjusted to tune the responses to your desire. Use Postman to try out the endpoint at http://localhost:3000/api/roast and give it a ```resume``` and ```job``` field in the body. Here is a sample to try out:

**resume** (The Legend of Chad):
```Name: Chad Thunderbyte  
Email: theChad@hotmail.biz  
Phone: (only available on Tuesdays)  
LinkedIn: lolnah  

Summary:  
I’m just built different. Once beat Solitaire on Expert mode with one hand. Looking to "get that bag" as soon as possible. Open to anything that pays in cash or pizza.

Experience:  
- CEO of My House (2019–Present)  
  • Managed several failed business ventures including reselling airpods I found on the bus.  
  • Negotiated peace between my two cats during mealtime.  

- Influencer (Instagram, TikTok)  
  • Grew follower count from 12 to 58 in just 3 years.  
  • Created viral content such as "Slipping on a Banana in Public for Likes."  

Skills:  
- Strong vibes  
- Mediocre typing speed  
- Fluent in sarcasm and emojis  
- Proficient in YOLO decision making  
- Can microwave 3 different kinds of ramen without burning them

Education:  
- Youtube University  
  • Majored in Crypto Investing (Lost it all)  
  • Minor in Motivational Quotes
```

**job** (Senior Backend Engineer – FinTech):
```
Company: StatFirm™

We are seeking a highly motivated and detail-oriented **Senior Backend Engineer** with 7+ years of production experience to help us revolutionize enterprise-level financial analytics.

Responsibilities:
- Architect scalable Node.js services with 99.999% uptime
- Collaborate with DevOps to containerize services in Kubernetes
- Implement secure APIs to handle financial transactions and personal data
- Write clean, tested TypeScript code with CI/CD pipelines
- Mentor junior developers

Qualifications:
- Proven production experience in Node.js and PostgreSQL
- Strong understanding of financial compliance regulations
- Cloud platform expertise (AWS or Azure)
- Degree in Computer Science or related field
- Bonus: Open-source contributions or published technical articles

Salary: $140k–$180k + equity  
Location: Hybrid, New York City
```