import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import MaterialCheckbox from "../components/MaterialCheckbox";

function Registration3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.cupertinoButtonLight3Row}>
          <CupertinoButtonLight1
            text1="Return"
            button1="Go Back"
            style={styles.cupertinoButtonLight3}
          ></CupertinoButtonLight1>
          <Text style={styles.loremIpsum1}>3 of 3</Text>
        </View>
      </View>
      <Text style={styles.becomingAVolunteer1}>Becoming a Volunteer</Text>
      <StatusBar></StatusBar>
      <View style={styles.materialHelperTextBoxRow}>
        <MaterialHelperTextBox
          style={styles.materialHelperTextBox}
        ></MaterialHelperTextBox>
        <View style={styles.materialFixedLabelTextbox6Column}>
          <MaterialFixedLabelTextbox1
            text1="First Name"
            textInput1=""
            style={styles.materialFixedLabelTextbox6}
          ></MaterialFixedLabelTextbox1>
          <MaterialFixedLabelTextbox1
            text1="Surname"
            textInput1=""
            style={styles.materialFixedLabelTextbox2}
          ></MaterialFixedLabelTextbox1>
        </View>
      </View>
      <CupertinoButtonLight
        text1="Register"
        button1="Volunteer"
        style={styles.cupertinoButtonLight2}
      ></CupertinoButtonLight>
      <MaterialFixedLabelTextbox1
        text1="DOB"
        textInput1=""
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox1
        text1="Contact"
        textInput1=""
        style={styles.materialFixedLabelTextbox4}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox1
        text1="Address"
        textInput1=""
        style={styles.materialFixedLabelTextbox5}
      ></MaterialFixedLabelTextbox1>
      <MaterialDisabledTextbox
        textInput1="    DBS Certificate"
        style={styles.materialDisabledTextbox}
      ></MaterialDisabledTextbox>
      <View style={styles.materialCheckboxRow}>
        <MaterialCheckbox style={styles.materialCheckbox}></MaterialCheckbox>
        <Text style={styles.loremIpsum2}>
          By clicking this you accept the terms and conditions
        </Text>
      </View>
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
    marginLeft: 74,
    marginTop: 3
  },
  cupertinoButtonLight3Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 154,
    marginLeft: 12,
    marginTop: 13
  },
  becomingAVolunteer1: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    textAlign: "center",
    marginTop: 66,
    alignSelf: "center"
  },
  materialHelperTextBox: {
    width: 355,
    height: 90,
    marginTop: 21
  },
  materialFixedLabelTextbox6: {
    width: 302,
    height: 43
  },
  materialFixedLabelTextbox2: {
    width: 302,
    height: 43,
    marginTop: 8
  },
  materialFixedLabelTextbox6Column: {
    width: 302,
    marginLeft: 82,
    marginBottom: 17
  },
  materialHelperTextBoxRow: {
    height: 111,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: -408,
    marginRight: 29
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
    marginTop: 324,
    marginLeft: 126
  },
  materialFixedLabelTextbox3: {
    width: 302,
    height: 43,
    marginTop: -368,
    marginLeft: 29
  },
  materialFixedLabelTextbox4: {
    width: 302,
    height: 43,
    marginTop: 14,
    marginLeft: 29
  },
  materialFixedLabelTextbox5: {
    width: 302,
    height: 43,
    marginTop: 13,
    marginLeft: 29
  },
  materialDisabledTextbox: {
    width: 302,
    height: 43,
    marginTop: 14,
    marginLeft: 29
  },
  materialCheckbox: {
    width: 40,
    height: 40
  },
  loremIpsum2: {
    width: 279,
    height: 36,
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "helvetica-regular",
    marginTop: 7
  },
  materialCheckboxRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 18,
    marginRight: 23
  }
});

export default Registration3;
