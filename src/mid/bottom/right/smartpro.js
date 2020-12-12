import React, { Component } from "react";
//components
import "./bottomsect.css";
import Man2 from "./man2.png";

//inculudes

class BottomSect extends Component {
  render() {
    return (
      <div className="sctsect">
        <div className="secondbox">
          <div className="innerbox2">
            <span className="boldhead2">Smart Progress</span>
            <div className="smartprogress">
              <span className="achievementnumber">32.1%</span>
              <div className="achievementprogressbar" />
            </div>
            <div className="maninbox2">
              <div className="csitem">
                <div className="csitem2" />
              </div>
              <span>Achived</span>
              <span>Active</span>
            </div>
          </div>
          <img className="man2" src={Man2} alt="man" />
        </div>
      </div>
    );
  }
}
export default BottomSect;
