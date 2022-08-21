import React, {useState} from 'react'



function InputFilter({inputElement}) {
    const [filter , setFilter] = useState('');
    
const handleFilter = (e) =>{
    setFilter(e.target.value)
    console.log('filter=>',filter)

}
  return (
    <div>
    <input type='text' placeholder='handle text' ref={inputElement} onChange={handleFilter} value={filter}/ >
  </div>
  )
}

export default InputFilter