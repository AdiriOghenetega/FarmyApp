import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import colors from "../../configs/colors";
import { FontAwesome } from "@expo/vector-icons";
import ProductDetail from "./ProductDetails";

const StoreProductCard = ({ image, store, price, productTitle ,selectedCategory}) => {
  const [openStoreProduct, setOpenStoreProduct] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={openStoreProduct}>
        <ProductDetail setOpenStoreProduct={setOpenStoreProduct} />
      </Modal>
      <TouchableOpacity
        style={styles.storeProductCard}
        onPress={() => setOpenStoreProduct(true)}
      >
        <Image source={image} style={styles.productImage} />

        <View style={styles.storeNameContainer}>
          <Text style={styles.storeName}>{productTitle}</Text>
          <Text style={styles.productName}>{store}</Text>
        </View>

        <View style={styles.priceBoxContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceSymbol}>₦</Text>
            <Text style={styles.priceText}>{price}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.addToCart}>
              <FontAwesome name="plus" size={18} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "45%",
    flexDirection: "row",
    marginLeft: 14,
    marginTop: 20,
    bottom: 10,
  },

  storeProductCard: {
    borderRadius: 15,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 3,
    paddingBottom: 10,
  },

  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },

  storeNameContainer: {
    padding: 20,
  },

  storeName: {
    fontSize: 13,
    color: colors.primary,
    fontFamily: "RalewayMedium",
  },

  productName: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: colors.gray,
  },

  CTA: {
    paddingHorizontal: 20,
  },

  productPrice: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
  },

  priceBoxContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  priceContainer: {
    flexDirection: "row",
  },

  priceSymbol: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: "RalewayBold",
  },

  priceText: {
    color: colors.black,
    marginTop: -2,
    fontSize: 20,
    fontFamily: "RalewayBold",
  },

  addToCart: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
});
export default StoreProductCard;
