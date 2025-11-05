import React from 'react'

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    ref?: React.RefObject<null>;
}

const Heading = ({ children, className, ref }: HeadingProps) => {
    return (
        <h2 ref={ref} className={`text-2xl satoshi leading-130 font-light ${className}`}>{children}</h2>
    )
}

export default Heading