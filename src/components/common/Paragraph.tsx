import React from 'react'

interface ParagraphProps {
    children: React.ReactNode
    className?: string
    ref?: React.RefObject<null>
}

const Paragraph = ({ children, className, ref }: ParagraphProps) => {
    return (
        <p ref={ref} className={`chillax font-light opacity-60 text-custom-2xl text-center leading-160 ${className}`}>{children}</p>
    )
}

export default Paragraph