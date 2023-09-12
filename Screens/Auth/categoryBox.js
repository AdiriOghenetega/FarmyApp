import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import colors from "../../configs/colors";
import { TouchableOpacity } from "react-native";

export default CategoryBox = ({ group, handleAccountPress, img }) => {
  const displayName = {
    buyerAccount:"Buyer",
    storeAccount:"Store",
    logisticsAccount:"Logistics",
    farmersAccount:"Farmer"
  }

  return (
    <TouchableOpacity
      style={[styles.categoryBox]}
      onPress={() => handleAccountPress(group)}
    >
      <Image source={img} style={styles.categoryImage} />

      <Text style={styles.categoryText}>{displayName[group]}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    borderColor: colors.primary,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 160,
    borderRadius: 20,
  },

  categoryImage: {
    // borderRadius: 50,
  },

  categoryText: {
    textAlign: "center",
    fontFamily: "RalewayBold",
    fontSize: 20,
    marginTop: 15,
    color: colors.primary,
  },
});
