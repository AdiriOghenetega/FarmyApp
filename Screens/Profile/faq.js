import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import CustomHeader from "../../configs/customHeader";
import colors from "../../configs/colors";
import CustomAccordion from "../../configs/customAccordion";
import { faqData } from "./faqdata";

export default function Faq({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomHeader title={"FAQs"} handleNavigate={handleNavigate} />
        <View>
          <Text style={styles.subTitleText}>Frequently Asked Questions</Text>
        </View>
        <View>
          <FlatList
            data={faqData}
            renderItem={({ item }) => (
              <CustomAccordion title={item.title} message={item.message} />
            )}
            keyExtractor={(item) => item.title}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.lightgray,
    paddingTop: 10,
  },
  subTitleText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
});
