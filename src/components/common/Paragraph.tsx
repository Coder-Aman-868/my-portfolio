import React from 'react'

interface ParagraphProps {
    children: React.ReactNode
    className?: string
}

const Paragraph = ({ children, className }: ParagraphProps) => {
    return (
        <p className={`chillax font-light opacity-60 text-custom-2xl text-center  ${className}`}>{children}</p>
    )
}

export default Paragraph