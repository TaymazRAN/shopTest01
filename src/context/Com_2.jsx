import React, { useContext } from "react";
import { TempChange } from "./ContextApp";
const Com_2 = () => {
  const { temp, setTemp } = useContext(TempChange);
  return (
    <div>
      <h1>temp is : {temp} </h1>

      <button onClick={() => setTemp("Red")}> Red </button>
    </div>
  );
};

export default Com_2;
