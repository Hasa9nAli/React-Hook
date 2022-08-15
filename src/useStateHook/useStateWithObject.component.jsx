import React, {useState} from 'react'

function UseStateWithObject() {
    const [name , setName] = useState({firstName: '', lastName: ''})
    
  return (
    <form>
        <input 
        type = "text"
        value={name.firstName}
        onChange={(e) => {setName({  firstName: e.target.value})
        console.log(name)
    }}
        />
           <input 
        type = "text"
        value={name.lastName}
        onChange={(e) => {setName({ lastName: e.target.value})
    }}

        />
        <h1>{name.firstName} {name.lastName}</h1>
    </form>
    )
}

export default UseStateWithObject