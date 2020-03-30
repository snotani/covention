import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function ForgotPassword(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <CupertinoButtonLight1
          text1="Return"
          button1="Go Back"
          style={styles.cupertinoButtonLight1}
        ></CupertinoButtonLight1>
      </View>
      <StatusBar></StatusBar>
      <Text style={styles.text}>Forgot Password</Text>
      <Text style={styles.connecting1}>
        To retrieve your credentials, please enter the email linked to your
        account to be sent a reminder
      </Text>
      <MaterialFixedLabelTextbox3
        textInput1=""
        text1="Email"
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox3>
      <MaterialButtonViolet1
        text1="Continue"
        button1="Login"
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
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
  cupertinoButtonLight1: {
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
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    marginTop: 12,
    alignSelf: "center"
  },
  connecting1: {
    width: 320,
    height: 30,
    color: "rgba(88,84,84,1)",
    fontSize: 15,
    fontFamily: "helvetica-regular",
    textAlign: "center",
    marginTop: 25,
    marginLeft: 20
  },
  materialFixedLabelTextbox1: {
    width: 326,
    height: 43,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: 41,
    marginLeft: 17
  },
  materialButtonViolet1: {
    width: 100,
    height: 36,
    borderRadius: 50,
    borderColor: "#000000",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.15,
    marginTop: 33,
    marginLeft: 130
  }
});

export default ForgotPassword;
