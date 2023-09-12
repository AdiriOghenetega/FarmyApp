import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GlassmorphicInput from "../../../configs/GlassmorphicInput";

export default FarmForm = ({ handleFarmFormChange, farmFormData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Farm Name"
          onChangeText={(text) => {
            handleFarmFormChange("farmName", text);
          }}
          value={farmFormData.farmName}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Farm Address"
          onChangeText={(text) => {
            handleFarmFormChange("farmAddress", text);
          }}
          value={farmFormData.farmAddress}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="City"
          onChangeText={(text) => {
            handleFarmFormChange("city", text);
          }}
          value={farmFormData.city}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Email"
          onChangeText={(text) => {
            handleFarmFormChange("email", text?.toLowerCase());
          }}
          value={farmFormData.email}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Username"
          onChangeText={(text) => {
            handleFarmFormChange("username", text);
          }}
          value={farmFormData.username}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Phone Number"
          onChangeText={(text) => {
            handleFarmFormChange("phoneNumber", text);
          }}
          value={farmFormData.phoneNumber}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Password"
          isPassword={true}
          onChangeText={(text) => {
            handleFarmFormChange("password", text);
          }}
          value={farmFormData.password}
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
