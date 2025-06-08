import React from 'react';
import MainRight from './MainRight'

function Main ({userName}){
    return (
        <div style={{border:'1px solid blue', padding:'10px', marginTop:'20px'}}>
            <h2>Main component</h2>
            <MainRight userName={userName}/>
        </div>
    )
}

export default Main;