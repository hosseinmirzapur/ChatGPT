import Welcome from "./components/Welcome"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata = {
	title: "AI Services",
	description: "Developed by Hossein Mirzapur",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Welcome />

				<main>{children}</main>
			</body>
		</html>
	)
}
