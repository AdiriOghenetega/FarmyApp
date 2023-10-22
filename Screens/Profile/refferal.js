import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../configs/customHeader";
import Chart from "./chart";
import ReferralTerms from "./referralTerms";
import { globalStyles } from "../../styles/globalStyles";
import twitterIcon from "../../assets/images/twitter_vector.png";
import whatsappIcon from "../../assets/images/whatsapp_vector.png";
import fbIcon from "../../assets/images/fb_vector.png";
import inIcon from "../../assets/images/in_vector.png";
import colors from "../../configs/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function Refferal({navigation}) {
  const [showTerms, setShowTerms] = useState(false);

  const handleNavigate = () => {
    navigation.navigate("Profile");
  };

  const handleShowTerms = () => {
    setShowTerms((prev) => !prev);
  };

  const rightHeader = {
    exists: true,
    component: (
      <TouchableOpacity style={styles.rightHeader} onPress={handleShowTerms}>
        <Text>{showTerms ? "Statistics" : "Terms"}</Text>
      </TouchableOpacity>
    ),
  };

  const referralData = [
    {
      name: "Abass Fakolujo",
      period: "10 days ago",
    },
    {
      name: "Sola Kosoko",
      period: "a month ago",
    },
    {
      name: "Dele Ajogbotafe",
      period: "20 minutes ago",
    },
    {
      name: "Dr. Simbi Emmanuel",
      period: "20 minutes ago",
    },
  ];

  return (
    <SafeAreaView>
      <CustomHeader
        title="Referral"
        handleNavigate={handleNavigate}
        rightHeader={rightHeader}
      />
      <View style={styles.container}>
        <View style={styles.firstSection}>
          {!showTerms ? <Chart /> : <ReferralTerms />}
        </View>
        <View style={styles.secondSection}>
          <View style={globalStyles.customHr}></View>
          <View style={styles.clipboard}>
            <View style={styles.clipboardText}>
              <Text>http://farmyapp.com/refer/abm...</Text>
            </View>
            <TouchableOpacity style={styles.copyButton}>
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.shareAltContainer}>
            <View style={styles.shareHrWidth}>
              <View style={globalStyles.customHr}></View>
            </View>
            <Text style={styles.shareAltText}>Or share via</Text>
            <View style={styles.shareHrWidth}>
              <View style={globalStyles.customHr}></View>
            </View>
          </View>
          <View style={styles.shareIconsParent}>
            <TouchableOpacity style={styles.shareIconContainer}>
              <Image source={inIcon} style={styles.shareIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareIconContainer}>
              <Image source={twitterIcon} style={styles.shareIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareIconContainer}>
              <Image source={whatsappIcon} style={styles.shareIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareIconContainer}>
              <Image source={fbIcon} style={styles.shareIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareIconContainer}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={35}
                color={colors.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdSection}>
          <Text style={styles.thirdSectionHeader}>Referees</Text>
          <View style={globalStyles.customHr}></View>
          <View style={styles.refereeContainer}>
            <FlatList
              data={referralData}
              renderItem={({ item }) => (
                <View style={styles.refereeBox}>
                  <Text style={styles.refereeName}>{item.name}</Text>
                  <Text style={styles.refereePeriod}>{item.period}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: height - 160,
    justifyContent: "space-between",
  },
  rightHeader: {
    marginRight: 20,
    position: "absolute",
    right: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  secondSection: {
    height: 188,
    justifyContent: "space-between",
  },
  clipboard: {
    width: 335,
    height: 54,
    backgroundColor: colors.lightgray,
    borderRadius: 10,
    flexDirection: "row",
    position: "relative",
    alignSelf: "center",
  },
  clipboardText: {
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    width: 249,
  },
  copyButton: {
    width: 86,
    height: 54,
    backgroundColor: colors.gray,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
  },
  copyText: {
    color: colors.white,
  },
  shareAltContainer: {
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  shareHrWidth: {
    width: "30%",
  },
  shareAltText: {
    paddingHorizontal: 20,
  },
  shareIconsParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shareIconContainer: {
    width: 54,
    height: 54,
    backgroundColor: colors.lightgray,
    borderRadius: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  shareIcon: {
    resizeMode: "contain",
    maxHeight: 70,
    maxWidth: 70,
  },
  thirdSection: {
    marginTop: 20,
  },
  thirdSectionHeader: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  refereeContainer: {},
  refereeBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  refereeName: {},
  refereePeriod: {},
});
