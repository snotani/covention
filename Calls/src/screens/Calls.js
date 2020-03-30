import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialHelperTextBox2 from "../components/MaterialHelperTextBox2";

function Calls(props) {
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
        text1="Confirm"
        button1="OrderConfirmation"
        style={styles.cupertinoButtonLight1}
      ></CupertinoButtonLight1>
      <Text style={styles.requestCalls}>Request Calls</Text>
      <MaterialHelperTextBox2
        text1="Reason"
        text2="Please provide the reason for the call request"
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
    marginTop: 586,
    alignSelf: "center"
  },
  requestCalls: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    marginTop: -611,
    marginLeft: 81
  },
  materialHelperTextBox1: {
    width: 315,
    height: 90,
    marginTop: 60,
    marginLeft: 22
  }
});

export default Calls;
