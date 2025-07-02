'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  
  const handleClick = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <div className="p-8 w-full grid grid-cols-2 justify-between">
      <Link href="/" className="text-2xl">Charles Sismondi</Link>
      <div className="md:hidden">
        <div 
          className="grid gap-1 p-2 float-right content-center select-none w-8 h-8 text-center rounded-sm hover:cursor-pointer hover:bg-gray-950"
          onClick={handleClick}
        >
          {isMenuActive ?
          <>
            <div className="w-full">X</div>
          </>
          : 
          <>
            <div className="w-full border-t-2"></div>
            <div className="w-full border-t-2"></div>
            <div className="w-full border-t-2"></div>
          </>
          }
        </div>
      </div>
      <div className={`${isMenuActive ? "flex flex-col" : "hidden"} mt-4 md:mt-0 md:flex md:flex-row md:justify-end md:items-center gap-2 md:gap-8`}>
        <Link href="/cv">CV</Link>
        <a target="blank" href="https://www.goodreads.com/user/show/23976245-charles-cole">Bookshelf</a>
        <a target="blank" href="https://scritticorsari.substack.com/">Blog</a>
        <a href="mailto:charles.sismondi@gmail.com">Contact</a>
      </div>
    </div>
  )
}