import React, {useState} from 'react'
import MouseHook from './mouseHook'


function MouseContainer() {
    const [display , setDisplay] = useState(true)
  return (
    <>
    <button onClick={()=>setDisplay(!display)} > toggle display</button>
    {display &&  <MouseHook />}
    </>
  )
}

export default MouseContainer