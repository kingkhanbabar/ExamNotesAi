export const buildPrompt =({
    topic,
    classLevel,
    examType,
    revisionMode,
    includeDiagram,
    includeChart
})=>{
    return `
    you are a STRICT JSON generator for an exam prepration system.
    
    ⚠️ VERY IMPORTANT:
    -Output MUST be valid JSON
    -Your response will be parsed using JSON.parse()
    -INVALID JSON will cause system failure
    -Use ONLY double quotes "
    -No comments,No trailing commas
    -Escape line breaks using \\n 
    -Do not use emojis inside text values
    
    TASK:
    Convert the given topic into exam-focused notes>
    
    INPUT:
    Topic:${topic}
    Class Level:${classLevel || "not specified"}
    Exam Type:${examType || "General"}
    Revision Mode:${revisionMode ? "ON":"OFF"}
    Include Diagram:${includeDiagram ? "YES":"NO"}
    Include Chart:${includeChart ? "YES":"No"}
    
    GLOBAL CONTENT RULES:
    -Use clear,simple,exam-oriented language
    -Notes MUST be Markdown formatted
    -Heading and bullet points Only 


REVISION MODE RULES (CRITICAL):

-If REVISION MODE is ON:
  -Notes must be VERY SHORT
   -Only bullet points
   -One-line answers only
  -Definitions, formulas, keywords
-No paragraphs
-No explanations
-Content must feel like:
   -last-day revision
    -5-minute exam cheat sheet
-revisionPoints MUST summarize ALL important facts


-If REVISION MODE is OFF:
  -Notes must be DETAILED but exam-focused
  -Each topic should include:
    -definition
    -short explanation
     -examples (if applicable)
    -Paragraph length max 2–4 lines
    -No storytelling, no extra theory

    
    
IMPORTANT RULES:
- Divide sub-topics into THREE categories:
    - ⭐ Very Important Topics
    - ⭐⭐ Important Topics
    - ⭐⭐⭐ Frequently Asked Topics
- All three categories MUST be present
- Base importance on exam frequency and weightage

DIAGRAM RULES:
- IF INCLUDE DIAGRAM is YES:
    - diagram.data MUST be a SINGLE STRING
    - Valid Mermaid syntax only
    - Must start with: graph TD
    - Wrap EVERY node label in square brackets [ ]
    - Do NOT use special characters inside labels
- IF INCLUDE DIAGRAM is NO:
    - diagram.data MUST be ""

CHART RULES (RECHARTS):
- IF INCLUDE CHARTS is YES:
    - charts array MUST NOT be empty
    - Generate at least one chart
    - Choose chart based on topic type:
        - THEORY topic → bar or pie (importance / weightage)
        - PROCESS topic → bar or line (steps / stages)
    - Use numeric values ONLY
    - Labels must be short and exam-oriented
- IF INCLUDE CHARTS is NO:
    - charts MUST be []

    CHART TYPES ALLOWED:
    -bar
    -line
    -pie

    CHART OBJECT FORMAT:
    {
      "type":"bar | line | pie ",
      "title":"string",
      "data":[
        {"name":"string","value":10}
      ]
    
    }
  

    STRICT JSON FORMAT (DO NOT CHANGE):
   {
  "subTopics": {
    "⭐": [],
    "⭐⭐": [],
    "⭐⭐⭐": []
  },
  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",
  "notes": "string",
  "revisionPoints": [],
  "questions": {
    "short": [],
    "long": [],
    "diagram": ""
  },
  "diagram": {
    "type": "flowchart | graph | process",
    "data": ""
  },
  "charts": []
}

RETURN ONLY VALID JSON.
    `;
};