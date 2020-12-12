import React, { Component } from "react";
//components
import "./callendarstyle.css";
import Button from "react-native-flat-button";
import { StyleSheet } from "react-native";
import DummyCallendar from "./callendar";
import DummyTimeStamp from "./timestamp.js";
//inculudes

//comments
//main callendar component

class CallendarComponent extends Component {
  render() {
    return (
      <div className="callendarbox">
        <div className="dummycallendarimg">
          <div className="callendarstick" />
          <div className="callistbox">
            <ul className="fsttab">
              <div>
                <li>Mo</li>
                <li>5</li>
              </div>
              <div>
                <li>Tu</li>
                <li>6</li>
              </div>
              <div className="blueone" selected>
                <li>We</li>
                <li>7</li>
              </div>
              <div>
                <li>Th</li>
                <li>8</li>
              </div>
              <div>
                <li>Fr</li>
                <li>9</li>
              </div>
              <div>
                <li>Sa</li>
                <li>10</li>
              </div>
              <div>
                <li>Su</li>
                <li>11</li>
              </div>
            </ul>
            <div className="callendarbutton">
              <Button
                type="custom"
                containerStyle={styles.buttonContainer}
                borderRadius={30}
                shadowHeight={0}
              >
                InProgress
              </Button>
            </div>
          </div>
          <div className="callendarstick1" />
        </div>
        <DummyTimeStamp />
        <DummyCallendar />
      </div>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 110,
    height: 30,
    paddingBottom: 5,
    marginVertical: 5,
    backgroundColor: "#7c87fc",
    borderColor: "#7c87fc"
  }
});
export default CallendarComponent;
