import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonLight1(props) {
  return (
    <TouchableOpacity
      /* Conditional navigation not supported at the moment */ style={[
        styles.container,
        props.style
      ]}
    >
      <Text style={styles.caption}>{props.text1 || "Button"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(237,11,11,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderStyle: "solid"
  },
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    fontFamily: "roboto-500",
    textAlign: "center"
  }
});

export default CupertinoButtonLight1;