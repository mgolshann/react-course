import React, { useEffect, useRef } from 'react'
import b1 from './img/b1.jpg'
import b2 from './img/b2.jpg'
import j1 from './img/j1.jpg'
import j2 from './img/j2.jpg'
import './Session3.css'

export default function Session3() {
    console.log(">>>>>>>");
    useEffect(() => {
        console.log("efffff>>>>>>>")
    }, [])
    return (
        <div className="app">
            <div className="container">
                <IamgeToggle primary={b1} secondary={b2} />
                <IamgeToggle primary={j1} secondary={j2} />
            </div>
        </div>
    )
}


export const IamgeToggle = ({ primary, secondary }) => {
    const imgRef = useRef(null);
    return (
        <div>
            <img
                src={primary}
                ref={imgRef}
                onMouseOver={() => imgRef.current.src = secondary}
                onMouseOut={() => imgRef.current.src = primary}
            />
        </div>
    )
}




