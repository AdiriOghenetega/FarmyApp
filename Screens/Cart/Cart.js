import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../configs/colors";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import CartPage from "./cartPage";
import CartAddressPage from "./cartAddressPage";
import CartPaymentPage from "./cartPaymentPage";
import { globalStyles } from "../../styles/globalStyles";

const { height, width } = Dimensions.get("screen");

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.headerContainer,
          globalStyles.shadowContainer,
          {
            shadowOffset: {
              width: 1,
              height: 2,
            },
          },
        ]}
      >
        <View style={styles.arrowIcon}>
          <Ionicons
            name="ios-arrow-back"
            size={23}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ProgressSteps>
          <ProgressStep
            label="Cart"
            nextBtnText={"proceed to checkout"}
            nextBtnStyle={styles.progressNextButton}
            nextBtnTextStyle={styles.progressNextButtonText}
            scrollable={false}
            viewProps={{
              style: styles.viewProps,
            }}
          >
            <CartPage />
          </ProgressStep>
          <ProgressStep
            label="Address"
            nextBtnText={"proceed\n to payment"}
            previousBtnText={"previous"}
            nextBtnStyle={{
              ...styles.progressNextButton,
              marginRight: -25,
              width: 150,
            }}
            nextBtnTextStyle={styles.progressNextButtonText}
            previousBtnStyle={{
              ...styles.progressNextButton,
              marginRight: 25,
              width: 100,
            }}
            previousBtnTextStyle={styles.progressNextButtonText}
            scrollable={false}
            viewProps={{
              style: styles.viewProps,
            }}
          >
            <CartAddressPage />
          </ProgressStep>
          <ProgressStep
            label="Payment"
            finishBtnText={"pay\n ₦3,500"}
            previousBtnText={"previous"}
            nextBtnStyle={{
              ...styles.progressNextButton,
              marginRight: -25,
              width: 150,
            }}
            nextBtnTextStyle={styles.progressNextButtonText}
            previousBtnStyle={{
              ...styles.progressNextButton,
              marginRight: 25,
              width: 100,
            }}
            previousBtnTextStyle={styles.progressNextButtonText}
            scrollable={false}
            viewProps={{
              style: styles.viewProps,
            }}
          >
            <CartPaymentPage />
          </ProgressStep>
        </ProgressSteps>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    paddingBottom: 8,
  },
  bottomContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cartButton: {
    width: "70%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 15,
  },

  cartButtonText: {
    color: colors.white,
    fontFamily: "RalewayBold",
    fontSize: 19,
  },

  priceContainer: {
    flexDirection: "row",
  },

  priceSymbol: {
    fontFamily: "RalewayBold",
    fontSize: 30,
    color: colors.primary,
  },

  price: {
    fontFamily: "RalewayBold",
    fontSize: 28,
    color: colors.primary,
    marginTop: -4,
    marginLeft: -6,
  },
  progressNextButton: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightbrown,
    padding: 11,
    borderRadius: 10,
    marginRight: 25,
  },
  progressNextButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  viewProps: {
    marginBottom: 15,
    height: height - 350,
    width: width,
    padding: 0,
  },
});

export default Cart;
