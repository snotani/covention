import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import MaterialCardWithoutImage1 from "../components/MaterialCardWithoutImage1";

function PinReg1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.cupertinoButtonLight5Row}>
          <CupertinoButtonLight1
            text1="Return"
            button1="Go Back"
            style={styles.cupertinoButtonLight5}
          ></CupertinoButtonLight1>
          <Text style={styles.loremIpsum1}>1 of 3</Text>
        </View>
      </View>
      <StatusBar></StatusBar>
      <Text style={styles.becomingAPin}>Becoming a PIN</Text>
      <Text style={styles.personInNeed}>(Person In Need)</Text>
      <View style={styles.cupertinoButtonLight4Row}>
        <CupertinoButtonLight
          text1="Sign in"
          button1="Login"
          style={styles.cupertinoButtonLight4}
        ></CupertinoButtonLight>
        <CupertinoButtonLight
          text1="Register"
          button1="PinReg2"
          style={styles.cupertinoButtonLight3}
        ></CupertinoButtonLight>
      </View>
      <MaterialCardWithoutImage1
        text1="PIN"
        rect1="rgba(255,255,255,1)"
        text2="Sign up on the following page"
        text3="People in need do not have enough of essential things such as money, food, or good health. The education authorities have to provide for children in need.  Remember that when both of you were in need, I was the one who loaned you money."
        style={styles.materialCardWithoutImage1}
      ></MaterialCardWithoutImage1>
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
  cupertinoButtonLight5: {
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
    marginLeft: 74,
    marginTop: 3
  },
  cupertinoButtonLight5Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 154,
    marginLeft: 12,
    marginTop: 13
  },
  becomingAPin: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    textAlign: "center",
    marginTop: 66,
    alignSelf: "center"
  },
  personInNeed: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    marginTop: 6,
    alignSelf: "center"
  },
  cupertinoButtonLight4: {
    width: 110,
    height: 44,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14
  },
  cupertinoButtonLight3: {
    width: 110,
    height: 44,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.14,
    marginLeft: 22
  },
  cupertinoButtonLight4Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 328,
    marginLeft: 59,
    marginRight: 59
  },
  materialCardWithoutImage1: {
    width: 329,
    height: 232,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.08,
    overflow: "scroll",
    marginTop: -349,
    marginLeft: 17
  }
});

export default PinReg1;
