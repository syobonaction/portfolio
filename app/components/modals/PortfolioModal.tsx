'use client'

import Modal from "./Modal"
import Image from "next/image"
import usePortfolioModal from "@/app/hooks/usePorfolioModal"

const PortfolioModal = () => {
    const portfolioModal = usePortfolioModal()
    const {
        title,
        subhead,
        imageAlt,
        imageSrc,
        text,
    } = portfolioModal.modalContent

    const modalBody = (
        <div>
            <h1 className="
                text-2xl
                font-semibold
            ">{title}</h1>
            <h2 className="pb-8">{subhead}</h2>
            {imageSrc && <Image 
                alt={imageAlt}
                src={imageSrc}
                width={300}
                height={300}
            />}
            <p>{text}</p>
        </div>
    )

    return (
        <Modal 
            isOpen={portfolioModal.isOpen}
            onClose={portfolioModal.onClose}
            body={modalBody}
        />
    )
}

export default PortfolioModal