
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getConciergeResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Eres el asistente virtual de "The Wheelhouse", una pista de patinaje premium en Las Palmas de Gran Canaria. 
        Ofrecemos:
        1. Pista de patinaje para niños (Kids Rink).
        2. Pista de patinaje para adultos con luces de neón.
        3. Karaoke privado.
        4. Bar de cócteles y snacks.
        Horario: Lunes a Domingo, de 10:00 a 00:00.
        Ubicación: Las Palmas de Gran Canaria.
        Responde de manera amable, moderna y entusiasta. Ayuda a los usuarios con dudas sobre reservas y servicios.`,
      },
    });
    return response.text || "Lo siento, tuve un pequeño problema con mis patines. ¿Podrías repetir eso?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "¡Ups! Algo salió mal. Por favor, intenta de nuevo o contáctanos por teléfono.";
  }
};
