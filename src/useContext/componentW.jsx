import React from 'react'
import {UserContext} from '../App'

function ComponentW() {
  return (
      <UserContext.Consumer>
            {
                name =>{
                    return <div>{name}</div>
                }
            }
      </UserContext.Consumer>
  )
}

export default ComponentW