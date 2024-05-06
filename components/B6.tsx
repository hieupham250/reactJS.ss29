import React, { useState } from "react";

export default function B6() {
  const [active, setActive] = useState<boolean>(true);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <button onClick={handleClick}>{active ? "Hiện" : "Ẩn"}</button>
    </>
  );
}
