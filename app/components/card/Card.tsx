'use client'

import Content from './Content'
import { useEffect, useState } from 'react'

const Card = () => {
    const [showCard, setShowCard] = useState(false)   

    useEffect(() => {
        setTimeout(() => {
            setShowCard(true)
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
                ${showCard ? 'opacity-100' : 'opacity-0'}
                bg-paper
                p-4
                lg:p-8
                w-56
                h-96
                -translate-y-10
                lg:-translate-y-0
                lg:w-[348px]
                lg:h-[548px]
                rounded-2xl
                justify-self-center
                transition
                hover:-translate-x-1
                hover:-translate-y-1
                duration-300
                shadow-md
                hover:shadow-xl
            `}>
                <div className="
                    opacity-70
                    h-full
                ">
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Card