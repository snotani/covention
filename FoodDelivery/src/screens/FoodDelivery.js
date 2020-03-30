import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialIconTextbox1 from "../components/MaterialIconTextbox1";

function FoodDelivery(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <CupertinoButtonLight1
          text1="Return"
          button1="Go Back"
          style={styles.cupertinoButtonLight3}
        ></CupertinoButtonLight1>
      </View>
      <StatusBar></StatusBar>
      <MaterialIconTextbox1
        icon1Name="hamburger"
        textInput1="Please specify the type of bread"
        style={styles.materialIconTextbox1}
      ></MaterialIconTextbox1>
      <Text style={styles.text}>Food Delivery</Text>
      <MaterialIconTextbox1
        icon1Name="bottle-wine"
        textInput1="Please specify the type of milk"
        style={styles.materialIconTextbox2}
      ></MaterialIconTextbox1>
      <MaterialIconTextbox1
        icon1Name="bone"
        textInput1="Please specify the type of meat"
        style={styles.materialIconTextbox3}
      ></MaterialIconTextbox1>
      <MaterialIconTextbox1
        icon1Name="access-point"
        textInput1="Please specify the type of dried goods"
        style={styles.materialIconTextbox4}
      ></MaterialIconTextbox1>
      <MaterialIconTextbox1
        icon1Name="carrot"
        textInput1="Please specify the type of vegetables"
        style={styles.materialIconTextbox5}
      ></MaterialIconTextbox1>
      <MaterialIconTextbox1
        icon1Name="cloud-question"
        textInput1="Please add anything else of need"
        style={styles.materialIconTextbox6}
      ></MaterialIconTextbox1>
      <CupertinoButtonLight1
        text1="Continue"
        button1="ReviewOrder"
        style={styles.cupertinoButtonLight2}
      ></CupertinoButtonLight1>
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
    shadowOpacity: 0.09,
    marginTop: 13,
    marginLeft: 12
  },
  materialIconTextbox1: {
    width: 308,
    height: 65,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 72,
    alignSelf: "center"
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    marginTop: -119,
    alignSelf: "center"
  },
  materialIconTextbox2: {
    width: 308,
    height: 65,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 108,
    marginLeft: 26
  },
  materialIconTextbox3: {
    width: 308,
    height: 65,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 13,
    marginLeft: 26
  },
  materialIconTextbox4: {
    width: 308,
    height: 65,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 13,
    marginLeft: 26
  },
  materialIconTextbox5: {
    width: 308,
    height: 65,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 12,
    marginLeft: 26
  },
  materialIconTextbox6: {
    width: 308,
    height: 65,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 12,
    marginLeft: 26
  },
  cupertinoButtonLight2: {
    width: 118,
    height: 43,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: 42,
    alignSelf: "center"
  }
});

export default FoodDelivery;
