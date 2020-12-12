import React, { Component } from "react";
//components
import "./bottomlast.css";
import { StyleSheet } from "react-native";

import Button from "react-native-flat-button";
//inculudes

class BottomLast extends Component {
  render() {
    return (
      <div className="lastsect">
        <div className="lastsection" />
        <div className="lastsectinside">
          <div className="lastsectstick" />
          <span className="lastsectheader">Welcome to start</span>
          <p className="lastsectparag">
            Goal setting and goal mangement sofware for high achievers
          </p>
          <div className="lastsectbutton">
            <Button
              type="custom"
              containerStyle={styles.buttonContainer}
              borderRadius={30}
              shadowHeight={0}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }

  newMethod() {
    return "125px";
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 125,
    height: 48,
    marginVertical: 5,
    backgroundColor: "#fd6e4b",
    borderColor: "#fd6e4b"
  },

  content: {
    fontSize: 22
  }
});
export default BottomLast;
