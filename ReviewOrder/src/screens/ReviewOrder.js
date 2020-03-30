import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialCardWithoutImage2 from "../components/MaterialCardWithoutImage2";

function ReviewOrder(props) {
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
      <Text style={styles.review}>Review</Text>
      <MaterialCardWithoutImage2
        text1="Order List"
        text2="Please review your order"
        text3="1. Brown bread x1                                                                     2. Semi-skimmed milk x2                                                      3. Red Meat 450g x1                                                                                                                  "
        style={styles.materialCardWithoutImage2}
      ></MaterialCardWithoutImage2>
      <CupertinoButtonLight1
        text1="Confirm"
        button1="OrderConfirmation"
        style={styles.cupertinoButtonLight2}
      ></CupertinoButtonLight1>
      <MaterialCardWithoutImage2
        text1="Delivery Address"
        text2="Please review your address"
        text3="24 Downing Street                                                                 LA2 0LT                                                                                           Lancaster, United Kingdom"
        style={styles.materialCardWithoutImage3}
      ></MaterialCardWithoutImage2>
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
  review: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    marginTop: 10,
    marginLeft: 139
  },
  materialCardWithoutImage2: {
    width: 322,
    height: 205,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: 54,
    marginLeft: 18
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
    marginTop: 291,
    alignSelf: "center"
  },
  materialCardWithoutImage3: {
    width: 322,
    height: 219,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: -313,
    marginLeft: 18
  }
});

export default ReviewOrder;
