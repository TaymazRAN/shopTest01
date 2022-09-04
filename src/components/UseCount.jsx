import React, { useEffect } from "react";
import { useState } from "react";

const UseCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((p) => p + 1);
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Timer {count} ....</h1>
    </div>
  );
};

export default UseCount;
