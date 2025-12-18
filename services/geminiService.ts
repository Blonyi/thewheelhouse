
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getConciergeResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Eres el asistente virtual de "The Wheelhouse", la pista de patinaje más moderna de Las Palmas de Gran Canaria. 
        Ubicación exacta: Centro Comercial Las Ramblas, Nivel 1.
        Ofrecemos:
        1. Pista Principal para adultos con ambiente nocturno y neones.
        2. Zona Infantil con ayudantes de animales (elefantes, tigres, jirafas).
        3. Karaoke VIP privado.
        4. "The Diner": Comida americana clásica (perritos calientes, papas, batidos).
        Horario: Lunes a Domingo, de 10:00 a 00:00.
        Responde de manera amable, vibrante y entusiasta. Usa emojis relacionados con patinaje y neón.`,
      },
    });
    return response.text || "¡Uy! Mis ruedas se han bloqueado un segundo. ¿Me lo repites?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "¡Vaya! He tenido un pequeño tropiezo técnico. ¿Podrías preguntar de nuevo o llamarnos directamente?";
  }
};
