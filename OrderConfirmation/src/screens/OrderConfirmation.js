import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import MaterialCardWithoutImage2 from "../components/MaterialCardWithoutImage2";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";

function OrderConfirmation(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}></View>
      <StatusBar></StatusBar>
      <Text style={styles.success}>Success</Text>
      <MaterialCardWithoutImage2
        text1="Your order has been placed"
        text2="Your request has been sent to our volunteers. You will receive a notification when a volunteer accepts your request. "
        text3=" "
        style={styles.materialCardWithoutImage1}
      ></MaterialCardWithoutImage2>
      <CupertinoButtonLight1
        text1="Return to home"
        button1="News"
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
  success: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    marginTop: 6,
    marginLeft: 123
  },
  materialCardWithoutImage1: {
    width: 328,
    height: 205,
    marginTop: 53,
    alignSelf: "center"
  },
  cupertinoButtonLight2: {
    width: 155,
    height: 50,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: 288,
    marginLeft: 102
  }
});

export default OrderConfirmation;
