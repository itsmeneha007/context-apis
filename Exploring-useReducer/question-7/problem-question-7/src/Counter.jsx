import React, {useReducer} from 'react';
import './Counter.css';

const initialState = {count: 0};

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;        
    }    
}


function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className='counter-container'>
            <h1>Counter: {state.count}</h1>
            <div className='btn-group'>
                <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
                <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;