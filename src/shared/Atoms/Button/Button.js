import React from "react";
import { Default } from "./Default";

class Button extends React.Component {
  render() {
    return <Default {...this.props} />;
  }
}

export default Button;
