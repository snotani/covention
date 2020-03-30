import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";

function PinReg2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.cupertinoButtonLight3Row}>
          <CupertinoButtonLight1
            text1="Return"
            button1="Go Back"
            style={styles.cupertinoButtonLight3}
          ></CupertinoButtonLight1>
          <Text style={styles.loremIpsum1}>2 of 3</Text>
        </View>
      </View>
      <Text style={styles.becomingAPin}>Becoming a PIN</Text>
      <CupertinoButtonLight
        text1="Continue"
        button1="PinReg3"
        style={styles.cupertinoButtonLight2}
      ></CupertinoButtonLight>
      <StatusBar></StatusBar>
      <MaterialFixedLabelTextbox1
        text1="Password"
        textInput1=""
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox1
        text1="Re-enter password"
        textInput1=""
        style={styles.materialFixedLabelTextbox2}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox1
        text1="Email"
        textInput1=""
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox1
        text1="Username"
        textInput1=""
        style={styles.materialFixedLabelTextbox4}
      ></MaterialFixedLabelTextbox1>
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
    flexDirection: "row",
    marginTop: 24
  },
  cupertinoButtonLight3: {
    width: 70,
    height: 27,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09
  },
  loremIpsum1: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginLeft: 73,
    marginTop: 3
  },
  cupertinoButtonLight3Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 155,
    marginLeft: 12,
    marginTop: 13
  },
  becomingAPin: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    textAlign: "center",
    marginTop: 66,
    marginLeft: 71
  },
  cupertinoButtonLight2: {
    width: 110,
    height: 44,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.15,
    marginTop: 340,
    marginLeft: 125
  },
  materialFixedLabelTextbox1: {
    width: 302,
    height: 43,
    marginTop: -237,
    marginLeft: 25
  },
  materialFixedLabelTextbox2: {
    width: 302,
    height: 54,
    marginTop: 20,
    marginLeft: 25
  },
  materialFixedLabelTextbox3: {
    width: 302,
    height: 43,
    marginTop: -175,
    marginLeft: 25
  },
  materialFixedLabelTextbox4: {
    width: 302,
    height: 43,
    marginTop: -107,
    marginLeft: 25
  }
});

export default PinReg2;
