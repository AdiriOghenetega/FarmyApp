import { View, Text, Image, StyleSheet } from "react-native";
// NAVIGATION PEEPS
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// SCREEN IMPORT
import GeneralNotifications from "../../Screens/Notifications/TopTabs/GeneralNotification";
import FarmersMarketNotifications from "../../Screens/Notifications/TopTabs/FarmersMarketNotification";
import LogisticsNotifications from "../../Screens/Notifications/TopTabs/LogisticsNotification";
// REACT HOOKS
import { useSafeAreaInsets } from "react-native-safe-area-context";
// CONFIGS
import colors from "../../configs/colors";

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="GeneralNotifications"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          //  borderWidth: 2,
          width: "100%",
          textTransform: "capitalize",
          alignItems: "center",
          fontFamily: "RalewaySemiBold",
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen
        name="General"
        component={GeneralNotifications}
        options={{
          tabBarLabel: "General",
        }}
      />
      <Tab.Screen
        name="Farmer's Market"
        component={FarmersMarketNotifications}
        options={{ tabBarLabel: "Farmer's Market" }}
      />
      <Tab.Screen
        name="Logistics"
        component={LogisticsNotifications}
        options={{ tabBarLabel: "Logistics" }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
