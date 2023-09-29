import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
// ICONS
import { Ionicons } from "@expo/vector-icons";

import colors from "../../configs/colors";
import CartCard from "./CartCard.js";
import { cartItems } from "./data";

const { height, width } = Dimensions.get("window");

const CartPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceSymbol}>₦</Text>
          <Text style={styles.price}>3,500</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear(2)</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.id.toString()}
        horizontal={false}
        renderItem={({ item }) => (
          <CartCard
            imageUrl={item.image}
            storeName={item.storeName}
            productName={item.productName}
            price={item.price}
            onPress={() => navigation.navigate("StoreDetail")}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clearText: {
    fontFamily: "RalewayMedium",
    fontSize: 14,
    color: colors.primary,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  priceSymbol: {
    fontSize: 17,
    color: colors.primary,
  },

  price: {
    fontSize: 17,
    color: colors.primary,
  },
});

export default CartPage;
