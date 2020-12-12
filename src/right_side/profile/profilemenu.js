import React, { Component } from "react";

import "./first_section.css";
import Bell from "./bell.png";
import Avatar from "./avatar.png";
import SearchIcon from "./search.png";
import Menu from "./menu";
class FirstSection extends Component {
  render() {
    return (
      <section className="section1">
        <div className="all-section">
          <div className="searchbar">
            <img className="searchicon" src={SearchIcon} alt="search icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="bell">
            <a href="#">
              <img src={Bell} alt="bell icon" />
            </a>
          </div>
          <div className="avatar">
            <a href="#">
              <img src={Avatar} alt="avatar icon" />
            </a>
            <div className="menu">
              <Menu />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default FirstSection;
