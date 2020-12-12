import React, { Component } from "react";

import "./rightMidSection.css";
import Woman from "./woman.png";

class RightMidSection extends Component {
  render() {
    return (
      <section className="rightmidsect">
        <div className="rightmidbox">
          <div className="woman">
            <img src={Woman} alt="woman icon" />
          </div>
        </div>
      </section>
    );
  }
}
export default RightMidSection;
