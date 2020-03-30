import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialCardWithoutImage2 from "../components/MaterialCardWithoutImage2";
import CupertinoSegmentWithTwoTabs2 from "../components/CupertinoSegmentWithTwoTabs2";

function PreviousOrders(props) {
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
      <MaterialCardWithoutImage2
        text1="Shopping Order"
        text2="Order Completed"
        text3="1. Brown bread x1                                                                     2. Semi-skimmed milk x2                                                      3. Red Meat 450g x1                                                                                                                  "
        style={styles.materialCardWithoutImage1}
      ></MaterialCardWithoutImage2>
      <Text style={styles.listOfRequests1}>List of previous orders</Text>
      <MaterialCardWithoutImage2
        text1="Call Request"
        text2="Request Canceled"
        text3="Depression call - The self-isolation is disturbing my mental wellbeing and I would appreciate someone to talk it through."
        style={styles.materialCardWithoutImage2}
      ></MaterialCardWithoutImage2>
      <CupertinoButtonLight1
        text1="Return to home"
        button1="News"
        style={styles.cupertinoButtonLight2}
      ></CupertinoButtonLight1>
      <CupertinoSegmentWithTwoTabs2
        text1="Current Orders"
        text2="Previous Orders"
        button2="PreviousOrders"
        style={styles.cupertinoSegmentWithTwoTabs1}
      ></CupertinoSegmentWithTwoTabs2>
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
  materialCardWithoutImage1: {
    width: 319,
    height: 205,
    marginTop: 112,
    marginLeft: 20
  },
  listOfRequests1: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    marginTop: -248,
    marginLeft: 32
  },
  materialCardWithoutImage2: {
    width: 319,
    height: 205,
    marginTop: 231,
    marginLeft: 20
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
    marginTop: 39,
    marginLeft: 102
  },
  cupertinoSegmentWithTwoTabs1: {
    width: 360,
    height: 52,
    marginTop: -624
  }
});

export default PreviousOrders;
