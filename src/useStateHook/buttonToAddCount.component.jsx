import React, { useState}from 'react'

function ButtonToAddCount() {
    // count => is the var name, and the value is the initial value of the var
    // setState = > is method that update the state 
    const [count, setCount] = useState(0)
    console.log(count)

    // console.log(setCount(10)) => this is error OK 😁
  return (
    <button onClick={()=> setCount(count + 1 )}>count {count}</button>
  )
}

export default ButtonToAddCount