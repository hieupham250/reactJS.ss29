import React, { useState } from "react";

export default function B2() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <h1>Dữ liệu người dùng nhập: {inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập dữ liệu"
      />
    </>
  );
}
