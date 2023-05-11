'use client'

import Image from "next/image"
import { useCallback, useEffect, useState } from 'react'
import usePortfolioModal from "../hooks/usePorfolioModal"

interface ThumbnailProps {
    alt: string
    src: string
    modalTitle?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
    alt,
    src,
    modalTitle
}) => {
    const [showThumbs, setShowThumbs] = useState(false)  
    const portfolioModal = usePortfolioModal() 

    useEffect(() => {
        setTimeout(() => {
            setShowThumbs(true)
        }, 300)
    }, [])

    const handleClick = useCallback(() => {
        if(!modalTitle) {
            return
        }

        portfolioModal.onOpen(modalTitle)
    }, [portfolioModal, modalTitle])

    return (
        <div 
            onClick={handleClick}
            className={`
                ${showThumbs ? 'opacity-100' : 'opacity-0'}
                row-span-1
                rounded-md
                cursor-pointer
                transition
                hover:-translate-x-1
                hover:-translate-y-1
                duration-300
                object-contain
                w-full
                h-full
                relative
        `}>
            <Image 
                alt={alt}
                src={src}
                fill
                style={{objectFit:"contain"}}
            />
        </div>
    )
}

export default Thumbnail