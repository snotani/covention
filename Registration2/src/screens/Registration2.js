import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";
import CupertinoButtonLight from "../components/CupertinoButtonLight";

function Registration2(props) {
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
      <StatusBar barStyle="dark-content"></StatusBar>
      <Text style={styles.becomingAVolunteer1}>Becoming a Volunteer</Text>
      <View style={styles.registerationStack}>
        <Text style={styles.registeration}></Text>
        <MaterialFixedLabelTextbox1
          text1="Username"
          textInput1=""
          style={styles.materialFixedLabelTextbox1}
        ></MaterialFixedLabelTextbox1>
      </View>
      <MaterialFixedLabelTextbox1
        text1="Email"
        textInput1=""
        style={styles.materialFixedLabelTextbox2}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox1
        text1="Password"
        textInput1=""
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox1
        text1="Re-enter password"
        textInput1=""
        style={styles.materialFixedLabelTextbox4}
      ></MaterialFixedLabelTextbox1>
      <CupertinoButtonLight
        text1="Continue"
        button1="Registration3"
        style={styles.cupertinoButtonLight2}
      ></CupertinoButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
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
  becomingAVolunteer1: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    textAlign: "center",
    marginTop: 66,
    marginLeft: 33
  },
  registeration: {
    top: 0,
    left: 9,
    color: "rgba(160,152,152,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    textAlign: "center"
  },
  materialFixedLabelTextbox1: {
    top: 0,
    left: 0,
    width: 302,
    height: 43,
    position: "absolute"
  },
  registerationStack: {
    width: 302,
    height: 43,
    marginTop: 25,
    marginLeft: 25
  },
  materialFixedLabelTextbox2: {
    width: 302,
    height: 43,
    marginTop: 21,
    marginLeft: 25
  },
  materialFixedLabelTextbox3: {
    width: 302,
    height: 43,
    marginTop: 15,
    marginLeft: 25
  },
  materialFixedLabelTextbox4: {
    width: 302,
    height: 54,
    marginTop: 20,
    marginLeft: 25
  },
  cupertinoButtonLight2: {
    width: 110,
    height: 44,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    marginTop: 69,
    marginLeft: 121
  }
});

export default Registration2;
