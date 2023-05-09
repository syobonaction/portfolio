interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
    children,
}) => {
    return (
        <div className="w-full h-full lg:flex lg:flex-row">
            {children}
        </div>
    )
}

export default Container