import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import CustomHeader from "../../configs/customHeader";
import CustomButton from "../../configs/CustomButton";
import mcd from "../../assets/images/mcd.jpg";
import { globalStyles } from "../../styles/globalStyles";
import colors from "../../configs/colors";
import { MaterialIcons,MaterialCommunityIcons,FontAwesome,Ionicons } from "@expo/vector-icons";

export default function Wallet({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("Profile");
  };
  const handleNavigate2 = () => {
    navigation.navigate("Refferal");
  }
  return (
    <SafeAreaView>
      <CustomHeader title={"Wallet"} handleNavigate={handleNavigate} />
      <View style={styles.container}>
        <View style={[globalStyles.flexRow, styles.firstSection]}>
          <View>
            <Text style={styles.textStyle}>N233,500.00</Text>
            <Text style={styles.textStyle}>Total Balance</Text>
          </View>
          <View>
            <Image source={mcd} alt="user_photo" style={styles.logo} />
          </View>
        </View>
        <View style={[globalStyles.flexRow, styles.secondSection]}>
          <View style={styles.textCenter}>
            <Text style={{ color: colors.white }}>Withdraw-able</Text>
            <Text style={[styles.textStyle, { color: colors.white }]}>
              150,500
            </Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={{ color: colors.white }}>Transactional</Text>
            <Text style={[styles.textStyle, { color: colors.white }]}>
              180,000
            </Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={{ color: colors.white }}>Unavailable</Text>
            <Text style={[styles.textStyle, { color: colors.white }]}>
              53,500
            </Text>
          </View>
        </View>
        <View style={styles.thirdSection}>
          <View style={globalStyles.flexRow}>
            <View style={[styles.options]}>
              <View style={styles.iconContainer}>
              <MaterialIcons name="payment" size={24} color={colors.white} />
              </View>
              <Text>Fund Wallet</Text>
            </View>
            <View style={[styles.options]}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="send" size={24} color={colors.white} />
              </View>
              <Text>Transfer</Text>
            </View>
          </View>
          <View style={globalStyles.flexRow}>
            <View style={[styles.options]}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="dots-horizontal" size={24} color={colors.white} />
              </View>
              <Text>Message</Text>
            </View>
            <View style={[styles.options]}>
            <View style={styles.iconContainer}>
              <FontAwesome name="users" size={24} color={colors.white} />
              </View>
              <Text>Refer & Earn</Text>
            </View>
          </View>
          <View style={globalStyles.flexRow}>
            <View style={[styles.options]}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="library-books" size={24} color={colors.white} />
              </View>
              <Text>Orders</Text>
            </View>
            <View style={[styles.options]}>
            <View style={[styles.iconContainer,{backgroundColor:"transparent"}]}>
              <Ionicons name="md-grid" size={35} color={colors.lightgold} />
            </View>
              <Text>More</Text>
            </View>
          </View>
        </View>
        <View style={styles.fourthSection}>
          <Text style={[styles.textStyle,{fontWeight:"bold"}]}>Hot Topic :</Text>
          <CustomButton buttonLabel={"Refer & Win Promo"} onPress={handleNavigate2} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  firstSection: {
    marginVertical:15
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 50,
  },
  textStyle: {
    margin: 2,
    fontSize: 17,
  },
  secondSection: {
    backgroundColor: colors.primary,
    padding: 15,
    marginVertical: 20,
  },
  textCenter: {
    alignItems: "center",
  },
  iconContainer:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightgold,
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  options:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    width:"45%",
  },
  thirdSection:{
    height:189,
    justifyContent:"space-between",
    paddingHorizontal:10,
    marginVertical:20,
  },
  fourthSection:{
    paddingHorizontal:10,
    paddingVertical:5,
    marginVertical:20,
    gap:10,
  }
});
