import React, { useState, useEffect } from 'react';
import './index.css'
// this session is about useState
const Session1 = () => {
    const [counter, setCounter] = useState(0)
    const [bgColor, setBgColor] = useState('black')
    const [quote, setQuote] = useState()

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            setQuote(data.content)
        })
    }, [counter])


    return (
        <div className="app" >
            <div className={`container ${bgColor}`} >
                <h1>Counter with Hooks</h1>
                <p>you click {counter} item</p>

                <div className="btns">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => setCounter(counter + 1)}
                    >Click Counter</button>

                    <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            bgColor === 'black' ?
                            setBgColor('gray') :
                            setBgColor('black') 
                        }}
                    >Change Back</button>
                </div>
                <div className="quote">
                    <p>{quote}</p>
                </div>
            </div>
        </div>
    )
}

export default Session1;