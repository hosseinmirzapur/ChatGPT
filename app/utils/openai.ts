import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
	apiKey: "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",
})

export const openai = new OpenAIApi(configuration)
