import React, { useState } from "react";

export default function B3() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <h1>Thời gian: {inputValue}</h1>
      <input
        type="Date"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập dữ liệu"
      />
    </>
  );
}
