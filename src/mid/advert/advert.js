import React, { Component } from "react";
//components
import "./smartcomponent.css";
import Box1Component from "./box1component";
import Box2Component from "./box2component";
//inculudes

class SmartComponent extends Component {
  render() {
    return (
      <div className="smartbox">
        <div className="paragbox">
          <span className="mainhead">
            what is <b>SMART</b> planing?
          </span>
          <p className="mainparag">
            Business goals should always be Specific, Measurable and Achievable.
          </p>
          <span className="smartbutton">
            <a href="#">learn more &rsaquo;</a>{" "}
          </span>
        </div>

        <div className="boxmain">
          <div>
            <Box1Component className="box1" />
          </div>
          <div>
            <Box2Component className="box" />
          </div>
        </div>
      </div>
    );
  }
}
export default SmartComponent;
