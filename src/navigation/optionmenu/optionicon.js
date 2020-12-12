import React, { Component } from "react";

//componants
import "./option.scss";

class OptionIcon extends Component {
	render() {
		return (
			<div className="optcss">
				<svg
					width="3em"
					height="1.8em"
					viewBox="0 0 16 16"
					class="bi bi-three-dots-vertical"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
					/>
				</svg>
			</div>
		);
	}
}
export default OptionIcon;
