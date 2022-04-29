import React from "react";
import { Image, PixelRatio, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import DefiExchange from "../screens/DefiEnchange";
import Dashboard from "../screens/Dashboard";
import SubmitInfo from "../screens/SubmitInfo";
import SupportScreen from "../screens/Support";
import Layout from "../constants/Layout";
import LockerScreen from "../screens/Lockers";
import NFTScreen from "../screens/NFTScreen";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  const { width, height } = Layout.window;
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="nftmint"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#222222",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.white,
          overflow: "hidden",
          height: hp(PixelRatio.get() > 2 ? 7.5 : 8.1),
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <bottomTabNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={34} color={color} />
          ),
        })}
      />
      <bottomTabNavigator.Screen
        name="locker"
        component={LockerScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="lock-outline" size={34} color={color} />
          ),
        })}
      />
      <bottomTabNavigator.Screen
        listeners={{
          tabPress: (e) => e.preventDefault(),
        }}
        name="home"
        component={SupportScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.supportButton}>
              <Feather name="home" size={36} color={Colors.white} />
            </View>
          ),
        })}
      />

      <bottomTabNavigator.Screen
        name="nftmint"
        component={NFTScreen}
        options={() => ({
          title: "nftmint",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/pup.png")}
                style={{ width: "34%", height: "50%", marginTop: "1.5%" }}
              />
            ) : (
              <Image
                source={require("../../assets/up.png")}
                style={styles.image}
              />
            ),

          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTitleStyle: {
            color: "white",
          },
        })}
      />
      <bottomTabNavigator.Screen
        name="submitinfo"
        component={SubmitInfo}
        options={() => ({
          title: "submitinfo",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.DEButton,
                { borderColor: focused ? Colors.primary : color },
              ]}
            >
              <FontAwesome
                name="bitcoin"
                size={24}
                color={focused ? Colors.primary : color}
              />
            </View>
          ),
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
const styles = StyleSheet.create({
  DEButton: {
    borderWidth: 3.5,
    width: wp(PixelRatio.get() > 2 ? 8 : 7),
    height: hp(4),
    borderRadius: wp(8) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  supportButton: {
    width: wp(15),
    height: "100%",
    borderRadius: wp(15) / 2,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#D0BDEA",
  },
  image: {
    width: "34%",
    height: "50%",
    marginTop: "1.5%",
  },
});
