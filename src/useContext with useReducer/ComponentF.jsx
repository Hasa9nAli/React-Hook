import React, {useContext} from 'react'
import {CountContext} from './useContextWithUseReducer'

function ComponentF() {
  const countContext = useContext(CountContext)
  return (
    <>
    Component f {countContext.countState}
    <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
    </>
    )
}

export default ComponentF