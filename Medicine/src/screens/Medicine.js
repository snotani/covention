import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialHelperTextBox2 from "../components/MaterialHelperTextBox2";

function Medicine(props) {
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
      <Text style={styles.medicineDelivery}>Medicine Delivery</Text>
      <MaterialHelperTextBox2
        text1="Medicine "
        text2="Please specify the type and quantity of medicine needed"
        style={styles.materialHelperTextBox2}
      ></MaterialHelperTextBox2>
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
  medicineDelivery: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    marginTop: 18,
    alignSelf: "center"
  },
  materialHelperTextBox2: {
    width: 315,
    height: 90,
    marginTop: 58,
    alignSelf: "center"
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
    marginTop: 393,
    alignSelf: "center"
  }
});

export default Medicine;
