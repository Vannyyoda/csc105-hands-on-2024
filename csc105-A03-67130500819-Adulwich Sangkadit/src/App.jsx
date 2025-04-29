import { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const CH = (operation) => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;

    switch (operation) {
      case "add":
        setResult(result + value);
        break;
      case "subtract":
        setResult(result - value);
        break;
      case "multiply":
        setResult(result * value);
        break;
      case "divide":
        if (value !== 0) setResult(result / value);
        break;
      default:
        break;
    }
    setInputValue("");
  };

  return (
    <div className="calculator-container">
      <div className="calculator-box">
        <h2>Simple Calculator</h2>
        <div className="result">Result: {result}</div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <div className="buttons-container">
          <button className="add" onClick={() => CH("add")}>Add</button>
          <button className="subtract" onClick={() => CH("subtract")}>Subtract</button>
          <button className="multiply" onClick={() => CH("multiply")}>Multiply</button>
          <button className="divide" onClick={() => CH("divide")}>Divide</button>
        </div>
        
        <div className="reset-buttons">
          <button className="reset-input" onClick={() => setInputValue("")}>Reset Input</button>
          <button className="reset-result" onClick={() => setResult(0)}>Reset Result</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;