import OpenAI from "openai";

import { OPENAI_KEY } from "./constants";

const clientAi = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default clientAi;
