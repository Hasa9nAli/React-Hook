import React,{useState, useEffect, useReducer} from 'react'
import axios from 'axios'
 
const initialState = {
  loading : true, 
  post :{}, 
  error : ''
}

const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS': return {
      loading : false, 
      post: action.payload , 
      error :''
    }
    case 'FETCH_ERROR' :return{
      loading : false, 
      post: {} , 
      error :'something went wrong'
    }
    default: return state
  }

}

const FetchingWithUseReducer =()=> {
  const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('') ; 
    const [post, setPost] = useState({})

    useEffect(()=>{
         axios.get("https://api.github.com/users/hasa9nAli")
        .then(response=>{
          dispatch({type:"FETCH_SUCCESS", payload: response.data})
            // setLoading(false)
            // setError('')
            // setPost(response.data)
        })
        .catch(err=>{
            // setLoading(false)
            // setError('some thing wrong')
            // setPost('')
            dispatch({type:"FETCH_ERROR"})


        })
    })
  return (
    <div>{state.loading ? <h1>Loading</h1>: state.post.login}
        {state.error ? state.error : null }
    </div>
  )
}

export default FetchingWithUseReducer