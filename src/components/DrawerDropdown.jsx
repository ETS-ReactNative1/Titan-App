import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Layout from "../constants/Layout";
import AppText from "./AppText";
import Colors from "../constants/Colors";
import Launch from "../../assets/Launch";
import Lock from "../../assets/Lock";

function DrawerDropdown({ id }) {
  const size = Layout.window;
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);
  return (
    <View>
      <Pressable
        style={{ flexDirection: "row" }}
        onPressIn={() => setStatus(!status)}
      >
        {id === 1 ? (
          // <MaterialCommunityIcons
          //   name="rocket-launch-outline"
          //   size={24}
          //   color={Colors.black}
          // />
          <Launch />
        ) : (
          <Lock />
        )}
        {id === 1 ? (
          <AppText
            style={{ fontFamily: "vsBold", marginLeft: size.width * 0.068 }}
          >
            Launchpad
          </AppText>
        ) : (
          <AppText
            style={{
              fontFamily: "vsBold",
              marginLeft: size.width * 0.071,
              marginRight: 27,
            }}
          >
            Lockers
          </AppText>
        )}
        {!status ? (
          <Pressable
            onPressIn={() => setStatus(!status)}
            style={{ marginLeft: size.width * 0.12 }}
          >
            <AntDesign
              name="caretright"
              size={18}
              color="black"
              style={styles.dropIcon}
            />
          </Pressable>
        ) : (
          <Pressable
            onPressIn={() => setStatus(!status)}
            style={{ marginLeft: size.width * 0.12 }}
          >
            <AntDesign
              name="caretdown"
              size={18}
              color={Colors.primary}
              style={styles.dropIcon}
            />
          </Pressable>
        )}
      </Pressable>
      <Pressable style={{ marginLeft: size.width * 0.2 }}>
        {status ? (
          <View>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.07,
              }}
              onPress={() =>
                navigation.navigate("createPresale", {
                  type: id === 1 ? "presale" : "lock",
                })
              }
            >
              <Text
                style={[
                  styles.text,
                  { color: status ? Colors.primary : Colors.text },
                ]}
              >
                {id === 1 ? "Create Launchpad" : "Create Lock"}
              </Text>
            </Pressable>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.065,
              }}
              onPress={() => navigation.navigate("defiexchange")}
            >
              <Text
                style={[
                  styles.text,
                  { color: !status ? Colors.primary : Colors.text },
                ]}
              >
                Dashboard
              </Text>
            </Pressable>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.065,
              }}
              onPress={() => navigation.navigate("managePresale")}
            >
              <Text
                style={[
                  styles.text,
                  { color: !status ? Colors.primary : Colors.text },
                ]}
              >
                Manage Presal
              </Text>
            </Pressable>
          </View>
        ) : null}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: Colors.inputBackground,
    marginLeft: 100,
  },
  imageButton: {
    width: 10,
    height: 10,
  },
  text: {
    fontFamily: "vsBold",
  },
});
export default DrawerDropdown;
