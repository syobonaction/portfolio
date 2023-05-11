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
        <div className={`
            grid
            grid-rows-2
            lg:p-8
            lg:w-1/6
            lg:h-screen
            p-4
            w-full
            h-14
            shadow-xl
            bg-black
            bg-opacity-5
            backdrop-blur-sm
            ${isMenuOpen && 'mb-28'}
        `}>
            <div 
                onClick={toggleMenu}
                className="
                    lg:hidden
                    flex
                    row-span-1
                    cursor-pointer
                    text-slate-600
                "
            >
                <GiHamburgerMenu />
            </div>
            <div className={`
                transition
                row-span-1
                duration-300
                ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
                lg:opacity-100
                bg-opacity-50
                mt-10
                lg:mt-0
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