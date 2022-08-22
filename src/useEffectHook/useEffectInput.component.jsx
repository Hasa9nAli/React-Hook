import React,{useState, useEffect} from 'react'

function UseEffectInput() {

  const [count , setCount] = useState(''
  );
  useEffect(()=>{
    console.log('useEffect - Upload  the title');
    document.title = `You clicked ${count} times`
  }, [count] )
  return (
    <>
    <div>UseEffectInput</div>
    <input
    type = "text"
    value = {count}
    onChange = {(e)=>setCount(e.target.value)}

    />
    </>
  )
}

export default UseEffectInput