import React, {useEffect, useState} from 'react'


function UseEffectHookCounter() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })
  return (
    <button onClick={()=>setCount(count+1)}> add the count of title {count} see the title</button>
  )
}

export default UseEffectHookCounter