'use client'

import Image from "next/image"
import { useEffect, useState } from 'react'

export default function CV() {
    const [showCV, setShowCV] = useState(false)   

    useEffect(() => {
        setTimeout(() => {
            setShowCV(true)
        }, 300)
    }, [])

    return (  
        <div className="
            m-auto
            flex
            lg:w-auto
            lg:h-auto
            w-full
            h-full
        ">
            <div className={`
                m-auto
                p-4
                lg:p-8
                w-[348px]
                h-[548px]
                -translate-y-10
                lg:-translate-y-0
                lg:w-[600px]
                lg:h-[800px]
                rounded-sm
                justify-self-center
                transition
                hover:-translate-x-1
                hover:-translate-y-1
                duration-300
            `}>
                <div className={`
                    h-full
                    transition
                    ${showCV ? 'opacity-100' : 'opacity-0'}
                `}>
                    <Image 
                        alt="my cv"
                        src="/images/cv.jpeg"
                        fill
                        style={{objectFit:"contain"}}
                    />
                </div>
            </div>
        </div>
    )
  }