import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function TopCart() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/locker.png")}
        style={styles.image}
      />

      <Text style={styles.text}>
        Look your token with Apelock and earn/ withdraw
      </Text>
      <Text style={[styles.text, { marginBottom: 20 }]}>
        rewards whilst locked
      </Text>
      <CustomButton
        title="View Token Lockers"
        style={styles.button}
      ></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: size.height * 0.35,
    width: size.width * 0.9,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  image: {
    height: size.height * 0.22,
    width: size.width * 0.4,
    alignSelf: "center",
    marginTop: -15,
  },
  text: {
    fontSize: 13,
    color: Colors.white,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  button: {
    width: size.width * 0.55,
    height: size.height * 0.045,
    backgroundColor: Colors.inputBackground,
    marginBottom: 7,
  },
});

export default TopCart;
