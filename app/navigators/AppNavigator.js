import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// SCREENS IMPORT
import SearchPage from "../../Screens/Home/SearchPage";
import Notification from "../../Screens/Notifications/Notification";
import Logistics from "../../Screens/Logistics/Logistics";
import Profile from "../../Screens/Profile/Profile";
import Cart from "../../Screens/Cart/Cart";
import Category from "../../Screens/Auth/Category";
import LoginOptions from "../../Screens/Auth/LoginOptions";
import RegisterOptions from "../../Screens/Auth/RegisterOptions";
import ForgotPassword from "../../Screens/Auth/ForgotPassword";
import OtpScreen from "../../Screens/Auth/OtpScreen";
import ResetPassword from "../../Screens/Auth/ResetPassword";
import Order from "../../Screens/Order/order";
import Wallet from "../../Screens/Wallet/wallet";
import Security from "../../Screens/Profile/security";
import Refferal from "../../Screens/Profile/refferal";
import Faq from "../../Screens/Profile/faq";
import TermsOfService from "../../Screens/Profile/terms";
import Privacy from "../../Screens/Profile/privacy";
import EditProfile from "../../Screens/Profile/editProfile";
import Mystore from "../../Screens/MyStore/mystore";
import Farmersmarket from "../../Screens/FarmersMarket/farmersmarket";
import Dashboard from "../../Screens/MyStore/dashboard";
import Reviews from "../../Screens/MyStore/reviews";
//IMPORT TABBAR
import MyTabBar from "./TabBar";
import Context from "../../Context/UserContext";
import colors from "../../configs/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = ({ navigation }) => {
  const { user, setUser } = useContext(Context);

  
  //user?.name ? "Home":"LoginCategory"

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen
        name="Home"
        component={SearchPage}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Logistics"
        component={Logistics}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LoginCategory"
        component={Category}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="RegisterCategory"
        component={Category}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="LoginOptions"
        component={LoginOptions}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="RegisterOptions"
        component={RegisterOptions}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Security"
        component={Security}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Refferal"
        component={Refferal}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Faq"
        component={Faq}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TermsOfService"
        component={TermsOfService}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Privacy"
        component={Privacy}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Mystore"
        component={Mystore}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Farmersmarket"
        component={Farmersmarket}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
