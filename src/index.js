import React from "react";
import ReactDOM from "react-dom";

import Numbers from "../public/Components/Numbers";
import Operators from "../public/Components/Operators";
import Output from "../public/Components/Output";

class App extends React.Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: [".", "+", "-", "/", "*", "=", "AC", "C"],
    // output: [],
    output: [0]
  };

  // numberClick = num => {
  //   const output = [...this.state.output];

  //   if (output.length === 0 && num === "0") {
  //     console.log(output.length, output[0], num);
  //     this.setState({ output: [] });
  //   } else {
  //     this.setState({ output: [...output, num] });
  //   }
  // };

  numberClick = num => {
    const output = [...this.state.output];

    if (output[0] === 0 && num !== "0") {
      console.log(output.length, output[0], num);
      this.setState({ output: num });
    } else {
      this.setState({ output: [...output, num] });
    }
  };

  operatorClick = operator => {
    if (operator === "AC" || operator === "C") {
      this.setState({ output: [0] });
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

    let value = [];
    if (this.state.output.includes("+")) {
      let stringArr = arrOutput.split("+");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      value.push(numArr.reduce((a, b) => a + b));
    } else if (this.state.output.includes("-")) {
      let stringArr = arrOutput.split("-");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      value.push(numArr.reduce((a, b) => a - b));
    } else if (this.state.output.includes("/")) {
      let stringArr = arrOutput.split("/");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      value.push(numArr.reduce((a, b) => a / b));
    } else if (this.state.output.includes("*")) {
      let stringArr = arrOutput.split("*");
      let numArr = [Number(stringArr[0]), Number(stringArr[1])];
      value.push(numArr.reduce((a, b) => a * b));
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
