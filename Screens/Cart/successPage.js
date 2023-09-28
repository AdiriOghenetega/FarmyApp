import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configs/colors";
import { globalStyles } from "../../styles/globalStyles";
import success from "../../assets/images/success.png";

export default function SuccessPage({ handleCloseSuccessModal, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "90%" }}>
        <View style={styles.successHeader}>
          <Feather
            name="x-circle"
            size={45}
            color={colors.white}
            onPress={handleCloseSuccessModal}
          />
          <MaterialCommunityIcons
            name="progress-upload"
            size={45}
            color={colors.white}
          />
        </View>
        <View style={[styles.successCard, globalStyles.shadowContainer]}>
          <View style={styles.successIconContainer}>
            <Image source={success} alt="success" style={styles.successIcon} />
            <Text style={styles.successText}>Payment Successful!</Text>
          </View>
          <View style={styles.customHrContainer}>
            <View style={styles.customHrLeft}></View>
            <View style={globalStyles.customHr}></View>
            <View style={styles.customHrRight}></View>
          </View>
          <View style={styles.refParentContainer}>
            <View style={styles.refContainer}>
              <Text style={styles.refText}>Reference Number</Text>
              <Text style={styles.refValue}>000085752257</Text>
            </View>
            <View style={styles.refContainer}>
              <Text style={styles.refText}>Date</Text>
              <Text style={styles.refValue}>Mar 22,2023</Text>
            </View>
            <View style={styles.refContainer}>
              <Text style={styles.refText}>Time</Text>
              <Text style={styles.refValue}>07:33 AM</Text>
            </View>
            <View style={styles.refContainer}>
              <Text style={styles.refText}>Payment Status</Text>
              <View style={styles.miniSuccessIconContainer}>
                <Image
                  source={success}
                  alt="success2"
                  style={[styles.successIcon, styles.miniSuccessIcon]}
                />
                <Text style={styles.refValue}>Success</Text>
              </View>
            </View>
            <View style={styles.refContainer}>
              <Text style={styles.refText}>Payment Method</Text>
              <Text style={styles.refValue}>Debit Card</Text>
            </View>
            <View style={globalStyles.customHr}></View>
            <View style={styles.refContainer}>
              <Text style={styles.refText}>Amount</Text>
              <Text style={styles.refValue}>₦200,000:00</Text>
            </View>
          </View>
          <View
            style={{
              ...globalStyles.customHr,
              borderStyle: "solid",
              marginVertical: 8,
            }}
          ></View>
          <View style={styles.pdfParent}>
            <TouchableOpacity
              style={[
                styles.successCard,
                globalStyles.shadowContainer,
                styles.backHomeContainer,
                { alignSelf: "center" },
              ]}
            >
              <View style={styles.pdfContainer}>
                <Feather
                  name="download"
                  size={24}
                  color="black"
                  style={{ marginRight: 2 }}
                />
                <Text style={{ ...styles.backHomeText, fontSize: 17 }}>
                  Get PDF Reciept
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.successCard,
          globalStyles.shadowContainer,
          styles.backHomeContainer,
        ]}
        onPress={() => {
          navigation.navigate("Home");
          handleCloseSuccessModal();
        }}
      >
        <Text style={styles.backHomeText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
    alignItems: "center",
    justifyContent: "space-between",
  },
  successHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
    marginBottom: 8,
  },
  successCard: {
    backgroundColor: colors.white,
    height: 537,
    borderRadius: 10,
  },
  successIcon: {
    height: 55,
    width: 55,
  },
  successIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  successText: {
    fontSize: 20,
    marginVertical: 8,
  },
  backHomeContainer: {
    height: 47,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  backHomeText: {
    color: colors.primary,
    fontSize: 20,
  },
  customHrContainer: {
    position: "relative",
    justifyContent: "center",
  },
  customHrRight: {
    backgroundColor: colors.lightgray,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignSelf: "flex-end",
    position: "absolute",
    zIndex: 2,
    transform: [{ translateX: 15 }],
  },
  customHrLeft: {
    backgroundColor: colors.lightgray,
    width: 30,
    height: 30,
    borderRadius: 50,
    position: "absolute",
    zIndex: 2,
    transform: [{ translateX: -15 }],
  },
  refContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  refText: {},
  refValue: {},
  miniSuccessIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  miniSuccessIcon: {
    height: 17,
    width: 17,
  },
  refParentContainer: {
    padding: 20,
    height: 212,
    justifyContent: "space-between",
  },
  pdfContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pdfParent: {
    height: 150,
    justifyContent: "center",
  },
});
