import { GoogleGenAI, Type } from "@google/genai";
import type { ReviewResponse } from '../types';
import { FeedbackType } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const reviewSchema = {
    type: Type.OBJECT,
    properties: {
        review: {
            type: Type.ARRAY,
            description: "A list of feedback items for the code review.",
            items: {
                type: Type.OBJECT,
                properties: {
                    type: {
                        type: Type.STRING,
                        description: "The category of the feedback.",
                        enum: Object.values(FeedbackType),
                    },
                    line: {
                        type: Type.INTEGER,
                        description: "The specific line number the feedback applies to, if applicable."
                    },
                    suggestion: {
                        type: Type.STRING,
                        description: "A concise summary of the suggested improvement."
                    },
                    explanation: {
                        type: Type.STRING,
                        description: "A detailed explanation of the issue and the reason for the suggestion."
                    }
                },
                required: ["type", "suggestion", "explanation"]
            }
        }
    },
    required: ["review"]
};

export async function reviewCode(code: string): Promise<ReviewResponse> {
    const prompt = `
        You are 'Vision', an AI-powered senior software architect at VisionQuantech, and a world-class code reviewer. 
        Your task is to provide a detailed, constructive, and actionable code review for the following code snippet.
        Your feedback must be exceptionally insightful, identifying subtle issues that junior developers might miss.

        Analyze the code for the following aspects:
        1.  **Bugs**: Identify potential bugs, logical errors, race conditions, or unhandled edge cases. Provide concrete examples of inputs that would cause failure.
        2.  **Performance**: Pinpoint performance bottlenecks, inefficient algorithms, or unnecessary computations. Suggest more optimal solutions with complexity analysis if relevant.
        3.  **Security**: Uncover security vulnerabilities such as injection flaws, XSS, CSRF, insecure direct object references, or any potential data leaks.
        4.  **Style**: Comment on code style, naming conventions, and consistency. The goal is to improve readability and long-term maintainability.
        5.  **Best Practices & Architecture**: Check if the code follows established software design principles (e.g., SOLID), language-specific idioms, and modern architectural patterns. Suggest refactoring for better modularity and testability.

        Format your entire response as a single JSON object that adheres to the provided schema. Do not include any text, markdown, or code block syntax outside of the JSON object itself.

        Code to review:
        \`\`\`
        ${code}
        \`\`\`
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: reviewSchema,
            },
        });

        const jsonText = response.text.trim();
        // Sometimes the model might still wrap the JSON in markdown
        const sanitizedJson = jsonText.replace(/^```json\n/, '').replace(/\n```$/, '');
        const parsedResponse = JSON.parse(sanitizedJson) as ReviewResponse;
        return parsedResponse;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get review from Gemini API. The response may not be valid JSON.");
    }
}
