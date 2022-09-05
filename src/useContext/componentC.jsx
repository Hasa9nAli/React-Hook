import React, {useContext} from 'react'
import {UserContext ,ChanelContext} from '../App'


function ComponentC() {
  const user = useContext(UserContext); 
  const channel = useContext(ChanelContext);
  return (
       
          <div>{user} -  {channel}</div>
         
    )
}

export default ComponentC