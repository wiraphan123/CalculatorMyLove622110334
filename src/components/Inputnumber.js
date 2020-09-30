import React, { useState } from "react";
import calculate from "./../service/index";

function Button({ onClick, children }) {
  const [groupNumber1, setGroupNumber1] = useState("");
  const [groupNumber2, setGroupNumber2] = useState("");
  const [operators, setOperators] = useState("");

  const readNumber = (number) => {
    setGroupNumber1(groupNumber1 + number);
  };
  const handleClickOperators = (operatorsButton) => {
    setOperators(operatorsButton);
    setGroupNumber2(groupNumber1);
    setGroupNumber1(" ");
  };
  return (
    <>
      <div>
        <div>&nbsp;{groupNumber1}&nbsp;</div>
      </div>

      <div>
        <button onClick={() => readNumber("1")}>1</button>
        <button onClick={() => readNumber("2")}>2</button>
        <button onClick={() => readNumber("3")}>3</button>
        <button onClick={() => handleClickOperators("+")}>+</button>
      </div>
      <div>
        <button onClick={() => readNumber("4")}>4</button>
        <button onClick={() => readNumber("5")}>5</button>
        <button onClick={() => readNumber("6")}>6</button>
        <button onClick={() => handleClickOperators("-")}>-</button>
      </div>
      <div>
        <button onClick={() => readNumber("7")}>7</button>
        <button onClick={() => readNumber("8")}>8</button>
        <button onClick={() => readNumber("9")}>9</button>
        <button onClick={() => handleClickOperators("*")}>*</button>
      </div>
      <div>
        <button
          onClick={() =>
            calculate(setGroupNumber1, groupNumber1, operators, groupNumber2)
          }
        >
          =
        </button>
        <button onClick={() => readNumber("0")}>0</button>
        <button onClick={() => handleClickOperators("/")}>/</button>
      </div>
    </>
  );
}

export default Button;
