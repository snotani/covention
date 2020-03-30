import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoSegmentWithTwoTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.segmentTextWrapperLeft}>
          <Text style={styles.titleLeft}>Puppies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapperRight}>
          <Text style={styles.titleRight}>Cubs</Text>
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
    backgroundColor: "#007AFF",
    alignItems: "center",
    padding: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  titleLeft: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapperRight: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  titleRight: {
    color: "#007AFF",
    fontSize: 13,
    fontFamily: "roboto-regular"
  }
});

export default CupertinoSegmentWithTwoTabs;
