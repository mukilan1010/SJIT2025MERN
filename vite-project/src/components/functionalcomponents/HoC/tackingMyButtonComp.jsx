import React from "react";

const tackingMyButtonComp = (Component) => {
  const handleClick = () => {
    alert("The tracking info on clicking this Butting");
  };
  return props(
    <div>
      <form onClick={handleClick}>
        Email:
        <input type="text" />
        Password:
        <input type="text" />
        <Component {...props} />
      </form>
    </div>
  );
};

export default tackingMyButtonComp;
