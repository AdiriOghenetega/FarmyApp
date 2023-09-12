import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from '../../Screens/Home/SearchPage';
import StoreDetail from '../../Screens/StoreScreen/StoreDetails';
import ProductDetails from '../../Screens/StoreScreen/ProductDetails';
import Notification from '../../Screens/Notifications/Notification';
import Logistics from '../../Screens/Logistics/Logistics';
import Cart from '../../Screens/Cart/Cart';
import Checkout from '../../Screens/Order/Checkout';


const Feed = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Feed.Navigator mode="modal">
      <Feed.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          headerShown: false,
        }}
      />

      <Feed.Screen
        name="StoreDetail"
        component={StoreDetail}
        options={{
          headerShown: false,
        }}
      />

      <Feed.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />

      <Feed.Screen
          name="Notifications"
          component={Notification}
          options={{
            headerShown: false
          }}
      />

      <Feed.Screen
          name="Logistics"
          component={Logistics}
          options={{
            headerShown: false
          }}
      />

      <Feed.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false
          }}
      />

    <Feed.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerShown: false
          }}
      />


    </Feed.Navigator>
  );
};

export default FeedNavigator;
