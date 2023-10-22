import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../configs/colors";
import { globalStyles } from "../../styles/globalStyles";

const ProductCard = ({
  img,
  brandName,
  productName,
  storeStars,
  productPrice,
}) => {
  return (
    <View style={[styles.container, globalStyles.shadowContainer]}>
      <Image source={img} alt="product" style={styles.image} />
      <View style={styles.productDetails}>
        <Text style={styles.brandName}>{brandName}</Text>
        <Text style={styles.productName}>{productName}</Text>
        <View style={globalStyles.flexRow}>
          <View style={styles.storeStars}>
            <AntDesign name="star" size={15} color={colors.lightgold} />
            <AntDesign name="star" size={15} color={colors.lightgold} />
            <AntDesign name="star" size={15} color={colors.lightgold} />
            <AntDesign name="star" size={15} color={colors.lightgold} />
            <AntDesign name="star" size={15} color={colors.lightgold} />
          </View>
          <Text>4.6 star</Text>
        </View>
        <Text style={styles.productPrice}>N{productPrice}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.editButton}>
            <AntDesign name="edit" size={20} color={colors.white} />
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <AntDesign name="delete" size={20} color={colors.white} />
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: 171,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  image: {
    width: 155,
    height: 116,
  },
  productDetails: {
    justifyContent: "space-between",
    flex: 1,
  },
  brandName: {
    marginVertical: 2,
  },
  productName: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 2,
  },
  storeStars: {
    flexDirection: "row",
    marginVertical: 2,
  },
  productPrice: {
    marginVertical: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginVertical: 2,
  },
  buttonText: {
    color: colors.white,
  },
  editButton: {
    width: 53,
    alignItems: "center",
    justifyContent: "center",
    height: 53,
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 10,
  },
  deleteButton: {
    width: 53,
    alignItems: "center",
    justifyContent: "center",
    height: 53,
    backgroundColor: colors.lightgold,
    padding: 5,
    borderRadius: 10,
  },
});
