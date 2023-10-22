import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "./colors";

export default function CustomHeader({ title, handleNavigate , rightHeader}) {
  return (
    <View style={styles.headerTitle}>
      <View style={styles.arrowIcon}>
        <Ionicons
          name="ios-arrow-back"
          size={23}
          color={colors.primary}
          onPress={() => handleNavigate()}
        />
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {rightHeader?.exists && rightHeader.component}
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    position: "absolute",
    zIndex: 2,
  },
  titleText: {
    fontSize: 18,
  },
  titleTextContainer: {
    flex: 1,
    alignItems: "center",
  },
});
