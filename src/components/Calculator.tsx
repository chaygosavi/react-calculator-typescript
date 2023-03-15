import React from "react";
import Button from "./Button";

const Calculator: React.FC<{}> = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(4,_80px)] grid-rows-[repeat(5,_80px)] gap-[10px]">
        <Button label="9" />
        <Button label="8" />
        <Button label="7" />
        <Button label="6" />
        <Button label="5" />
        <Button label="4" />
        <Button label="3" />
        <Button label="2" />
        <Button label="1" />
      </div>
    </div>
  );
};

export default Calculator;
