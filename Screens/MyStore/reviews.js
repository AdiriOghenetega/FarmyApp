import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Modal,
} from "react-native";
import React from "react";
import CustomHeader from "../../configs/customHeader";
import ReviewCard from "./reviewCard";
import { reviews } from "./data";

const { width, height } = Dimensions.get("window");

export default function Reviews({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomHeader title={"Reviews"} handleNavigate={handleNavigate} />
        <Text style={styles.titleText}>Recent reviews</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={reviews}
            keyExtractor={(item, i) => item.title + i.toString()}
            renderItem={({ item }) => {
              return <ReviewCard item={item} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  flatListContainer: {
    height: height - 200,
  },
});
