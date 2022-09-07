import React, {useReducer} from 'react'
import ComponentA from './ComponentA';
import ComponentD from './ComponentD';
import ComponentF from './ComponentF'

export const CountContext = React.createContext()
const initialCount = 0 ; 
const reduced = (state, action) =>{
    switch(action) {
        case 'increment': return state + 1 
        case 'decrement': return state - 1
        case 'reset' : return initialCount 
        default : return state
    }
}


const  UseContextWithUseReducer = () => {
    const [count, dispatch] = useReducer(reduced, initialCount)
    
  return (
      <div>
    <CountContext.Provider value ={{countState : count , countDispatch : dispatch}}>
            Count - {count}
            <ComponentA></ComponentA>
            <br/>
            <ComponentD></ComponentD>
            <br/>

            <ComponentF></ComponentF>
    </CountContext.Provider>
        </div>
  )
}

export default UseContextWithUseReducer