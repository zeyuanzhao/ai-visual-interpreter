import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);
export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a visual interpreter and must help the user by answering questions about the image. Upon beginning the conversation, look at the provided image and describe it using details that a blind person would find relevant. Then, answer any questions that the user may have.",
});
