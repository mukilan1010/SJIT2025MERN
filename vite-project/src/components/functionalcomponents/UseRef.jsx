import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  var [text, setText] = useState("");
  var previousRender = useRef();
  useEffect(() => {
    previousRender.current = text;
    console.log(previousRender.current);
  }, [text]);

  return (
    <div>
      <h1>This is useref</h1>
      Type your text:{" "}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <h2>The current render test is {text} </h2>
      <h2>The previous render test is {previousRender.current} </h2>
    </div>
  );
};

export default UseRef;
