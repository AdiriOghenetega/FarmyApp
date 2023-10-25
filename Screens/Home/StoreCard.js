import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import React, { useState } from "react";
import colors from "../../configs/colors";
import { AntDesign } from "@expo/vector-icons";
import StoreDetail from "./StoreDetails";
import CustomStars from "../../configs/customStars";

const StoreCard = ({ imageUrl, storeName, storeDescription, distance }) => {
  const [openStoreDetails, setOpenStoreDetails] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={openStoreDetails}>
        <View>
          <StoreDetail setOpenStoreDetails={setOpenStoreDetails} />
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.storeBox}
        onPress={() => setOpenStoreDetails(true)}
      >
        <View style={styles.storeLogo}>
          <Image style={styles.storeLogoImage} source={imageUrl} />
        </View>

        <View style={styles.storeDetailsBox}>
          <Text style={styles.storeName}>{storeName}</Text>
          <Text style={styles.storeDetailsText}>{storeDescription}</Text>
        </View>

        <View style={styles.storeRatings}>
          <CustomStars />

          <View>
            <Text style={styles.storeDistance}>{distance}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  storeBox: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: -1.5,
      height: 0.5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 2,
    elevation: 3,
  },

  storeLogo: {
    // borderWidth: 1,
    width: "24%",
  },

  storeLogoImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  storeDetailsBox: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    width: "60%",
  },

  storeName: {
    fontSize: 14,
    fontFamily: "RalewayBold",
    color: colors.primary,
  },

  storeDetailsText: {
    marginTop: 10,
    textAlign: "justify",
    fontSize: 12,
    fontFamily: "RalewayMedium",
  },

  storeRatings: {
    width: "18%",
    // borderWidth: 1,
    alignItems: "space-between",
    justifyContent: "space-between",
    height: 70,
  },
  storeStars: {
    flexDirection: "row",
  },

  storeDistance: {
    fontFamily: "RalewaySemiBold",
    fontSize: 12,
    color: colors.primary,
  },
});
export default StoreCard;
