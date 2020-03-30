import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function EditProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <CupertinoButtonLight1
          text1="Return"
          button1="Go Back"
          style={styles.cupertinoButtonLight1}
        ></CupertinoButtonLight1>
      </View>
      <View style={styles.connecting1Row}>
        <Text style={styles.connecting1}></Text>
        <MaterialButtonShare
          icon1Name="account"
          style={styles.materialButtonShare1}
        ></MaterialButtonShare>
      </View>
      <Text style={styles.profile1}>Profile</Text>
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}></Text>
        <MaterialFixedLabelTextbox3
          textInput1="                                      John"
          text1="First name"
          style={styles.materialFixedLabelTextbox11}
        ></MaterialFixedLabelTextbox3>
        <MaterialFixedLabelTextbox3
          textInput1="                                          Doe"
          text1="Surname"
          style={styles.materialFixedLabelTextbox12}
        ></MaterialFixedLabelTextbox3>
      </View>
      <MaterialFixedLabelTextbox3
        textInput1="                                           Volunteer"
        text1="Role"
        style={styles.materialFixedLabelTextbox5}
      ></MaterialFixedLabelTextbox3>
      <MaterialFixedLabelTextbox3
        textInput1="                        21/10/1998"
        text1="Date of Birth"
        style={styles.materialFixedLabelTextbox6}
      ></MaterialFixedLabelTextbox3>
      <MaterialFixedLabelTextbox3
        textInput1="                             07913782008"
        text1="Number"
        style={styles.materialFixedLabelTextbox7}
      ></MaterialFixedLabelTextbox3>
      <MaterialFixedLabelTextbox3
        textInput1="                     25 Downing Street"
        text1="Address"
        style={styles.materialFixedLabelTextbox8}
      ></MaterialFixedLabelTextbox3>
      <MaterialFixedLabelTextbox3
        textInput1="                                                     Yes"
        text1="DBS"
        style={styles.materialFixedLabelTextbox9}
      ></MaterialFixedLabelTextbox3>
      <MaterialButtonViolet1
        text1="Confirm"
        button1="Ccv"
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
      <StatusBar></StatusBar>
      <Text style={styles.johnDoe1}>John Doe</Text>
      <MaterialFixedLabelTextbox3
        textInput1="                                JohnDoe"
        text1="Username"
        style={styles.materialFixedLabelTextbox10}
      ></MaterialFixedLabelTextbox3>
      <MaterialFixedLabelTextbox3
        textInput1="              johndoe@example.com"
        text1="Email"
        style={styles.materialFixedLabelTextbox13}
      ></MaterialFixedLabelTextbox3>
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
  connecting1: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "helvetica-regular",
    marginTop: 4
  },
  materialButtonShare1: {
    width: 85,
    height: 77,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.15,
    marginLeft: 39
  },
  connecting1Row: {
    height: 77,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 99,
    marginRight: 137
  },
  profile1: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    marginTop: -118,
    alignSelf: "center"
  },
  loremIpsum1: {
    top: 10,
    left: 118,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  materialFixedLabelTextbox11: {
    top: 0,
    width: 326,
    height: 43,
    position: "absolute",
    left: 0
  },
  materialFixedLabelTextbox12: {
    width: 326,
    height: 43,
    position: "absolute",
    left: 0,
    top: 42
  },
  loremIpsum1Stack: {
    width: 326,
    height: 85,
    marginTop: 186,
    marginLeft: 17
  },
  materialFixedLabelTextbox5: {
    width: 326,
    height: 43,
    marginTop: 52,
    marginLeft: 17
  },
  materialFixedLabelTextbox6: {
    width: 326,
    height: 43,
    marginLeft: 17
  },
  materialFixedLabelTextbox7: {
    width: 326,
    height: 43,
    marginLeft: 17
  },
  materialFixedLabelTextbox8: {
    width: 326,
    height: 43,
    marginLeft: 17
  },
  materialFixedLabelTextbox9: {
    width: 326,
    height: 43,
    marginLeft: 17
  },
  materialButtonViolet1: {
    width: 100,
    height: 36,
    borderRadius: 49,
    borderColor: "#000000",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.15,
    marginTop: 23,
    marginLeft: 130
  },
  johnDoe1: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "helvetica-regular",
    marginTop: -501,
    marginLeft: 146
  },
  materialFixedLabelTextbox10: {
    width: 326,
    height: 43,
    marginTop: 31,
    alignSelf: "center"
  },
  materialFixedLabelTextbox13: {
    width: 326,
    height: 43,
    marginTop: 89,
    alignSelf: "center"
  }
});

export default EditProfile;
