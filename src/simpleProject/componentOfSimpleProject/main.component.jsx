import React,{useState} from 'react'; 
import style from './main.style.css';
import Cart from './cart.component';
function Main() {
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
  // this console loss the previous state
  console.log('out side => ',list)
    

  
  return (
    
    <div className='containerCartMain'>
        {/*sent the deleteFun as props */}
        <Cart nameList = {list} deleteFun ={deleteFun}  />
      
   
    </div>
  
  )
  }

export default Main