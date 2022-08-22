import React , {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {console.log(res.data); setPost(res.data)})
    }, [])
        

      

    return (
    <div>
      {post.map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  )
}

export default DataFetching