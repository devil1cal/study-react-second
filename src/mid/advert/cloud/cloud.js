import React, { Component } from "react";
//components
import "./box2.css";
import Cloud from "./cloud.png";
import { Alert, StyleSheet } from "react-native";

import Button from "react-native-flat-button";

//inculudes

class Box2Component extends Component {
  render() {
    return (
      <div className="littlebox2">
        <div className="pieimg">
          <div className="grapimg">
            <div className="lastsectbutton">
              <Button
                type="custom"
                containerStyle={styles.buttonContainer}
                borderRadius={17}
                shadowHeight={0}
                onPress={() => Alert.alert("Get Started")}
              >
                Cloud
                <img src={Cloud} alt="cloud" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 59,
    height: 119,
    marginVertical: 5,
    left: 15,
    top: -56,
    backgroundColor: "#5c6aff",
    borderColor: "#5c6aff"
  },
  content: {
    fontSize: 22
  }
});
export default Box2Component;
