import React, { useState } from "react";

export default function B7() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const handleAddNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setNumbers([...numbers, randomNumber]);
  };

  const arrayToString = (arr: number[]) => {
    return "[" + arr.join(", ") + "]";
  };
  return (
    <>
      <h3>Mảng số: {arrayToString(numbers)}</h3>
      <button onClick={handleAddNumber}>Add elemnent</button>
    </>
  );
}
