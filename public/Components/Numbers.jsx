import React from "react";

export default class Numbers extends React.Component {
  handleClick = e => {
    this.props.numberClick(e.target.value);
  };

  render() {
    return (
      <div
        style={{ width: "100px", backgroundColor: "#b1b1b1", padding: "5px" }}
      >
        {this.props.numbers.map(number => {
          return (
            <input
              onClick={this.handleClick}
              key={number}
              style={{
                width: "30px",
                backgroundColor: "#fff",
                color: "black",
                border: "none",
                margin: "1px",

                textAlign: "center"
              }}
              type="submit"
              value={Number(number)}
            />
          );
        })}
      </div>
    );
  }
}
