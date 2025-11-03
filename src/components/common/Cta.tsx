import React from 'react'

interface CtaProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Cta = ({ children, className, onClick }: CtaProps) => {
    return (
        <button onClick={onClick} className={`py-3 px-4 bg-off-gold text-off-black rounded-xs text-custom-xs leading-130 satoshi tracking-[1.5px] uppercase hover:text-off-gold hover:bg-transparent border-off-gold border duration-300 ${className}`}>{children}</button>
    )
}

export default Cta