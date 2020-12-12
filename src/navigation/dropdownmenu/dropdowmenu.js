import React, { Component } from "react";

//components
import Dropdown from "react-bootstrap/Dropdown";
import MenuIcon from "./dropdownmenuicon.js";
import Clock from "../clock/Clock";
import Callendar from "../callender/leftCallendar";
import Mail from "../mail/leftMail";
import "./iconD.scss";

class DropDownMenu extends Component {
  render() {
    return (
      <div className="my-element">
        <Dropdown className="list-menu">
          <Dropdown.Toggle
            className="dropdownicon"
            varient="success"
            id="dropdown-basic"
          >
            <span>
              {" "}
              <MenuIcon />{" "}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="menuD">
            <Dropdown.Item className="ditems">
              <Clock />{" "}
            </Dropdown.Item>
            <Dropdown.Item className="ditems">
              <Callendar />
            </Dropdown.Item>
            <Dropdown.Item className="ditems">
              <Mail />{" "}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
export default DropDownMenu;
