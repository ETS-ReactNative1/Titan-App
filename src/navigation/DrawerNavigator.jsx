import { Image, View, SafeAreaView, StyleSheet, Text } from "react-native";

import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import DefiExchange from "../screens/DefiEnchange";
import NFTScreen from "../screens/NFTScreen";
import MapScrollScreen from "../screens/MapScroll";
import HeaderRightButton from "../components/HeaderRightButton";
import HeaderLeft from "../components/HeaderLeft";
import LockerScreen from "../screens/Lockers";
import StackScreen from "../screens/Stack";
import ScanScreen from "../screens/Scan";
import LoungeScreen from "../screens/Lounge";
import SupportScreen from "../screens/Support";
import AdvertiseScreen from "../screens/Advertise";
import LounchpadComponent from "../components/LounchpadComponent";
import DrawerDropdown from "../components/DrawerDropdown";

const size = Layout.window;
const DrawerNavigator = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={styles.container}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={styles.image}
                  source={require("../../assets/logo.png")}
                />
              </View>

              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      screenOptions={{
        drawerActiveTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.primary,
        headerTintColor: Colors.white,
        drawerInactiveTintColor: Colors.text,
        drawerInactiveBackgroundColor: Colors.white,
        headerShadowVisible: false,
        drawerItemStyle: {
          marginLeft: 20,
          marginRight: 20,
        },
        drawerLabelStyle: { fontFamily: "vsBold" },
      }}
    >
      <DrawerNavigator.Screen
        name="home"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={27}
              color={focused ? Colors.white : Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,

          headerTitleStyle: { color: Colors.white },
        }}
      />
      <DrawerNavigator.Screen
        name="defixchange"
        component={DefiExchange}
        options={{
          title: "DeFi Exchange",
          drawerIcon: ({ focused }) => (
            <Foundation name="graph-bar" size={24} color={Colors.black} />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,

          headerTitleStyle: { color: Colors.header },
        }}
      />

      <DrawerNavigator.Screen
        name="launchpad"
        component={LounchpadComponent}
        listeners={{ drawerItemPress: (e) => e.preventDefault() }}
        options={{
          drawerIcon: ({ focused }) => <DrawerDropdown id={1} />,

          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="locker"
        component={LockerScreen}
        listeners={{ drawerItemPress: (e) => e.preventDefault() }}
        options={{
          title: "Lockers",
          drawerIcon: () => <DrawerDropdown id={2} />,
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="stake"
        component={StackScreen}
        options={{
          title: "Stake",
          drawerIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name="dollar-sign"
                size={24}
                color={focused ? Colors.white : Colors.black}
              />
            </View>
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="scan"
        component={ScanScreen}
        options={{
          title: "Scan",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={24}
              color={focused ? Colors.white : Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="nft"
        component={NFTScreen}
        options={{
          title: "NFT mint",
          drawerIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/wup.png")}
                style={{ width: "12%", height: "68%" }}
              />
            ) : (
              <Image
                source={require("../../assets/up.png")}
                style={{ width: "12%", height: "68%" }}
              />
            ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="titan"
        component={MapScrollScreen}
        options={{
          title: "Titanx Game",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="gamepad-circle-right"
              size={24}
              color={focused ? Colors.white : Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="lounge"
        component={LoungeScreen}
        options={{
          title: "Lounge",
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              name="keyboard-voice"
              size={24}
              color={focused ? Colors.white : Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="support"
        component={SupportScreen}
        options={{
          title: "Support",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="headset"
              size={24}
              color={focused ? Colors.white : Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <DrawerNavigator.Screen
        name="advertise"
        component={AdvertiseScreen}
        options={{
          title: "Advertise",
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="adversal"
              size={28}
              color={focused ? Colors.white : Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
    </DrawerNavigator.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    width: size.width * 0.24,
    height: 60,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 100,
  },
  constainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  icon: {
    borderColor: Colors.black,
    borderWidth: 2,
    width: 28,
    height: 28,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AppDrawerNavigator;
