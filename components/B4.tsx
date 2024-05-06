import React, { useState } from "react";

export default function B3() {
  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle dropdown change
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Tỉnh/ Thành phố: {inputValue}</h1>
      <select name="" id="" onChange={handleDropdownChange}>
        <option value="">--Chọn tỉnh / Thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
        <option value="Hà Tĩnh">Hà Tĩnh</option>
      </select>
    </>
  );
}
