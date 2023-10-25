import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import CustomHeader from "../../configs/customHeader";

export default function ReviewDetails({ handleCloseModal }) {
  return (
    <SafeAreaView>
      <CustomHeader title={"ReviewDetails"} handleNavigate={handleCloseModal} />
      <View>
        <Text>ReviewDetails</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
