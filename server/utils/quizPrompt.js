export const buildQuizPrompt = ({ topic, numQuestions }) => {
  return `
You are a STRICT JSON generator for a quiz generation system.

⚠️ VERY IMPORTANT:
- Output MUST be valid JSON
- Your response will be parsed using JSON.parse()
- INVALID JSON will cause system failure
- Use ONLY double quotes "
- NO comments
- NO trailing commas
- Escape line breaks using \\n
- Do NOT use emojis inside text values

TASK:
Generate ${numQuestions} multiple choice questions based on the given topic.

INPUT:
Topic: ${topic}
Number of Questions: ${numQuestions}

QUIZ RULES (CRITICAL):
- Each question MUST have exactly 4 options
- Only ONE option must be correct
- Questions must be clear and exam-oriented
- Avoid very long sentences
- Options should be concise
- Correct answer MUST exactly match one of the options
- Questions should test understanding, not trivial facts
- Avoid repeating the same concept

FORMAT RULES:
- Return ONLY JSON
- Response MUST be an array
- Each object must follow the structure below

STRICT JSON FORMAT (DO NOT CHANGE):

[
  {
    "question": "string",
    "options": ["string", "string", "string", "string"],
    "correctAnswer": "string"
  }
]

RETURN ONLY VALID JSON.
`;
};