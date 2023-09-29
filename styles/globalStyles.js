import { StyleSheet } from "react-native";
import colors from "../configs/colors";

export const globalStyles = StyleSheet.create({
  shadowContainer: {
    elevation: 3,
    shadowOffset: {
      width: 1.5,
      height: 0.5,
    },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  logo: {
    width: 53,
    height: 75,
  },
  customHr: {
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: colors.gray,
  },
  naira: {
    color: colors.primary,
    fontSize: 18,
  },
  nairaContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 18,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  grayText: {
    color: colors.gray,
    fontSize: 18,
  },
  blackText: {
    color: colors.black,
    fontSize: 18,
  },
});
