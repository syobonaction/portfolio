'use client'
import { Nunito, Calligraffitti } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
const calligraffitti = Calligraffitti({ subsets: ['latin'], weight: '400' })

const Content = () => {
    return (
        <div className={`
            ${nunito.className} 
            flex 
            flex-col 
            justify-between 
            h-full
        `}>
            <div>
                <h1 className={`${calligraffitti.className} text-xl lg:text-3xl`}>Charles Cole</h1>
                <h2 className="text-sm lg:text-md">Sr. Software Engineer</h2>
            </div>
            <div className="text-sm">
                <p>+41 78 225 54 87</p>
                <p>charles.sismondi<span>@</span>gmail.com</p>
            </div>
        </div>
    )
}

export default Content