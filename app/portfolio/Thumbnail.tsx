'use client'

import Image from "next/image"
import { useEffect, useState } from 'react'

interface ThumbnailProps {
    alt: string
    src: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
    alt,
    src,
}) => {
    const [showThumbs, setShowThumbs] = useState(false)   

    useEffect(() => {
        setTimeout(() => {
            setShowThumbs(true)
        }, 300)
    }, [])

    return (
        <div className={`
            ${showThumbs ? 'opacity-100' : 'opacity-0'}
            row-span-1
            rounded-md
            cursor-pointer
            shadow-xl
            hover:shadow-2xl
            transition
            hover:-translate-x-1
            hover:-translate-y-1
            duration-300
            object-contain
        `}>
            <Image 
                alt={alt}
                src={src}
                width={300}
                height={300}
            />
        </div>
    )
}

export default Thumbnail