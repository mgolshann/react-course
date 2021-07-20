import React, { useState } from 'react'
import './Session2.css'

export default function Session2() {
    console.log(">>>>>>>>>>>")
    const [input, setInput] = useState('')
    const [history, setHistory] = useState([])

    const handleInput = (e) => {
        console.log(">>>>>")
        setInput(e.target.value)
        setHistory([...history, e.target.value])
    }

    return (
        <div className="app">
            <div className="container">
                <input
                    type="text"
                    className="input"
                    onChange={(e) => handleInput(e)}
                />
                <p>{input}</p>
                <hr />
                <ul>
                    {history.map(item => {
                        return <div>{item}</div>
                    })}
                </ul>
            </div>
        </div>
    )
}
