import React, { useState } from 'react'

function About(){
    var initalval=0;
    var[num,setNum] =useState(initalval)

    function handleDecrement(){
        setNum(num-1)
    }
    function handleIncrement(){
        setNum(num+1)
    }
    function Zero(){
      setNum(0);
    }

  return (
    <div>
      <h1>About</h1>
      <h2>This is useState Example</h2>
      <h2>State inital value is {initalval}</h2>
      <button onClick={handleDecrement}>-</button>
      <h3>Updating State: {num}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onDoubleClick={Zero}>Reset</button>
    </div>
  );
}

export default About
