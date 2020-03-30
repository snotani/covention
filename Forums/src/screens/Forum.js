import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import MaterialCard12 from "../components/MaterialCard12";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import CupertinoSegmentWithTwoTabs2 from "../components/CupertinoSegmentWithTwoTabs2";

function Forum(props) {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.text1Stack}>
        <Text style={styles.text1}>
          Start from scratch{"\n"}
          {"\n"}or{"\n"}
          {"\n"}Drag and drop a Sketch file
        </Text>
        <MaterialCard12
          text1="Forum 1"
          text3="Read"
          text2="Local foodbanks need more deliveries..."
          text4="Skip"
          style={styles.materialCard12}
        ></MaterialCard12>
      </View>
      <MaterialIconTextButtonsFooter1
        icon1Name="coin"
        text1="Donate"
        icon2Name="forum-outline"
        text2="News/Forums"
        icon3Name="account"
        text3="Profile"
        button1="Donate"
        button2="News"
        button3="Profile"
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <View style={styles.cupertinoSegmentWithTwoTabsRow}>
        <CupertinoSegmentWithTwoTabs
          style={styles.cupertinoSegmentWithTwoTabs}
        ></CupertinoSegmentWithTwoTabs>
        <View style={styles.materialHeader1Column}>
          <MaterialHeader1
            icon1Name="account-heart"
            icon2Name="wheelchair-accessibility"
            text1="CCV"
            button2="PinReg1"
            style={styles.materialHeader1}
          ></MaterialHeader1>
          <View style={styles.materialRightIconTextboxStack}>
            <MaterialRightIconTextbox
              icon1Name="account-edit"
              textInput1="Add new"
              style={styles.materialRightIconTextbox}
            ></MaterialRightIconTextbox>
            <CupertinoSegmentWithTwoTabs2
              text1="News"
              text2="Forums"
              button1="News"
              button2="Forum"
              style={styles.cupertinoSegmentWithTwoTabs2}
            ></CupertinoSegmentWithTwoTabs2>
          </View>
        </View>
      </View>
      <MaterialCard12
        text1="Forum 2"
        text2="More volunteers required..."
        text3="Read"
        text4="Skip"
        style={styles.materialCard13}
      ></MaterialCard12>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text1: {
    color: "#121212",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    textAlign: "center",
    left: 36,
    top: 128
  },
  materialCard12: {
    top: 0,
    left: 0,
    width: 359,
    height: 251,
    position: "absolute"
  },
  text1Stack: {
    width: 359,
    height: 251,
    marginTop: 182,
    marginLeft: 1
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOpacity: 1,
    marginTop: 251
  },
  cupertinoSegmentWithTwoTabs: {
    width: 375,
    height: 56,
    marginTop: 48
  },
  materialHeader1: {
    height: 51,
    backgroundColor: "rgba(237,11,11,1)",
    shadowOpacity: 1
  },
  materialRightIconTextbox: {
    top: 50,
    left: 12,
    width: 337,
    height: 43,
    position: "absolute"
  },
  cupertinoSegmentWithTwoTabs2: {
    top: 0,
    left: 0,
    width: 360,
    height: 52,
    position: "absolute"
  },
  materialRightIconTextboxStack: {
    width: 360,
    height: 93
  },
  materialHeader1Column: {
    width: 360,
    marginLeft: 49
  },
  cupertinoSegmentWithTwoTabsRow: {
    height: 144,
    flexDirection: "row",
    marginTop: -716,
    marginLeft: -424
  },
  materialCard13: {
    width: 359,
    height: 233,
    marginTop: 280,
    marginLeft: 1
  }
});

export default Forum;
