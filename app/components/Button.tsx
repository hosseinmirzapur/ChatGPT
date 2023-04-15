export enum ButtonType {
	primary = "primary",
	danger = "danger",
	success = "success",
	secondary = "secondary",
}

interface ComponentProps {
	color: ButtonType
	width?: number | string
	height?: number | string
	children?: React.ReactNode
	onClick?: () => void
}

const handleButtonColor = (type: ButtonType): string => {
	switch (type) {
		case "primary":
			return "bg-blue-600 text-white"
		case "danger":
			return "bg-red-600 text-white"
		case "success":
			return "bg-green-600 text-white"
		case "secondary":
			return "bg-gray-400 text-gray-700"
		default:
			return ""
	}
}

const Button: React.FC<ComponentProps> = ({
	color,
	width = "auto",
	height = "auto",
	children,
	onClick,
}) => {
	return (
		<>
			<button
				onClick={onClick}
				className={`${handleButtonColor(
					color,
				)} flex justify-center text-center align-middle p-2 rounded-2xl w-${width} h-${height}`}>
				{children}
			</button>
		</>
	)
}

export default Button
