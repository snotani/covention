import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import MaterialCardWithoutImage2 from "../components/MaterialCardWithoutImage2";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";

function Donate(props) {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Text style={styles.text}>Donate</Text>
      <CupertinoSearchBarBasic
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
      <View style={styles.materialCardWithoutImage1Stack}>
        <MaterialCardWithoutImage2
          text1="NHS"
          text2="Donate to NHS"
          text3="NHS is asking for donations to fight COVID-19 and provide the staff working long hours. Click the donate button to follow the link to morecambe food bank for donations."
          style={styles.materialCardWithoutImage1}
        ></MaterialCardWithoutImage2>
        <MaterialCardWithoutImage2
          text1="Morecambe Food Bank"
          text2="Donate to Morecambe Food Bank"
          text3="Morecambe Food Bank requires donations to provide for elderly and disabled suffering midst the COVID-19 outbreak. Click the donate button to follow the link to morecambe food bank for donations."
          style={styles.materialCardWithoutImage2}
        ></MaterialCardWithoutImage2>
      </View>
      <MaterialCardWithoutImage2
        text1="Royal Lancaster Infirmary"
        text2="Donate to RLI"
        text3=" "
        style={styles.materialCardWithoutImage3}
      ></MaterialCardWithoutImage2>
      <View style={styles.cupertinoButtonLight1Stack}>
        <CupertinoButtonLight1
          text1="Return"
          button1="Go Back"
          style={styles.cupertinoButtonLight1}
        ></CupertinoButtonLight1>
        <View style={styles.rect1}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "helvetica-regular",
    marginTop: 80,
    marginLeft: 131
  },
  cupertinoSearchBarBasic: {
    height: 44,
    marginTop: 14
  },
  materialCardWithoutImage1: {
    top: 0,
    left: 1,
    width: 359,
    height: 241,
    position: "absolute"
  },
  materialCardWithoutImage2: {
    top: 240,
    left: 0,
    width: 359,
    height: 236,
    position: "absolute"
  },
  materialCardWithoutImage1Stack: {
    width: 360,
    height: 476,
    marginTop: 1
  },
  materialCardWithoutImage3: {
    width: 359,
    height: 247
  },
  cupertinoButtonLight1: {
    top: 13,
    left: 12,
    width: 70,
    height: 27,
    position: "absolute",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09
  },
  rect1: {
    top: 0,
    left: 0,
    width: 360,
    height: 52,
    backgroundColor: "rgba(237,11,11,1)",
    position: "absolute"
  },
  cupertinoButtonLight1Stack: {
    width: 360,
    height: 52,
    marginTop: -868
  }
});

export default Donate;
