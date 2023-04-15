"use client"
import { Button } from "reactstrap"
import { useState } from "react"
import { Input } from "reactstrap"
import { openai } from "@/utils/openai"
import Loading from "./loading"
import CustomModal from "@/app/components/CustomModal"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const ArtGeneratorPage = () => {
	const [text, setText] = useState("")
	const [images, setImages] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [errorModal, setErrorModal] = useState(false)
	const [responsive, setResponsive] = useState({
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 500 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 500, min: 100 },
			items: 2,
		},
	})

	const handlePrompt = async () => {
		if (text === "") {
			toggleErrorModal()
			return false
		}
		setIsLoading(true)
		try {
			const response = await openai.createImage({
				prompt: text,
				n: 4,
				size: "512x512",
			})
			setImages(response.data.data)
		} catch (error) {
			console.error(error)
		}
		setIsLoading(false)
	}

	const toggleErrorModal = () => setErrorModal(!errorModal)

	return (
		<>
			<div className="flex flex-col justify-center align-middle text-center gap-4">
				<div className="flex justify-center">
					<h2>Generate Image by Prompt!</h2>
				</div>
				<p className="flex justify-center w-auto">
					Fill in the input with your desired image description and press send
					to see the magic...
				</p>
				<div className="flex justify-center w-auto lg:px-[400px]">
					<Input type="textarea" onChange={(e) => setText(e.target.value)} />
				</div>
				<div className="flex justify-center text-center w-auto">
					<Button disabled={isLoading} color={"primary"} onClick={handlePrompt}>
						{isLoading ? <Loading hidden={false} /> : "Generate Images"}
					</Button>
				</div>
				<div
					hidden={images.length === 0}
					className="flex flex-col lg:flex-row  justify-center align-middle gap-4 w-auto">
					<Carousel
						responsive={responsive}
						className="flex justify-center text-center align-middle">
						{images.map((image, index) => (
							<img key={index} src={image.url} alt="generated-image" />
						))}
					</Carousel>
				</div>

				<CustomModal isOpen={errorModal} toggleModal={toggleErrorModal}>
					The input cannot be empty.
				</CustomModal>
			</div>
		</>
	)
}

export default ArtGeneratorPage
