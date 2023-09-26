import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../configs/colors";
import StoreProductCard from "./StoreProductCard";
import { storeProducts } from "./data";

const { height, width } = Dimensions.get("window");

const StoreDetail = ({ setOpenStoreDetails }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storeHeader}>
        <TouchableOpacity onPress={() => setOpenStoreDetails(false)}>
          <AntDesign name="arrowleft" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCover}>
        <Image
          source={require("../../assets/images/mcdo.jpg")}
          style={styles.coverPhoto}
        />
      </View>

      <View style={styles.storeProfileContainer}>
        <Image
          style={styles.profilePicture}
          source={require("../../assets/images/chickencover.jpeg")}
        />

        <View style={styles.storeNameInfo}>
          <View style={styles.storeNameContainer}>
            <Text style={styles.storeNameText}>McDonalds</Text>
            <Text style={styles.storeUsername}>@macdonalds</Text>
          </View>

          <View style={styles.ratingBox}>
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />

            <Text style={styles.ratingText}>5.0</Text>
          </View>
        </View>
      </View>

      <View style={styles.storeDescription}>
        <Text style={styles.storeDescriptionText}>
          McDonald's is the world's largest restaurant chain by revenue, serving
          over 69 million customers daily in over 100 countries across 37,855
          outlets as of the year 2018.
        </Text>
      </View>

      <View style={styles.storeProductContainer}>
        <Text style={styles.storeProductText}>Popular Menus</Text>
      </View>

      <FlatList
        data={storeProducts}
        keyExtractor={(product) => product.id.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <StoreProductCard
            image={item.image}
            store={item.store}
            productTitle={item.productTitle}
            price={item.price}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    // paddingTop: Platform.OS == 'android' ? 40 : null
  },

  storeHeader: {
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  profileCover: {},

  coverPhoto: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
  },

  storeProfileContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profilePicture: {
    height: 150,
    width: 150,
    borderWidth: 6,
    borderColor: colors.white,
    borderRadius: 100,
    marginTop: -50,
  },

  storeNameInfo: {
    width: "80%",
    alignItems: "center",
  },

  storeNameContainer: {
    paddingVertical: 10,
  },

  storeNameText: {
    fontSize: 20,
    color: colors.primary,
    fontFamily: "RalewayBold",
  },

  storeUsername: {
    color: colors.gray,
    fontFamily: "RalewayMedium",
    fontSize: 12,
    textAlign: "center",
  },

  ratingBox: {
    flexDirection: "row",
  },

  ratingText: {
    fontFamily: "RalewaySemiBold",
    marginLeft: 5,
    alignItems: "center",
  },

  storeDescription: {
    // paddingVertical: 5,
    paddingHorizontal: 20,
  },

  storeDescriptionText: {
    textAlign: "justify",
    fontFamily: "RalewayThin",
    fontSize: 16,
    lineHeight: 25,
  },

  storeProductContainer: {
    paddingHorizontal: 20,
  },

  storeProductText: {
    fontSize: 20,
    color: colors.primary,
    fontFamily: "RalewayBold",
    paddingVertical: 15,
  },
});
export default StoreDetail;
