'use client'

import Link from "next/link"

interface NavitemProps {
    title: string
    href: string
}

const Navitem: React.FC<NavitemProps> = ({
    title,
    href,
}) => {
    return (
        <div className="
            text-slate-600
            hover:text-slate-900
            cursor-pointer
        ">
            <Link href={href}>{title}</Link>
        </div>
    )
}

export default Navitem