import React from "react";

export default function B1() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
