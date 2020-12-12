import React, { Component } from "react";
import "./calstyle.css";
import Button from "react-native-flat-button";
import { StyleSheet } from "react-native";

class DummyTimeStamp extends Component {
  render() {
    return (
      <div className="stylecal">
        <span className="timeprag">5-11 Agu</span>
        <div className="dummytimestamp">
          <Button
            type="custom"
            containerStyle={styles.buttonContainer}
            borderRadius={30}
            shadowHeight={0}
          >
            &#60; &#62;
          </Button>
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 65,
    height: 35,
    paddingBottom: 5,
    marginVertical: 5,
    backgroundColor: "#fd6e4b",
    borderColor: "#fd6e4b"
  }
});

export default DummyTimeStamp;
