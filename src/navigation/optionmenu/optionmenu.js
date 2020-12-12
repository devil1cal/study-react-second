import React, { Component } from "react";

//componants
import "./option.scss";
import OptionIcon from "./optionicon.js";
import Dropdown from "react-bootstrap/Dropdown";
import ProfileIcon from "./optionprofileicon";
import MainOptionIcon from "./optionmainicon";
import LogoutIcon from "./optionlogouticon";

class OptionM extends Component {
	render() {
		return (
			<div className="my-element my-option">
				<Dropdown className="opt-menu ">
					<Dropdown.Toggle
						className="dropoption"
						varient="success"
						id="dropdown-basic"
					>
						<span>
							{" "}
							<OptionIcon />{" "}
						</span>
					</Dropdown.Toggle>
					<Dropdown.Menu className="optD">
						<Dropdown.Item className="oitems">
							<ProfileIcon />{" "}
						</Dropdown.Item>
						<Dropdown.Item className="oitems">
							<MainOptionIcon />
						</Dropdown.Item>
						<Dropdown.Item className="oitems">
							<LogoutIcon />{" "}
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}
export default OptionM;
