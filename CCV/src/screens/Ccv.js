import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, TextInput } from "react-native";

function Ccv(props) {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.imageStackStack}>
        <View style={styles.imageStack}>
          <Image
            source={require("../assets/images/voluntary-community-logo.gif")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
            source={require("../assets/images/image_fP2F..png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <TextInput
          placeholder="Connecting Communities to Volunteer"
          placeholderTextColor="rgba(235,221,221,1)"
          style={styles.textInput3}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(237,11,11,1)"
  },
  image: {
    top: 0,
    left: 0,
    width: 385,
    height: 345,
    position: "absolute"
  },
  image2: {
    top: 313,
    width: 135,
    height: 71,
    position: "absolute",
    left: 127
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 385,
    height: 384,
    position: "absolute"
  },
  textInput3: {
    top: 380,
    left: 72,
    width: 244,
    height: 33,
    color: "#121212",
    position: "absolute",
    fontFamily: "helvetica-regular"
  },
  imageStackStack: {
    width: 385,
    height: 413,
    marginTop: 162,
    marginLeft: -14
  }
});

export default Ccv;
