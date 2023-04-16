"use client"
import Image from "next/image"
import { Button } from "reactstrap"
import { useRouter } from "next/navigation"

const Option = () => {
	const { push } = useRouter()
	return (
		<div className="flex flex-row sm:gap-[220px] gap-[40px] justify-center sm:pt-[50px] pt-[150px]">
			<div className="flex flex-col p-[20px] sm:p-[20px] justify-center gap-5 cursor-pointer">
				<div className="flex justify-center">
					<Image
						src={"/generate-image.png"}
						alt="generate-image-logo"
						width={100}
						height={100}
					/>
				</div>
				<div className="flex justify-center text-center">
					<h3>DALL-E</h3>
				</div>
				<div className="flex justify-center">
					<Button
						color={"primary"}
						onClick={() => {
							push("/open-ai/generate-art")
						}}>
						Generate Images
					</Button>
				</div>
			</div>
			<div className="flex flex-col p-[50px] sm:p-[20px] justify-center gap-5 cursor-pointer">
				<div className="flex justify-center">
					<Image
						src={"/chatgpt-logo.png"}
						alt="chatgpt-logo"
						width={100}
						height={100}
					/>
				</div>

				<h3>ChatGPT</h3>

				<div className="justify-center w-auto">
					<Button
						color={"primary"}
						onClick={() => {
							push("/open-ai/chat")
						}}>
						Chat With AI
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Option
