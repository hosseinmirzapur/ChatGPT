"use client"

import { useState } from "react"
import { Button, Input } from "reactstrap"
import Loading from "./loading"
import { openai } from "@/utils/openai"
import { CreateChatCompletionResponseChoicesInner } from "openai"
import ReactMarkdown from "react-markdown"

const ChatPage = () => {
	const [text, setText] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [answers, setAnswers] = useState<
		CreateChatCompletionResponseChoicesInner[]
	>([])

	const handleChatGPT = async () => {
		setAnswers([])
		setIsLoading(true)
		const response = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "assistant",
					content: text,
				},
			],
			temperature: 0.01,
		})
		setIsLoading(false)

		setAnswers(response.data.choices)
	}

	return (
		<>
			<div className="flex flex-col justify-center gap-5">
				<h2 className="text-center mt-2">Ask your question from ChatGPT</h2>

				<div className="lg:px-[400px]">
					<Input type="textarea" onChange={(e) => setText(e.target.value)} />
				</div>
				<div className="flex justify-center">
					<Button
						color="primary"
						disabled={isLoading || text === ""}
						onClick={handleChatGPT}>
						{isLoading ? <Loading hidden={!isLoading} /> : "Generate Response"}
					</Button>
				</div>
			</div>

			<div
				hidden={answers.length === 0}
				className="flex flex-col mt-3 bg-[#0049b7] lg:p-[200px] text-white gap-[100px] h-[120%]">
				<h3 className="justify-start underline">GPT says:</h3>

				<ReactMarkdown
					className="px-5"
					children={answers.at(0)?.message?.content ?? ""}
					components={{
						code({ className, children }) {
							return <code className={className}>{children}</code>
						},
					}}
				/>
			</div>
		</>
	)
}

export default ChatPage
