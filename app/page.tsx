import Option from "./components/Option"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<span className={`${inter.className}`}>
			<Option />
		</span>
	)
}
