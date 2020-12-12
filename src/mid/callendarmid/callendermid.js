import React, { Component } from "react";
//components
import "./calstyle.css";
import Button from "react-native-flat-button";
import { StyleSheet } from "react-native";

//comments
//callendar component

class DummyCallendar extends Component {
  render() {
    return (
      <div className="stylecal">
        <div className="dummycallendar">
          <Button
            href={true}
            type="custom"
            containerStyle={styles.buttonContainer}
            borderRadius={30}
            shadowHeight={0}
          >
            Weeks &#709;
          </Button>
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 115,
    height: 35,
    paddingBottom: 5,
    marginVertical: 5,
    backgroundColor: "#fd6e4b",
    borderColor: "#fd6e4b"
  }
});
export default DummyCallendar;
