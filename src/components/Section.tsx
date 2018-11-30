import React from 'react'

interface SectionProps {
    id: string
    className?: string
    remove?: boolean
    style?: React.CSSProperties
    children: any
}


export default function Section(props: SectionProps) {
    const { id, className, remove, children, style, ...other } = props

    if (remove) {
        return null
    }

    return (
        <div className={`section ${className}`} id={id} style={style} {...other}>
            { children }
        </div>
    )
}


