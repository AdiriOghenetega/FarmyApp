import React, { useState } from "react";
import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";
import colors from "../../configs/colors";
import { TouchableOpacity } from "react-native";
import CategoryBox from "./categoryBox";

const Category = ({ navigation, route }) => {
  const { name } = route;

  const category = {
    LoginCategory: {
      option: "LoginOptions",
      alt: "RegisterCategory",
      altPrompt: "Do not have an account?",
      cta: " Register",
    },
    RegisterCategory: {
      option: "RegisterOptions",
      alt: "LoginCategory",
      altPrompt: "Already have an account?",
      cta: " Login",
    },
  };

  const [selectedAccount, setSelectedAccount] = useState(null);

  // SELECT ACCOUNT TYPE LOGIC
  const handleAccountPress = (accountId) => {
    setSelectedAccount(accountId);
    navigation.navigate(category[name].option,accountId);
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/flogo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.signUpText}>Select Account Type</Text>

      <View style={styles.categoryContainer}>
        <CategoryBox
          group={"buyerAccount"}
          handleAccountPress={handleAccountPress}
          img={require("../../assets/images/buyer.png")}
        />
        <CategoryBox
          group={"storeAccount"}
          handleAccountPress={handleAccountPress}
          img={require("../../assets/images/store2.png")}
        />
      </View>

      <View style={styles.categoryContainer}>
        <CategoryBox
          group={"logisticsAccount"}
          handleAccountPress={handleAccountPress}
          img={require("../../assets/images/truck.png")}
        />
        <CategoryBox
          group={"farmersAccount"}
          handleAccountPress={handleAccountPress}
          img={require("../../assets/images/farmer.png")}
        />
      </View>

      <View style={styles.otherCTA}>
        <Text style={styles.subCTA}>{category[name].altPrompt}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(category[name].alt)}
        >
          <Text style={styles.mainCTA}>{category[name].cta}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  logo: {
    width: 53,
    height: 75,
  },

  welcomeText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    fontFamily: "RalewayBold",
  },

  signUpText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 50,
    fontFamily: "RalewayBold",
    color: colors.primary,
  },

  categoryContainer: {
    flexDirection: "row",
    padding: 40,
    justifyContent: "space-between",
  },
  otherCTA: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  subCTA: {
    fontFamily: "RalewayMedium",
  },
  mainCTA: {
    fontFamily: "RalewayBold",
    color: colors.primary,
  },
});
export default Category;
