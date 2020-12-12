import React, { Component } from "react";
//components

import NavigationBar from "./navigation/navigation";

//import FirstSection from "./components/navbarComponent/firstSection";
//import RightMidSection from "./components/leftComponent/rightMidSection";
//import SmartComponent from "./components/smartComponent/smartComponent";
//import CallendarComponent from "./components/callendarComponent/callendarComponent";
//import BottomMidComponent from "./components/bottomMidComponent/bottomMidComponent";
//import Login from "./LoginPage";
//        <!--<Route path="/LoginPage" exact component={Login} />-->
//import BottomFrist from "./components/bottomMidComponent/bottomFirstComponent/bottomfirst";
//import BottomSect from "./components/bottomMidComponent/bottomSecondComponent/bottomsect";
//import BottomLast from "./components/bottomMidComponent/bottomLastComponent/bottomlast";

//inculudes

class App extends Component {
	render() {
		return (
			<div className="App">
				<body>
					<div>
						<NavigationBar />
						<section className="topbox"></section>
						<section className="middlebox"></section>
						<section className="bottombox"></section>
					</div>
				</body>
			</div>
		);
	}
}
export default App;
