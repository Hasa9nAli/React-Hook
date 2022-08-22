import React,{useState, useEffect} from 'react'

function IntervalHook() {
    const [count , setCount] = useState(0)
    const tick = ()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick , 1000)
        return ()=>{
            clearInterval(interval)
        }
        
    })
  return (
    <h1>{count}</h1>
  )
}

export default IntervalHook