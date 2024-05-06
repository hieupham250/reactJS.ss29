import React, { useState } from "react";

export default function B5() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <>
      <button>{active ? "Hiện" : "Ẩn"}</button>
    </>
  );
}
