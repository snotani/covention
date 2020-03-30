import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialCardWithoutImage1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>
          {props.text1 || "Title goes here"}
        </Text>
        <Text style={styles.subtitleStyle}>
          {props.text2 || "Subtitle here"}
        </Text>
      </View>
      <View style={styles.body2}>
        <Text style={styles.bodyText}>
          {props.text3 ||
            "BuilderX is a screen design tool which codes React Native for you which design without boundaries, the code is generated simultaneously. Save your designed components as symbol and then simply add it to your design next time.Live preview works on real device. Shout out to the Expo team to make it happen."}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(237,11,11,0.71)",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  bodyContent: {
    height: 72,
    justifyContent: "center"
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
  body2: {
    height: 143
  },
  bodyText: {
    color: "#424242",
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20
  }
});

export default MaterialCardWithoutImage1;
