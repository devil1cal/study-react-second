import React, { Component } from "react";
//components
import "./bottomfirst.css";
import Man1 from "./atach-man1.png";
import CheckMark from "./checkmark.png";
//inculudes

class BottomFrist extends Component {
  render() {
    return (
      <div className="btmfst">
        <div className="firstbox">
          <div className="innerbox1">
            <span className="boldhead1">Goal achieved</span>
            <ul>
              <li>
                <img className="checkmark" src={CheckMark} alt="CheckMark" />{" "}
                Market share
              </li>
              <li>
                <img className="checkmark" src={CheckMark} alt="CheckMark" />{" "}
                Customer service
              </li>
              <li>
                <img className="checkmark" src={CheckMark} alt="CheckMark" />{" "}
                Increase efficence
              </li>
            </ul>
          </div>
          <img className="man1" src={Man1} alt="man" />
        </div>
      </div>
    );
  }
}
export default BottomFrist;
