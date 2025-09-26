import React from 'react'

interface HeadingProps {
    children: string;
    small?: boolean;
    black?: boolean;
    navyBlue?: boolean
    className?: string;
}

const Heading = ({ children, small, black, navyBlue, className = '', ...props }: HeadingProps) => {
    return (
        <h2
            {...props}
            className={`${className} font-bold leading-127 ${black ? "text-black" : navyBlue ? "text-navy-blue" : "text-white"
                } ${small ? "text-custom-2xl" : "sm:text-3xl text-custom-2xl"}`}
        >
            {children}
        </h2>
    )
}

export default Heading