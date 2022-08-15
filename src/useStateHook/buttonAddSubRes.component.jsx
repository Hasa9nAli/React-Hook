import React, {useState} from 'react'

function ButtonAddSubRes() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const addFive = () => {
        for(let i = 0 ; i<5 ; i++) {
            setCount(prevState => prevState + 1)
            
        }
        }

     
  return (
    <>
    <div>count : {count}</div>
    <button onClick={()=> setCount(initialCount)}>rest</button>

    <button onClick={()=> setCount(count + 1 )}>count +</button>
    <button onClick={()=> setCount(count - 1 )}>count -</button>
    <button onClick={addFive}> Add +5 </button>
    </>
  )

  }
export default ButtonAddSubRes