import React, { useState } from "react";

export default function B8() {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Click {count} lần</button>
    </>
  );
}
