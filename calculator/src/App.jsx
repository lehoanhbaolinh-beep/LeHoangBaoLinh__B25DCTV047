import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [expression, setExpression] = useState("");

  function handleClick(label) {
    if (label === "C") {
      setExpression("");
    } else if (label === "Delete") {
      setExpression(expression.slice(0, -1));
    } else if (label === "=") {
      const text = expression
        .replaceAll("×", "*")
        .replaceAll("÷", "/")
        .replaceAll("−", "-");
      try {
        setExpression(String(eval(text)));
      } catch {
        setExpression("Lỗi");
      }
    } else {
      setExpression(expression + label);
    }
  }

  return (
    <div className="calculator">
      <Display value={expression} />

      <div className="buttons">
        <Button label="C" color="green" onClick={handleClick} />
        <Button label="Delete" color="green" onClick={handleClick} wide />
        <Button label="÷" color="blue" onClick={handleClick} />

        <Button label="7" color="green" onClick={handleClick} />
        <Button label="8" color="green" onClick={handleClick} />
        <Button label="9" color="green" onClick={handleClick} />
        <Button label="×" color="blue" onClick={handleClick} />

        <Button label="4" color="green" onClick={handleClick} />
        <Button label="5" color="green" onClick={handleClick} />
        <Button label="6" color="green" onClick={handleClick} />
        <Button label="−" color="blue" onClick={handleClick} />

        <Button label="1" color="green" onClick={handleClick} />
        <Button label="2" color="green" onClick={handleClick} />
        <Button label="3" color="green" onClick={handleClick} />
        <Button label="+" color="blue" onClick={handleClick} />

        <Button label="0" color="green" onClick={handleClick} wide />
        <Button label="." color="green" onClick={handleClick} />
        <Button label="=" color="orange" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
