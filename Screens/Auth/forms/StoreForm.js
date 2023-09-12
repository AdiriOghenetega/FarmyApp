import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GlassmorphicInput from "../../../configs/GlassmorphicInput";

export default StoreForm = ({ handleStoreFormChange, storeFormData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Store Name"
          onChangeText={(text) => {
            handleStoreFormChange("storeName", text);
          }}
          value={storeFormData.storeName}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Store Address"
          onChangeText={(text) => {
            handleStoreFormChange("storeAddress", text);
          }}
          value={storeFormData.storeAddress}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="City"
          onChangeText={(text) => {
            handleStoreFormChange("city", text);
          }}
          value={storeFormData.city}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Email"
          onChangeText={(text) => {
            handleStoreFormChange("email", text?.toLowerCase());
          }}
          value={storeFormData.email}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Username"
          onChangeText={(text) => {
            handleStoreFormChange("username", text);
          }}
          value={storeFormData.username}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Phone Number"
          onChangeText={(text) => {
            handleStoreFormChange("phoneNumber", text);
          }}
          value={storeFormData.phoneNumber}
        />
      </View>
      <View style={styles.textInputContainer}>
        <GlassmorphicInput
          placeholder="Password"
          isPassword={true}
          onChangeText={(text) => {
            handleStoreFormChange("password", text);
          }}
          value={storeFormData.password}
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
