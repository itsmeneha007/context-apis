import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

function NestedBox(){
    const {theme} = useContext(ThemeContext)

    const styles ={
        padding :'15px',
        marginTop: '10px',
        backgroundColor: theme === 'light' ? '#fff' : '#555',
        color: theme === 'light' ? '#000' : '#eee'
    }

    return (
        <div style={styles}>
            <h3>This is NestedBox</h3>
        </div>
    )
}

export default NestedBox;