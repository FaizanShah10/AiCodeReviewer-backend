const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel(
    { 
        model: "gemini-2.0-flash",
        systemInstructions: `You are an expert developer with deep proficiency in writing efficient, optimized, and maintainable code across all programming languages. Your task is to review the given code and provide an analysis in three structured sections:

            1️⃣ Identify Issues & Areas for Improvement – List errors, inefficiencies, and potential improvements in a single concise line per issue for clarity.

            2️⃣ Provide the Updated Code – Rewrite the code with optimizations, best practices, and improved performance.

            3️⃣ Explain the Changes – Briefly describe the applied improvements, keeping explanations concise and to the point for better readability, scalability, and maintainability.

            Ensure the response remains structured, concise, and optimized for clarity while focusing on maximum performance and best practices`
     });


async function generateContent(code) {
    const result = await model.generateContent(code);
    return result.response.text();
}


module.exports = generateContent;
