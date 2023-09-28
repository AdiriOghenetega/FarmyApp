import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import colors from "../../configs/colors";
import card from "../../assets/images/card.png";
import logo from "../../assets/images/flogo.png";
import chip from "../../assets/images/chip.png";
import { globalStyles } from "../../styles/globalStyles";
import RadioButton from "../../configs/customRadioButton";
import SuccessPage from "./successPage";

const { height, width } = Dimensions.get("window");

export default function CartPaymentPage({
  openSuccessFul,
  handleSuccessModal,
  navigation
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const options = ["pay on delivery", "pay online"];

  return (
    <View style={styles.container}>
      <Modal visible={openSuccessFul}>
        <SuccessPage navigation={navigation} handleCloseSuccessModal={handleSuccessModal} />
      </Modal>
      <ScrollView>
        <Text style={styles.titleText}>Select Payment Option</Text>
        <ImageBackground source={card} style={styles.cardContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={globalStyles.logo} alt="logo" />
            <View style={styles.logoTextContainer}>
              <Text style={styles.logoText}>02/26</Text>
            </View>
          </View>
          <View style={styles.chipContainer}>
            <View>
              <Text style={styles.chipText}>5674 4737 3664 XXXX</Text>
              <Text style={styles.chipText}>Popoola Covenant Ifeoluwa</Text>
            </View>
            <View>
              <Image source={chip} alt="chip" />
            </View>
          </View>
        </ImageBackground>
        <View
          style={[
            globalStyles.shadowContainer,
            styles.cardContainer,
            styles.radioButtons,
          ]}
        >
          <RadioButton
            options={options}
            handleOptionSelect={handleOptionSelect}
            selectedOption={selectedOption}
          />
        </View>
        <Text style={{ ...styles.titleText, marginTop: 10 }}>
          Payment Summary
        </Text>
        <View style={styles.paymentSummaryContainer}>
          <View style={styles.paymentSummarySub}>
            <Text style={styles.paymentSummaryText}>Subtotal</Text>
            <Text style={styles.paymentSummaryText}>₦3,500</Text>
          </View>
          <View style={styles.paymentSummarySub}>
            <Text style={styles.paymentSummaryText}>Discount</Text>
            <Text style={styles.paymentSummaryText}>₦0</Text>
          </View>
          <View style={styles.paymentSummarySub}>
            <Text style={styles.paymentSummaryText}>Delivery</Text>
            <Text style={styles.paymentSummaryText}>₦2000</Text>
          </View>
          <View style={globalStyles.customHr}></View>
          <View style={styles.paymentSummarySub}>
            <Text style={styles.paymentSummaryText}>Total</Text>
            <Text style={styles.paymentSummaryText}>₦5500</Text>
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
    color: colors.black,
    fontSize: 17,
    margin: 5,
  },
  cardContainer: {
    width: 350,
    height: 221,
    padding: 25,
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  logoTextContainer: {
    width: 91,
    height: 28,
    backgroundColor: "#76A78C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  logoText: {
    color: colors.white,
  },
  chipContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chipText: {
    color: colors.white,
    marginVertical: 4,
    fontSize: 15,
  },
  radioButtons: {
    height: 94,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: "center",
    width: width - 40,
    alignSelf: "center",
  },
  paymentSummaryContainer: {
    padding: 20,
    height: 212,
    justifyContent: "space-between",
  },
  paymentSummarySub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentSummaryText: {},
});
