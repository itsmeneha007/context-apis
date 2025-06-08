import React from 'react';
import BottomMainRight from './BottomMainRight';

function MainRight({userName}){
    return(
        <div style={{border:'1px solid green', padding:'10px', marginTop:'10px'}}>
            <h3>Main right component</h3>
            <BottomMainRight userName={userName}/>
        </div>
    )
}

export default MainRight;