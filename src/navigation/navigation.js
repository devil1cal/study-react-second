import React, { Component } from "react";

//components
import "./navigation.scss";
import Logo from "./logo/logo";
import OptionM from "./optionmenu/optionmenu";
import DropDownMenu from "./dropdownmenu/dropdowmenu";

//includes

//comments
//left navigation bar

class NavigationBar extends Component {
  render() {
    return (
      <body>
        <header>
          <div className="menu-mobile">
            <ul>
              <li>
                <DropDownMenu />
              </li>
              <li>
                <Logo />
              </li>
              <li>
                <OptionM />
              </li>
            </ul>
          </div>
        </header>
      </body>
    );
  }
}

export default NavigationBar;
