import React, { useEffect } from "react";

import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("")
  
     
    const handleClick = (value) => {
        if (value === "C") {
        setInput("");
        } else if (value === "DEL") {
        setInput((prev) => prev.slice(0, -1));
        } else if (value === "=") {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
        } else {
        setInput((prev) => prev + value);
        }
    };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C","DEL"
  ];

  return (
    <div className="flex items-center justify-center min-h-screen ">
      
      <div className="bg-gray-800 rounded-2xl shadow-xl p-6 w-80">
        <div className="text-left mb-12 p-4 bg-gray-200 rounded text-xl font-black h-14">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-4 text-xl bg-blue-100 hover:bg-blue-300 rounded-xl transition-all"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;