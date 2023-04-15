"use strict"

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

interface ModalProps {
	isOpen: boolean
	toggleModal: () => void
	onClosed?: () => void
	children: React.ReactNode
}

const CustomModal = ({
	isOpen,
	toggleModal,
	onClosed,
	children,
}: ModalProps) => {
	return (
		<Modal isOpen={isOpen} centered toggle={toggleModal} onClosed={onClosed}>
			<ModalHeader toggle={toggleModal} />
			<ModalBody>{children}</ModalBody>
			<ModalFooter>
				<div className="flex justify-center align-middles text-center">
					<Button color={"danger"} onClick={toggleModal}>
						Understood!
					</Button>
				</div>
			</ModalFooter>
		</Modal>
	)
}

export default CustomModal
