import React, {useReducer} from 'react'

const init = 0 
const reducer = (state, action )=>{
    switch(action){
        case 'increment': return state + 1 
        case 'decrement': return state - 1 
        case 'reset' :return init 
        default:return state
    }
}
function ReducerTest() {
    const [count , dispatch] = useReducer(reducer, init)
  return (
    <>
    <div> count : {count}</div>
    <button  onClick={()=>dispatch('increment')}>increment</button>
    <button onClick={()=>dispatch('decrement')}>decrement</button>
    <button onClick={()=>dispatch('reset')}>reset</button>
    </>
  )
}

export default ReducerTest