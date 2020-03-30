import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoSegmentWithTwoTabs2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          style={styles.segmentTextWrapperLeft}
        >
          <Text style={styles.titleLeft}>{props.text1 || "Puppies"}</Text>
        </TouchableOpacity>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          style={styles.segmentTextWrapperRight}
        >
          <Text style={styles.titleRight}>{props.text2 || "Cubs"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    flexDirection: "row",
    paddingRight: 30,
    paddingLeft: 30
  },
  segmentTextWrapperLeft: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(237,11,11,1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  titleLeft: {
    color: "rgba(237,11,11,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapperRight: {
    flex: 1,
    backgroundColor: "rgba(237,11,11,1)",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(237,11,11,1)",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  titleRight: {
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  }
});

export default CupertinoSegmentWithTwoTabs2;
