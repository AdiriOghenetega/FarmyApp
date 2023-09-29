import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CustomButton from "../../configs/CustomButton";
import colors from "../../configs/colors";
import { globalStyles } from "../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OrderDetails({ handleDetailsClose }) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.firstSection}>
            <View>
              <View style={styles.subSection}>
                <View style={globalStyles.flexRow}>
                  <Text style={globalStyles.blackText}>#5568045678</Text>
                  <Text style={styles.deliveredText}>Delivered</Text>
                </View>
                <Text style={globalStyles.grayText}>27 May,2020</Text>
              </View>
              <View style={styles.subSection}>
                <Text style={globalStyles.grayText}>Delivered to</Text>
                <Text style={globalStyles.blackText}>
                  1623 Dugbe,Ibadan,Nigeria
                </Text>
              </View>
              <View style={styles.subSection}>
                <Text style={globalStyles.grayText}>Payment Method</Text>
                <Text style={globalStyles.blackText}>Debit Card</Text>
              </View>
            </View>
            <View style={globalStyles.customHr}></View>
            <View>
              <View style={styles.subSection}>
                <View style={globalStyles.flexRow}>
                  <Text style={globalStyles.blackText}>Cow Meat</Text>
                  <View style={globalStyles.nairaContainer}>
                    <Text style={globalStyles.naira}>₦</Text>
                    <Text>3,999.99</Text>
                  </View>
                </View>
                <Text style={globalStyles.grayText}>4 Packs</Text>
              </View>
              <View style={styles.subSection}>
                <View style={globalStyles.flexRow}>
                  <Text style={globalStyles.blackText}>Pineapple</Text>
                  <View style={globalStyles.nairaContainer}>
                    <Text style={globalStyles.naira}>₦</Text>
                    <Text>3,999.99</Text>
                  </View>
                </View>
                <Text style={globalStyles.grayText}>4 Pieces</Text>
              </View>
              <View style={styles.subSection}>
                <View style={globalStyles.flexRow}>
                  <Text style={globalStyles.blackText}>Ball Pepper</Text>
                  <View style={globalStyles.nairaContainer}>
                    <Text style={globalStyles.naira}>₦</Text>
                    <Text>3,999.99</Text>
                  </View>
                </View>
                <Text style={globalStyles.grayText}>4 Packs</Text>
              </View>
            </View>
            <View style={globalStyles.customHr}></View>
            <View>
              <View style={styles.subSection}>
                <Text style={globalStyles.grayText}>Item Total</Text>
                <View style={globalStyles.nairaContainer}>
                  <Text style={globalStyles.naira}>₦</Text>
                  <Text>11,999.97</Text>
                </View>
              </View>
              <View style={styles.subSection}>
                <Text style={globalStyles.grayText}>Delivery Charges</Text>
                <View style={globalStyles.nairaContainer}>
                  <Text style={globalStyles.naira}>₦</Text>
                  <Text>1,000.00</Text>
                </View>
              </View>
              <View style={styles.subSection}>
                <Text style={globalStyles.blackText}>Paid</Text>
                <View style={globalStyles.nairaContainer}>
                  <Text style={globalStyles.naira}>₦</Text>
                  <Text>12,999.97</Text>
                </View>
              </View>
            </View>
            <View style={globalStyles.customHr}></View>
            <View style={[globalStyles.flexRow, styles.subSection]}>
              <View
                style={[globalStyles.flexRow, { justifyContent: "flex-start" }]}
              >
                <MaterialCommunityIcons
                  name="comment-question-outline"
                  size={24}
                  color={colors.lightgold}
                />
                <View>
                  <Text style={globalStyles.grayText}>Need Support?</Text>
                  <Text style={[globalStyles.grayText, { fontSize: 10 }]}>
                    Chat with Us
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.chatText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <CustomButton
          customStyle={styles.CustomButtonStyle}
          customLabelStyle={styles.CustomButtonTextStyle}
          buttonLabel={"Re-Order"}
          onPress={handleDetailsClose}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  CustomButtonStyle: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 8,
  },
  CustomButtonTextStyle: {
    color: colors.primary,
  },
  deliveredText: {
    color: colors.primary,
  },
  chatText: {
    color: colors.lightgold,
  },
  firstSection: {
    height: 670,
    justifyContent: "space-around",
  },
  subSection: {
    marginVertical: 4,
  },
});
