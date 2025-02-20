import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
const useEffectApi = () => {
    var [post,setpost]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        setpost(res.data);
        console.log(post);
      })
      .catch((err)=>console.log("Couldn't read the API"))
    },[])

  return (
    <div>
        <h1>THis is example for useEffectApi</h1>
        <h2></h2>
        <ol>
           {
            post.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))
            }
        </ol>
    </div>

  );
}

export default useEffectApi;
