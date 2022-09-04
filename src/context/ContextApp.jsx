import React, { createContext } from "react";
import { useState } from "react";
import Com_1 from "./Com_1";
import Com_2 from "./Com_2";

export const TempChange = createContext(""); /// بلند گو

const ContextApp = () => {
  const [temp, setTemp] = useState("white");
  return (
    <TempChange.Provider value={{ temp, setTemp }}>
      <div style={{ padding: 100, fontSize: 50, backgroundColor: `${temp}` }}>
        ok
        <Com_1 />
        <Com_2 />
      </div>
    </TempChange.Provider>
  );
};

export default ContextApp;
