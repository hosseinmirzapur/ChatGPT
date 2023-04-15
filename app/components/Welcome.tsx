"use client"

import { useRouter } from "next/navigation"

const Welcome = () => {
	const { push } = useRouter()
	return (
		<header className="flex flex-col justify-center bg-blue-700 sm:w-[300px] text-white h-[130px] gap-3 w-auto md:w-auto">
			<h1
				className="text-center font-bold cursor-pointer"
				onClick={() => {
					push("/")
				}}>
				OpenAI Services
			</h1>
			<p className="text-center font-semibold">AI at your Fingertips</p>
		</header>
	)
}

export default Welcome
