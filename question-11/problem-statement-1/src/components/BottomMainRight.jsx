import React from 'react'
function BottomMainRight({userName}){
    return(
        <div>
            <h4>Bottom main right</h4>
            <p>Hello, <strong>{userName || 'Guest'}</strong>!</p>
        </div>
    )
}

export default BottomMainRight;