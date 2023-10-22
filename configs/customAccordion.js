import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "./colors";

const CustomAccordion = ({ title, message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle} style={styles.title}>
        <Entypo
          name={isOpen ? "minus" : "plus"}
          size={18}
          color={!isOpen ? colors.primary : colors.lightgold}
        />
        <Text>{title}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.message}>
          <Text>{message}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    height: 34,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 5,
  },
  message: {
    height: 107,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

export default CustomAccordion;
