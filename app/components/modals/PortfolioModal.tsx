'use client'

import Modal from "./Modal"
import Image from "next/image"
import usePortfolioModal from "@/app/hooks/usePorfolioModal"
import Button from "../Button"

const PortfolioModal = () => {
    const portfolioModal = usePortfolioModal()
    const {
        title,
        subhead,
        imageAlt,
        imageSrc,
        text,
        linkUrl,
    } = portfolioModal.modalContent

    const modalBody = (
        <div className="text-white">
            <h1 className="
                text-2xl
                font-semibold
                opacity-70
            ">{title}</h1>
            <h2 className="pb-16 text-gray-300">{subhead}</h2>
            <div>
                <div className="
                    m-auto 
                    rounded-sm 
                    drop-shadow-lg
                    flex 
                    place-content-center
                ">
                    {imageSrc && <Image 
                        alt={imageAlt}
                        src={imageSrc}
                        width={400}
                        height={300}
                    />}
                </div>
                <div className="p-12 opacity-70">
                    <p>{text}</p>
                </div>
            </div>
            {linkUrl && <Button 
                href={linkUrl}
                title="View Live"
            />}
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