import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCard6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>
          {props.text1 || "Title goes here"}
        </Text>
        <Text style={styles.subtitleStyle}>
          {props.text2 || "Subtitle here"}
        </Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>{props.text3 || "ACTION 1"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>{props.text4 || "ACTION 2"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton3}>
          <Icon name="chevron-up" style={styles.iconStyle}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.body2}>
        <Text style={styles.bodyText}>
          {props.text5 ||
            "BuilderX is a screen design tool which codes React Native for you which design without boundaries, the code is generated simultaneously. Save your designed components as symbol and then simply add it to your design next time. Live preview works on real device. Shout out to the Expo team to make it happen."}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    color: "#000",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    color: "#000",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton3: {
    height: 36,
    position: "absolute",
    right: 8,
    bottom: 12,
    padding: 8
  },
  iconStyle: {
    fontSize: 24,
    color: "#000",
    opacity: 0.7
  },
  body2: {
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    color: "#424242",
    fontSize: 14,
    lineHeight: 20
  }
});

export default MaterialCard6;
