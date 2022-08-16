import React,{useState,  useRef} from 'react'; 
import style from './main.style.css';
import Cart from './cart.component';
function Main() {
  const inputElement = useRef(null)
  const [toggleFlag , setToggleFlag] = useState(true);
  const [list , setList] = useState([
    {name: 'hasan'
    ,age: 20
    ,id: 1
    ,phone : '07722175445', 
    email : 'name@example.com'
  }, 
    {
      name: 'Hasan'
      ,age: 20
      ,id: 2
,phone : '07722175445', 
email : 'name@example.com'
    },  
    {
      name: 'Ali'   
      ,age: 30
      ,id: 3
      ,phone : '07722175445', 
      email : 'name@example.com'
    },
    {
      name: 'Omar'
      ,age: 28
      ,id: 4
,phone : '07722175445', 
email : 'name@example.com'
    },
  ]);
  // this function that take event and index 
  // the event from onClick={} and the index from map function 
  const deleteFun = (event, indexClicked) => {
    event.preventDefault();
    // return all the elements without the element that index of this element = index of the list
   
    // first way => {
   /* setList(list.filter((item, i) => i !== index)); */ 
    // second way => {
      setList((prevState)=> prevState.filter((item,arrayIndex ) => arrayIndex !==indexClicked ))
    // to show the changes 
    // this console hold the value of prevState
    console.log('inside =>',list) 
      
  }
  // change the value of toggleFlag
  const toggle = () => {
    setToggleFlag(!toggleFlag);
  } 
  // this console loss the previous state
  console.log('out side => ',list)
  // using the useRef to focus the input element 
  const focusRef = () =>{
    inputElement.current.focus()
  }
  const catchValueOfInput =()=> { 
    console.log(inputElement.current.value)
    

  }

  
  return (
    
    <div className='containerCartMain'>
        {/*sent the deleteFun as props */}
        <button 
        className='StartMenu' 
        onClick={()=> setToggleFlag(!toggleFlag)}>
        {toggleFlag ? 'hide item' : 'Show Item'}
        </button>
        <div>
          <input type='text' placeholder='handle text' ref={inputElement} onChange={catchValueOfInput}/ >

        </div>
        <button onClick ={focusRef}>Focus</button>
        <div className={toggleFlag ? 'show' : 'hide'}>
          <Cart nameList = {list} deleteFun ={deleteFun}  />
        </div>
   
    </div>
  
  )
  }

export default Main