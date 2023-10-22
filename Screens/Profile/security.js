import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../configs/customHeader";
import GlassmorphicInput from "../../configs/GlassmorphicInput";
import CustomButton from "../../configs/CustomButton";
import CustomRadioButton from "../../configs/customRadioButton";

export default function Security({ navigation }) {
  const [securityData, setSecurityData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Allow FingerPrint Login"];

  const handleSelectedOption = (selected) => {
    setSelectedOption(selected);
  };

  const handleNavigate = () => {
    navigation.navigate("Profile");
  };

  const handlePasswordChange = () => {
    console.log("password updated");
  };
  return (
    <SafeAreaView>
      <CustomHeader title={"Change Password"} handleNavigate={handleNavigate} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <GlassmorphicInput
              placeholder="Old Password"
              isPassword={true}
              onChangeText={(text) => {
                setSecurityData((prev) => {
                  return {
                    ...prev,
                    oldPassword: text,
                  };
                });
              }}
              value={securityData.oldPassword}
            />
          </View>
          <View style={styles.textInputContainer}>
            <GlassmorphicInput
              placeholder="New Password"
              isPassword={true}
              onChangeText={(text) => {
                setSecurityData((prev) => {
                  return {
                    ...prev,
                    newPassword: text,
                  };
                });
              }}
              value={securityData.newPassword}
            />
          </View>
          <View style={styles.textInputContainer}>
            <GlassmorphicInput
              placeholder="Confirm Password"
              isPassword={true}
              onChangeText={(text) => {
                setSecurityData((prev) => {
                  return {
                    ...prev,
                    confirmPassword: text,
                  };
                });
              }}
              value={securityData.confirmPassword}
            />
          </View>
        </View>
        <View>
          <CustomRadioButton
            options={options}
            selectedOption={selectedOption}
            handleOptionSelect={handleSelectedOption}
            customContainerStyle={styles.customRadio}
          />
        </View>
        <CustomButton buttonLabel={"Update"} onPress={handlePasswordChange} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  customRadio: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
    height: 300,
    justifyContent: "space-between",
  },
});
