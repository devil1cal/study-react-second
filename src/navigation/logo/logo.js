import React, { Component } from "react";

//componant
import logo from "./logo.png";
import "./logo.scss";

class Logo extends Component {
  render() {
    return <img className="logo" src={logo} alt="" title="logo" />;
  }
}
export default Logo;
