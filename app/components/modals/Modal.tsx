'use client'

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    title?: string
    body?: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    body,
}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setShowModal(false)

        setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose])

    if(!isOpen) {
        return null
    }

    return (
        <>
            <div className="
                justify-center
                items-center
                flex
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-black
                bg-opacity-50
                backdrop-blur-sm
            ">
                <div className="
                    relative
                    w-full
                    md:w-5/6
                    lg:w-4/6
                    xl:w-3/5
                    my-6
                    mx-auto
                    h-full
                    lg:h-auto
                    md:h-auto
                ">
                    <div className={`
                        translate
                        duration-300
                        h-full
                        ${showModal ? 'tanslate-y-0' : 'translate-y-full'}
                        ${showModal ? 'opacity-100' : 'opactiy-0'}
                    `}>
                        <div className="
                            translate
                            h-full
                            lg:h-auto
                            md:h-auto
                            border-0
                            rounded-md
                            bg-paper
                            text-white
                            shadow-lg
                            relative
                            flex
                            flex-col
                            w-full
                            outline-none
                            focus:outline-none
                        ">
                            <div className="
                                flex
                                items-center
                                p-6
                                relative
                            ">
                                <button 
                                    onClick={handleClose}
                                    className="
                                    border-0
                                    hover:opacity-80
                                    transition
                                    absolute
                                ">
                                    <IoMdClose size={18} />
                                </button>
                            </div>
                            {/* Body */}
                            <div className="relative p-6 flex-auto text-black">
                                {body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal