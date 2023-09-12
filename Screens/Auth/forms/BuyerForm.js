import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GlassmorphicInput from "../../../configs/GlassmorphicInput";

export default BuyerForm = ({ handleBuyerFormChange, buyerFormData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Name"
          onChangeText={(text) => {
            handleBuyerFormChange("name", text);
          }}
          value={buyerFormData.name}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Username"
          onChangeText={(text) => {
            handleBuyerFormChange("username", text);
          }}
          value={buyerFormData.username}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Email Address"
          onChangeText={(text) => {
            handleBuyerFormChange("email", text?.toLowerCase());
          }}
          value={buyerFormData.email}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Phone Number"
          onChangeText={(text) => {
            handleBuyerFormChange("phoneNumber", text);
          }}
          value={buyerFormData.phoneNumber}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Password"
          isPassword={true}
          onChangeText={(text) => {
            handleBuyerFormChange("password", text);
          }}
          value={buyerFormData.password}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
