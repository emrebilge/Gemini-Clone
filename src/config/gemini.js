/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// This file is used to configure the Gemini API client. It is used to interact with the Gemini API.
// The Gemini API is a generative AI API that can be used to generate text based on a given prompt

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 * 
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const apiKey = "AIzaSyBQem8VM8SoJFW5HPR25m7hxyWRXbFxOCM";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const run = async (prompt) => {
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const safetySettings = {
    categories: [HarmCategory.HATEFUL, HarmCategory.VIOLENT],
    threshold: HarmBlockThreshold.HIGH,
  };

  try {
    const response = await model.generateContent([prompt], generationConfig, safetySettings);

    // const response = await model.ge({
    //   prompt,
    //   generationConfig,
    //   safetySettings,
    // });

    console.log(response.text); // Access the response text
  } catch (error) {
    console.error("Error generating text:", error);
  }
}

export { run };
