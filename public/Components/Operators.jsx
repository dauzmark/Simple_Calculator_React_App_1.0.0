import React from "react";
export default class Operators extends React.Component {
  handleClick = e => {
    this.props.operatorClick(e.target.value);
  };
  render() {
    return (
      <div style={{ width: "100px", backgroundColor: "pink", padding: "5px" }}>
        {this.props.operators.map(operator => {
          return (
            <input
              type="submit"
              value={operator}
              onClick={this.handleClick}
              key={1 + Math.random()}
              style={{
                width: "30px",
                backgroundColor: "blue",
                color: "white",
                marginBottom: "3px",
                textAlign: "center"
              }}
            />
          );
        })}
      </div>
    );
  }
}
