import React from "react";
import { useState, useCallback } from "react";

function slowfunction(num) {
  return num * num;
}

const UseCallback = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(true);

  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
}
 
var numlist=useCallback(()=>{
    return [number+1,number+2,number+3];
},[number])

  return (
    <div>
      
        <button onClick={() => setTheme(!theme)}>Toggle theme</button>
        <div style={styling}>
          <h1>This is useMemo example</h1>
          Number Box:{" "}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <h2>The number is {number}</h2>
          <h2>The number is {slowfunction(number)}</h2>
        </div>
        <div>
            {
                numlist(0).map((val,index)=>{
                    <h2 key={index}>{val}</h2>
                })
            }
        </div>
      
    </div>
  );
};

export default UseCallback;
