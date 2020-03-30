import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonShare2 from "../components/MaterialButtonShare2";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import MaterialButtonShare4 from "../components/MaterialButtonShare4";
import MaterialButtonShare5 from "../components/MaterialButtonShare5";

function Pin(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <CupertinoButtonLight1
          text1="Return"
          button1="Go Back"
          style={styles.cupertinoButtonLight3}
        ></CupertinoButtonLight1>
      </View>
      <StatusBar></StatusBar>
      <Text style={styles.loremIpsum}>What do you need help with?</Text>
      <View style={styles.deliveringFoodRow}>
        <Text style={styles.deliveringFood}>Delivering Food</Text>
        <Text style={styles.deliveringMedicine}>Delivering Medicine</Text>
      </View>
      <View style={styles.requestCallsRow}>
        <Text style={styles.requestCalls}>Request Calls</Text>
        <Text style={styles.petWalk}>Pet Walk</Text>
      </View>
      <Text style={styles.other}>Other</Text>
      <View style={styles.loremIpsum2Stack}>
        <Text style={styles.loremIpsum2}></Text>
        <CupertinoButtonLight1
          text1="Continue"
          button1="Orders"
          style={styles.cupertinoButtonLight2}
        ></CupertinoButtonLight1>
      </View>
      <MaterialIconTextbox
        style={styles.materialIconTextbox}
      ></MaterialIconTextbox>
      <View style={styles.materialButtonShare1Row}>
        <MaterialButtonShare1
          button1="FoodDelivery"
          style={styles.materialButtonShare1}
        ></MaterialButtonShare1>
        <MaterialButtonShare2
          button1="Medicine"
          style={styles.materialButtonShare2}
        ></MaterialButtonShare2>
      </View>
      <View style={styles.materialButtonShare3Row}>
        <MaterialButtonShare3
          button1="Calls"
          style={styles.materialButtonShare3}
        ></MaterialButtonShare3>
        <MaterialButtonShare4
          button1="PetWalk"
          style={styles.materialButtonShare4}
        ></MaterialButtonShare4>
      </View>
      <MaterialButtonShare5
        button1="OtherRequests"
        style={styles.materialButtonShare5}
      ></MaterialButtonShare5>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 360,
    height: 52,
    backgroundColor: "rgba(237,11,11,1)",
    marginTop: 24
  },
  cupertinoButtonLight3: {
    width: 70,
    height: 27,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    marginTop: 13,
    marginLeft: 12
  },
  loremIpsum: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "helvetica-regular",
    marginTop: 26,
    alignSelf: "center"
  },
  deliveringFood: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  deliveringMedicine: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginLeft: 17
  },
  deliveringFoodRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 158,
    marginLeft: 23,
    marginRight: 5
  },
  requestCalls: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  petWalk: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginLeft: 77
  },
  requestCallsRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 138,
    marginLeft: 23,
    marginRight: 56
  },
  other: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginTop: 149,
    marginLeft: 61
  },
  loremIpsum2: {
    top: 35,
    left: 65,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  cupertinoButtonLight2: {
    top: 0,
    left: 0,
    width: 132,
    height: 38,
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09
  },
  loremIpsum2Stack: {
    width: 132,
    height: 38,
    marginTop: 30,
    marginLeft: 110
  },
  materialIconTextbox: {
    width: 358,
    height: 43,
    marginTop: -568,
    marginLeft: 411
  },
  materialButtonShare1: {
    width: 80,
    height: 80
  },
  materialButtonShare2: {
    width: 80,
    height: 80,
    marginLeft: 102
  },
  materialButtonShare1Row: {
    height: 80,
    flexDirection: "row",
    marginLeft: 42,
    marginRight: 56
  },
  materialButtonShare3: {
    width: 80,
    height: 80
  },
  materialButtonShare4: {
    width: 80,
    height: 80,
    marginLeft: 102
  },
  materialButtonShare3Row: {
    height: 80,
    flexDirection: "row",
    marginTop: 75,
    marginLeft: 42,
    marginRight: 56
  },
  materialButtonShare5: {
    width: 80,
    height: 80,
    marginTop: 100,
    marginLeft: 42
  }
});

export default Pin;
