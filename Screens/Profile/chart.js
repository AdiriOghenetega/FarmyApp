import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import colors from "../../configs/colors";
import { globalStyles } from "../../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { BarChart } from "react-native-gifted-charts";

const { height, width } = Dimensions.get("window");

export default function Chart({ title, customHeight }) {
  const options = ["Last Week", "Last Month", "Last Year"];
  const chartData = [
    { value: 50, label: "Sun" },
    { value: 50, label: "Mon" },
    { value: 30, label: "Tue" },
    { value: 50, label: "Wed" },
    { value: 20, label: "Thur" },
    { value: 50, label: "Fri" },
    { value: 40, label: "Sat" },
  ];
  return (
    <View>
      <View style={globalStyles.flexRow}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <SelectDropdown
            data={options}
            buttonStyle={styles.dropDownButton}
            rowTextStyle={styles.dropDownRowText}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={15}
                />
              );
            }}
            dropdownIconPosition={"right"}
            defaultValueByIndex={0}
            buttonTextStyle={styles.dropDownButtonText}
          />
        </View>
      </View>
      <View>
        <BarChart
          data={chartData}
          barWidth={10}
          spacing={27}
          width={width - 100}
          height={customHeight || 150}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownButton: {
    backgroundColor: colors.white,
    width: 130,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  dropDownRowText: {
    color: colors.primary,
    fontSize: 15,
  },
  dropDownButtonText: {
    fontSize: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.tertiary,
    width: 150,
  },
  buttonLabel: {
    color: colors.primary,
  },
  withdrawButtonContainer: {
    alignSelf: "center",
  },
});
