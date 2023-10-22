import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";

export default function ReferralTerms() {
  return (
    <View style={styles.container}>
      <View style={[globalStyles.flexRow, styles.sections]}>
        <MaterialCommunityIcons
          name="transit-connection-variant"
          size={38}
          color="black"
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Share your referral Code</Text>
          <Text style={styles.text2}>
            Your friends gets access to all stores Farms and logistics companies
            on our Platform.
          </Text>
        </View>
      </View>
      <View style={[globalStyles.flexRow, styles.sections]}>
        <FontAwesome5 name="coins" size={38} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Earn points reward</Text>
          <Text style={styles.text2}>
            You get 30% of the profit we make from every transactions your
            friends have on FarmyApp for a duration of time.
          </Text>
        </View>
      </View>
      <View style={[globalStyles.flexRow, styles.sections]}>
        <AntDesign name="shake" size={38} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Get points in your account</Text>
          <Text style={styles.text2}>
            You can withdraw the cash rewards to your bank account once the
            person is done with his or her transaction or transact with it on
            FarmyApp
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  text1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 13,
    marginTop: 5,
  },
  sections: {
    margin: 10,
  },
});
