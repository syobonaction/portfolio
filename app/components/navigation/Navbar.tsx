'use client'

import Navitem from "./Navitem"
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="
            block
            lg:flex-row
            lg:p-8
            lg:w-1/6
            lg:h-screen
            gap-3
            p-4
            w-full
            h-14
            shadow-xl
            bg-black
            bg-opacity-5
            backdrop-blur-sm
        ">
            <div 
                onClick={toggleMenu}
                className="
                    lg:hidden
                    flex
                    cursor-pointer
                    text-slate-600
                "
            >
                <GiHamburgerMenu />
            </div>
            <div className={`
                ${isMenuOpen ? 'block' : 'hidden'}
                lg:flex
                flex-col
                gap-3
            `}>
                <Navitem 
                    title="contact"
                    href="/"
                />
                <Navitem 
                    title="portfolio"
                    href="/portfolio"
                />
                <Navitem 
                    title="cv"
                    href=""
                />
            </div>
        </div>
    )
}

export default Navbar