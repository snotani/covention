import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialButtonWithVioletText1 from "../components/MaterialButtonWithVioletText1";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function Login(props) {
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
      <Text style={styles.signIn}>Sign in</Text>
      <MaterialButtonWithVioletText1
        text1="Forgot Password?"
        style={styles.materialButtonWithVioletText1}
      ></MaterialButtonWithVioletText1>
      <MaterialButtonWithVioletText1
        text1="Don't have an account yet? Sign up"
        button1="Registration1"
        style={styles.materialButtonWithVioletText2}
      ></MaterialButtonWithVioletText1>
      <Text style={styles.connecting}>
        Connecting | Communities | Volunteer
      </Text>
      <MaterialFixedLabelTextbox3
        textInput1=""
        text1="Username"
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox3>
      <MaterialRightIconTextbox1
        textInput1="   Password"
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <MaterialButtonViolet1
        text1="Sign in"
        button1="News"
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
  signIn: {
    color: "rgba(0,0,0,1)",
    fontSize: 38,
    fontFamily: "helvetica-regular",
    marginTop: 101,
    alignSelf: "center"
  },
  materialButtonWithVioletText1: {
    width: 326,
    height: 40,
    marginTop: 206,
    marginLeft: 15
  },
  materialButtonWithVioletText2: {
    width: 326,
    height: 47,
    marginTop: 11,
    marginLeft: 15
  },
  connecting: {
    color: "rgba(121,117,117,1)",
    fontSize: 16,
    fontFamily: "helvetica-regular",
    marginTop: -291,
    alignSelf: "center"
  },
  materialFixedLabelTextbox3: {
    width: 326,
    height: 43,
    marginTop: 28,
    marginLeft: 15
  },
  materialRightIconTextbox1: {
    width: 326,
    height: 43,
    marginTop: 32,
    marginLeft: 15
  },
  materialButtonViolet1: {
    width: 132,
    height: 51,
    borderRadius: 48,
    borderColor: "#000000",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    marginTop: 150,
    marginLeft: 112
  }
});

export default Login;
