import React from "react";
import ReactDOM from "react-dom";

import Numbers from "../public/Components/Numbers";
import Operators from "../public/Components/Operators";
import Output from "../public/Components/Output";

class App extends React.Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: [".", "+", "-", "/", "*", "=", "AC", "C"],
    output: []
  };

  numberClick = num => {
    const output = [...this.state.output];
    this.setState({ output: [...output, num] });
  };

  operatorClick = operator => {
    if (operator === "AC" || operator === "C") {
      this.setState({ output: "" });
    } else if (operator === "=") {
      let output = this.calC();
      this.setState({ output: output });
    } else {
      const output = [...this.state.output];
      this.setState({ output: [...output, operator] });
    }
  };

  calC = () => {
    let arrOutput = [...this.state.output].join("");
    let value;
    if (this.state.output.includes("+")) {
      let stringArr = arrOutput.split("+");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      // this.setState({ output: numArr.reduce((a, b) => a + b) });
      value = numArr.reduce((a, b) => a + b);
      console.log(value);
    } else if (this.state.output.includes("-")) {
      let stringArr = arrOutput.split("-");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      this.setState({ output: numArr.reduce((a, b) => a - b) });
    } else if (this.state.output.includes("/")) {
      let stringArr = arrOutput.split("/");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      this.setState({ output: numArr.reduce((a, b) => a / b) });
    } else if (this.state.output.includes("*")) {
      let stringArr = arrOutput.split("*");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      this.setState({ output: numArr.reduce((a, b) => a * b) });
    }
    return value;
  };

  render() {
    return (
      <>
        <h1>Calculator</h1>
        <div style={{ display: "flex", width: "30px" }}>
          <Output output={this.state.output} />
          <Numbers
            numbers={this.state.numbers}
            numberClick={this.numberClick}
          />
          <Operators
            operators={this.state.operators}
            operatorClick={this.operatorClick}
          />
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);