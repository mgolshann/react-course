import React, { useEffect, useRef, useState } from 'react'
import './Session4.css'
import b1 from './img/b1.jpg'
import b2 from './img/b2.jpg'
import j1 from './img/j1.jpg'
import j2 from './img/j2.jpg'

export default function Session4() {
    return (
        <div className="app">
            <div className="container">
                <ImageToggle primary={b1} secondary={b2} />
                <ImageToggle primary={j1} secondary={j2} />
                <ImageToggle primary={b1} secondary={b2} />
                <ImageToggle primary={j1} secondary={j2} />
                <ImageToggle primary={b1} secondary={b2} />
                <ImageToggle primary={j1} secondary={j2} />
            </div>
        </div>
    )
}

export const ImageToggle = ({ primary, secondary }) => {

    const imgRef = useRef(null)
    const [viewed, setViewed] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", scrollHandle)
        setViewed(isView())
        setIsLoading(false)
    })

    const isView = () => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect()
            return rect.top >= 0 && rect.bottom <= window.innerHeight
        }
        return false
    }

    const scrollHandle = () => {
        setViewed(isView())
    }

    return isLoading ? null : (
        <div>
            <img
                width="350"
                height="400"
                src={viewed ? primary : secondary}
                ref={imgRef}
                alt="image"
            />
        </div>
    )
}