import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../configs/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";

export default function OrderCard({ delivered }) {
  return (
    <View style={styles.container}>
      <View style={styles.StatusActionContainer}>
        <View>
          {delivered ? 
          <Text style={styles.deliveredText}>Delivered</Text>
          :
          <TouchableOpacity>
            <View style={[styles.redTextContainer, styles.trackContainer]}>
              <Text style={styles.redText}>Track Order</Text>
              <Octicons name="triangle-right" size={24} color={colors.red} />
            </View>
          </TouchableOpacity>}
        </View>
        <View>
        {delivered ? 
        <TouchableOpacity>
            <View style={styles.redTextContainer}>
              <MaterialCommunityIcons
                name="refresh"
                size={24}
                color={colors.red}
              />
              <Text style={styles.redText}>Re-Order</Text>
            </View>
          </TouchableOpacity>
          :
          <TouchableOpacity>
            <View style={styles.redTextContainer}>
              <MaterialCommunityIcons
                name="comment-question-outline"
                size={24}
                color={colors.red}
              />
              <Text style={styles.redText}>Support</Text>
            </View>
          </TouchableOpacity>}
        </View>
      </View>
      <View>
      <Text>#5568045678</Text>
      <Text>Today at 6:00 pm</Text>
      <View>
        <Text>5 Items</Text>
        <View style={globalStyles.nairaContainer}>
         <Text style={globalStyles.naira}>₦</Text>
         <Text>3,999.99</Text>
        </View>
      </View>
      <Text>1623 Dugbe,Ibadan,Nigeria</Text>
      <Text>Cow Meatx2, Red Pepperx3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    height:160,
    justifyContent:"space-between",
    borderWidth:1,
    borderColor:colors.gray,
    borderStyle:"dashed",
    padding:10
  },
  deliveredText: {
    color: colors.primary,
  },
  redText: {
    color: colors.red,
    marginLeft: 4,
  },
  redTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  trackContainer: {
    borderWidth: 2,
    borderColor: colors.red,
    alignSelf: "flex-start",
  },
  StatusActionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
