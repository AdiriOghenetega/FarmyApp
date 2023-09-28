import { View, Text, StyleSheet, ScrollView,Dimensions } from "react-native";
import React from "react";
import colors from "../../configs/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";
import SelectDropdown from "react-native-select-dropdown";
import { logisticsData } from "./data";

const { height, width } = Dimensions.get("window");

export default function CartAddressPage() {
  const logisticsList = logisticsData.map((elem) => elem.logisticsname);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>Select Address</Text>
        <View style={[styles.addAddress, globalStyles.shadowContainer]}>
          <View>
            <Text>Add Address</Text>
          </View>
          <View style={styles.homeIconContainer}>
            <MaterialCommunityIcons
              name="home-heart"
              size={24}
              color={colors.white}
            />
          </View>
        </View>
        <View
          style={[styles.editAddressContainer, globalStyles.shadowContainer]}
        >
          <View style={styles.editHomeContainer}>
            <View style={styles.subHomeContainer}>
              <MaterialCommunityIcons
                name="home-heart"
                size={24}
                color={colors.otherprimary}
              />
              <Text style={styles.subHomeText}>Home</Text>
            </View>
            <View style={styles.editContainer}>
              <Foundation
                name="clipboard-pencil"
                size={24}
                color={colors.otherprimary}
              />
              <Text style={styles.editText}>Edit</Text>
            </View>
          </View>
          <Text style={styles.state}>Ibadan</Text>
          <Text>+234 901 979 4358</Text>
          <Text style={styles.mainAddress}>
            No 23, Command Secondary School, via Omi-Adio, Apata, Ibadan
          </Text>
        </View>
        <View
          style={[
            styles.editAddressContainer,
            globalStyles.shadowContainer,
            { height: 137 },
          ]}
        >
          <View style={styles.carIconContainer}>
            <MaterialCommunityIcons
              name="car-connected"
              size={24}
              color={colors.otherprimary}
            />
            <Text style={styles.carIconText}>Logistics Company</Text>
          </View>
          <SelectDropdown
            data={logisticsList}
            defaultButtonText="Pick a logistics Company"
            buttonStyle={styles.dropDownButton}
            rowTextStyle={{ color: colors.primary }}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
          />
          <View style={styles.costContainer}>
            <Text style={styles.costText}>Cost</Text>
            <Text style={styles.costAmount}>₦3,500</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleText: {
    color: colors.primary,
    margin: 6,
    fontSize: 17,
  },
  addAddress: {
    height: 79.35,
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  homeIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: colors.otherprimary,
  },
  editHomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editText: {
    color: colors.primary,
  },
  subHomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subHomeText: {
    color: colors.primary,
    fontSize: 17,
  },
  state: {
    fontSize: 17,
  },
  mainAddress: {
    color: colors.primary,
  },
  editAddressContainer: {
    marginTop: 8,
    height: 182,
    borderRadius: 10,
    justifyContent: "space-around",
    paddingHorizontal: 25,
    backgroundColor: colors.white,
    width:width-40
  },
  dropDownButton: {
    width: "100%",
    fontSize: 13,
    borderRadius: 10,
    padding:9
  },
  costContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  costText: {
    fontSize: 18,
  },
  costAmount: {
    fontSize: 17,
  },
  carIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  carIconText: {
    color: colors.primary,
    fontSize: 17,
  },
});
