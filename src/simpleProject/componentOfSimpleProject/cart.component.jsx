import React, {useState} from 'react'; 
import './cart.style.css';

// cart element has 2 props 
// nameList = {list} => the list of the all element 
// deleteFun ={deleteFun} => to pass the event and the index of element who it clicked
const  Cart =({nameList,deleteFun}) =>{
    // i make destructuring the name list props as the element 
    // nameList = List => the list of the all element
    // nameList = [{name : '' , age , id , phone , email}];
    // in the map takes the element as destructuring 
    // as {name,age,phone,email,id} = element
    // index represents the index of the element in the list 
  const card =  nameList.map(({name,age,phone,email,id},index) => {
    return (
        <div className='cartContainer' key = {id}>
            <h1 className='name'>{name}</h1>
            <p className='age'>{age}</p>
            <p className='phone'>{phone}</p>
            <p className='email'>{email}</p>
            <div className='remove' onClick={(event)=>deleteFun(event, index)}>x</div>
        </div>
    )
   })
   return card ; 
   }
   

export default Cart;