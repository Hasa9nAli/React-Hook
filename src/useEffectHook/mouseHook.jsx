import React, {useState, useEffect} from 'react'
function MouseHook() {
    
    const [x , setX] = useState(0);
    const [y , setY] = useState(0);
    useEffect(()=>{
        window.addEventListener('mousemove', logMousePosition)
        return ()=>{
            window.removeEventListener('mousemove', logMousePosition)
        }
    })
    const logMousePosition = (e)=>{
        console.log('effect mouse position');
        setX(e.clientX)
        setY(e.clientY)
    }
  return (
<div> X ={`>`}  {x} Y ={`>`} {y} </div>
  )
}

export default MouseHook