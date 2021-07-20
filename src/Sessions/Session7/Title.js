import React from 'react'

function Title() {
    console.log('Rendering Title')
    return (
        <div><h3>UseCallBack Hook</h3></div>
    )
}

export default React.memo(Title)

