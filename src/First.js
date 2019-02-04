import React, { Component } from "react";
import connect from "./duckies/react-redux";
import { changeMessage } from "./duckies/reducer";

class First extends Component {
  state = {
    some: "thing"
  };

  render() {
    return (
      <div className="First">
        <h1>{this.props.message}</h1>
        <input
          onChange={e => this.props.changeMessage(e.target.value)}
          value={this.props.message}
        />
      </div>
    );
  }
}

let mStToPrps = state => {
  return { ...state };
};

export default connect(
  mStToPrps,
  { changeMessage }
)(First);
