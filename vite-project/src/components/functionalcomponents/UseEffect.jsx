import React, { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
    var [text,selectext]=useState("");
    useEffect(()=>{
      console.log(text);
    });
  return (
    <div>
        <h1>THis is UseEffect example</h1>
        <input type="text" value={text} onChange={(event)=>selectext(event.target.value)}/>

        <h1>the useeffect text: {text}</h1>
    </div>
  );
}
export default UseEffect;
