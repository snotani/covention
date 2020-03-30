import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialMapView from "../components/MaterialMapView";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";
import MaterialButtonLight from "../components/MaterialButtonLight";

function Volunteer(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated={true}></StatusBar>
      <MaterialHeader1
        icon1Name="account-heart"
        icon2Name="wheelchair-accessibility"
        text1="CCV"
        style={styles.materialHeader1}
      ></MaterialHeader1>
      <MaterialMapView style={styles.materialMapView1}></MaterialMapView>
      <MaterialCardWithoutImage
        text1="Morecambe Food Bank"
        text3="Morecambe food bank requires an additional 6 loaf of bread, hand wash, toilet rolls to be delivered"
        text2="In need of more groceries..."
        text4=" "
        text5=" "
        style={styles.materialCardWithoutImage1}
      ></MaterialCardWithoutImage>
      <MaterialButtonLight
        text1="Accept"
        button1="Registration1"
        style={styles.materialButtonLight1}
      ></MaterialButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHeader1: {
    height: 51,
    backgroundColor: "rgba(237,11,11,1)",
    shadowOpacity: 1,
    marginTop: 24
  },
  materialMapView1: {
    height: 371
  },
  materialCardWithoutImage1: {
    width: 359,
    height: 227,
    marginTop: 2,
    marginLeft: 1
  },
  materialButtonLight1: {
    width: 203,
    height: 36,
    backgroundColor: "rgba(237,11,11,1)",
    borderRadius: 41,
    borderColor: "#000000",
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.45,
    marginTop: 12,
    alignSelf: "center"
  }
});

export default Volunteer;
