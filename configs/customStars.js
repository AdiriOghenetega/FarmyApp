import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "./colors";

export default function CustomStars() {
  return (
    <View style={styles.storeStars}>
      <AntDesign name="star" size={12} color={colors.lightgold} />
      <AntDesign name="star" size={12} color={colors.lightgold} />
      <AntDesign name="star" size={12} color={colors.lightgold} />
      <AntDesign name="star" size={12} color={colors.lightgold} />
      <AntDesign name="star" size={12} color={colors.lightgold} />
    </View>
  );
}

const styles = StyleSheet.create({
  storeStars: {
    flexDirection: "row",
  },
});
