import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GlassmorphicInput from "../../../configs/GlassmorphicInput";

export default LogisticsForm = ({
  handleLogisticsFormChange,
  logisticsFormData,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Company Name"
          onChangeText={(text) => {
            handleLogisticsFormChange("companyName", text);
          }}
          value={logisticsFormData.companyName}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Company Address"
          onChangeText={(text) => {
            handleLogisticsFormChange("companyAddress", text);
          }}
          value={logisticsFormData.companyAddress}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Email"
          onChangeText={(text) => {
            handleLogisticsFormChange("email", text?.toLowerCase());
          }}
          value={logisticsFormData.email}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Phone Number"
          onChangeText={(text) => {
            handleLogisticsFormChange("phoneNumber", text);
          }}
          value={logisticsFormData.phoneNumber}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Password"
          isPassword={true}
          onChangeText={(text) => {
            handleLogisticsFormChange("password", text);
          }}
          value={logisticsFormData.password}
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
