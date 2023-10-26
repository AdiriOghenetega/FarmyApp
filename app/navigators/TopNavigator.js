import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GeneralNotifications from "../../Screens/Notifications/TopTabs/GeneralNotification";
import FarmersMarketNotifications from "../../Screens/Notifications/TopTabs/FarmersMarketNotification";
import LogisticsNotifications from "../../Screens/Notifications/TopTabs/LogisticsNotification";
import colors from "../../configs/colors";

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="GeneralNotifications"
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabel,
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
        options={{ tabBarLabel: "My Store" }}
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

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 15,
    textTransform: "capitalize",
    alignItems: "center",
    fontFamily: "RalewaySemiBold",
  },
});
