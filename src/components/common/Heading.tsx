import React from 'react'

interface HeadingProps {
    children: string;
    small?: boolean;
    white?: boolean;
    className?: string;
}

const Heading = ({ children, small, white, className = '', ...props }: HeadingProps) => {
    return (
        <h2
            {...props}
            className={`${className} font-bold leading-100 ${white ? "text-white" :"text-[#CCC0C0]"} ${small ? "text-custom-2xl" : "sm:text-custom-3xl text-custom-2xl"}`}
        >
            {children}
        </h2>
    )
}

export default Heading