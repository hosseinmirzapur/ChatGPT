import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
	apiKey: process.env.API_KEY,
})

export const openai = new OpenAIApi(configuration)
