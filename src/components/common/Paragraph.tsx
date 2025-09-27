import React from 'react'

interface ParagraphProps {
    children?: React.ReactNode;
    className?: string;
}

const Paragraph = ({ children, className = '', ...props }: ParagraphProps) => {
    return (
        <p
            {...props}
            className={`${className} text-custom-xs text-[#D1D1CD] font-medium leading-100 font-poppins`}
        >
            {children}
        </p>
    )
}

export default Paragraph