import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import MaterialCard6 from "../components/MaterialCard6";
import MaterialHeader1 from "../components/MaterialHeader1";
import CupertinoSegmentWithTwoTabs1 from "../components/CupertinoSegmentWithTwoTabs1";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";
import CupertinoSearchBarWithCancelButton from "../components/CupertinoSearchBarWithCancelButton";

function News(props) {
  return (
    <View style={styles.container}>
      <View style={styles.text1Stack}>
        <Text style={styles.text1}>
          Start from scratch{"\n"}
          {"\n"}or{"\n"}
          {"\n"}Drag and drop a Sketch file
        </Text>
        <MaterialCard6
          text2="The lockdown may last till October, says PM"
          text1="Coronavirus cases jumps to 17,082"
          text3="Read"
          text4="Skip"
          text5="With the spread of the novel coronavirus (COVID-19) causing significant global disruption in 2020, the U.K. has escalated its response by announcing strict country-wide measures aimed at slowing the spread of the virus. After ordering pubs, bars, restaurants, theatres, gyms and leisure centres across the country to close indefinitely, Prime Minister Boris Johnson addressed the public on March 23, outlining strict exercise and shopping limits, ordering all shops other than food stores and pharmacies to close, and implementing a ban on public gatherings of two or more people. The government is also delivering an unprecedented economic relief package aimed at businesses and individuals hit by the pandemic, which is estimated to cost over £400 billion. As individuals and groups across the U.K. attempt to conduct their daily life in lockdown, we look at the situation in the country and around the world in pictures."
          style={styles.materialCard1}
        ></MaterialCard6>
      </View>
      <View style={styles.materialHeader3ColumnRow}>
        <View style={styles.materialHeader3Column}>
          <MaterialHeader1
            icon1Name="account-heart"
            icon2Name="wheelchair-accessibility"
            text1="CCV"
            button2="PinReg1"
            style={styles.materialHeader3}
          ></MaterialHeader1>
          <CupertinoSegmentWithTwoTabs1
            text1="News"
            text2="Forums"
            button1="News"
            button2="Forum"
            style={styles.cupertinoSegmentWithTwoTabs2}
          ></CupertinoSegmentWithTwoTabs1>
        </View>
        <MaterialHeader1
          icon1Name="account-heart"
          icon2Name="wheelchair-accessibility"
          style={styles.materialHeader2}
        ></MaterialHeader1>
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
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <CupertinoSearchBarWithCancelButton
        style={styles.cupertinoSearchBarWithCancelButton}
      ></CupertinoSearchBarWithCancelButton>
      <StatusBar></StatusBar>
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
    left: 37,
    top: 141
  },
  materialCard1: {
    top: 0,
    left: 0,
    width: 360,
    height: 515,
    position: "absolute"
  },
  text1Stack: {
    width: 360,
    height: 515,
    marginTop: 169
  },
  materialHeader3: {
    width: 360,
    height: 51,
    backgroundColor: "rgba(237,11,11,1)",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1
  },
  cupertinoSegmentWithTwoTabs2: {
    width: 360,
    height: 49
  },
  materialHeader3Column: {
    width: 360
  },
  materialHeader2: {
    width: 360,
    height: 51,
    backgroundColor: "rgba(237,11,11,1)",
    shadowOpacity: 1,
    marginLeft: 54,
    marginTop: 1
  },
  materialHeader3ColumnRow: {
    height: 100,
    flexDirection: "row",
    marginTop: -660,
    marginRight: -414
  },
  materialIconTextButtonsFooter1: {
    width: 360,
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOpacity: 1,
    marginTop: 560
  },
  cupertinoSearchBarWithCancelButton: {
    width: 360,
    height: 44,
    marginTop: -615
  }
});

export default News;
