"use client"

import { Spinner } from "reactstrap"

const Loading = ({ hidden }: { hidden: boolean }) => {
	return (
		<Spinner
			hidden={hidden}
			className="flex justify-center text-center align-middle self-center">
			Loading...
		</Spinner>
	)
}

export default Loading
