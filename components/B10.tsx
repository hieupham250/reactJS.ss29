import React, { useState } from "react";

export default function B10() {
  const genders = ["Nam", "Nữ", "Khác"];

  const [currentGender, setCurrentGender] = useState<string>("Nam");

  const handleRandomGender = () => {
    const randomIndex = Math.floor(Math.random() * genders.length);
    const randomGender = genders[randomIndex];
    setCurrentGender(randomGender);
  };

  return (
    <div>
      <h2>Giới tính hiện tại: {currentGender}</h2>
      <button onClick={handleRandomGender}>Random gender</button>
    </div>
  );
}
