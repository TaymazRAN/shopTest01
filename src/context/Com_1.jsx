import React, { useContext } from "react";
import { TempChange } from "./ContextApp";

const Com_1 = () => {
  const { temp, setTemp } = useContext(TempChange);
  return (
    <div>
      <h1> {temp} ===================== Com_1 </h1>
      <button onClick={() => setTemp("Green")}> Green </button>
    </div>
  );
};

export default Com_1;
