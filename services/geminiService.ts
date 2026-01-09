import { GoogleGenAI, Chat } from "@google/genai";
import { USER_INFO, PROJECTS, EXPERIENCE, SKILLS } from '../constants';

const API_KEY = process.env.API_KEY || '';

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // We assume the key is present as per instructions.
    // Ideally, we'd handle the missing key case gracefully in the UI.
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

// Construct a system prompt based on the portfolio data
const systemInstruction = `
You are an AI assistant for ${USER_INFO.name}'s portfolio website. 
Your goal is to answer questions about ${USER_INFO.name} based on the following data:

Bio: ${USER_INFO.bio}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.duration})`).join('; ')}
Projects: ${PROJECTS.map(p => `${p.name}: ${p.description}`).join('; ')}

Be professional, concise, and helpful. Adopt a tone similar to a helpful developer colleague.
If asked about contact info, provide: ${USER_INFO.email}.
If asked a technical question outside the scope of the portfolio, try to answer briefly but tie it back to the candidate's skills if possible.
`;

export const createChatSession = (): Chat => {
  const client = getClient();
  return client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    },
  });
};
