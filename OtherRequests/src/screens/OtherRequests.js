import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialHelperTextBox2 from "../components/MaterialHelperTextBox2";

function OtherRequests(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <CupertinoButtonLight1
          text1="Return"
          button1="Go Back"
          style={styles.cupertinoButtonLight2}
        ></CupertinoButtonLight1>
      </View>
      <StatusBar></StatusBar>
      <CupertinoButtonLight1
        text1="Continue"
        button1="ReviewOrder"
        style={styles.cupertinoButtonLight1}
      ></CupertinoButtonLight1>
      <Text style={styles.other}>Other</Text>
      <MaterialHelperTextBox2
        text1="Other Reason"
        text2="Please specify the other you need help with"
        style={styles.materialHelperTextBox1}
      ></MaterialHelperTextBox2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 360,
    height: 52,
    backgroundColor: "rgba(237,11,11,1)",
    marginTop: 24
  },
  cupertinoButtonLight2: {
    width: 70,
    height: 27,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: 13,
    marginLeft: 12
  },
  cupertinoButtonLight1: {
    width: 118,
    height: 43,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: 585,
    alignSelf: "center"
  },
  other: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    marginTop: -614,
    alignSelf: "center"
  },
  materialHelperTextBox1: {
    width: 315,
    height: 90,
    marginTop: 63,
    marginLeft: 22
  }
});

export default OtherRequests;
