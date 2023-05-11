import { useCallback } from "react"

interface ButtonProps {
    title: string,
    href?: string,
}

const Button: React.FC<ButtonProps> = ({
    title,
    href,
}) => {
    return (
        <a
            className="
                border-[1px] 
                p-2
                cursor-pointer
                hover:text-gray-400
                hover:border-gray-400
            "
            href={href}
            target="_blank"
        >
            {title}
        </a>
    )
}

export default Button