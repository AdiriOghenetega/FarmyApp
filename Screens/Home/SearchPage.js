import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import colors from "../../configs/colors";
import { AntDesign } from "@expo/vector-icons";
import StoreCard from "./StoreCard";
import CustomTabs from "../../configs/customTabs";
import { products,data } from "./data";

const SearchPage = ({ navigation }) => {
  

  const [selectedCategory, setSelectedCategory] = useState("");

  // SELECT Category TYPE LOGIC
  const handleCategoryPress = (CategoryId) => {
    setSelectedCategory(CategoryId);
  };

  
  console.log(selectedCategory)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/flogo.png")}
          style={styles.logo}
        />
      </View>

      <CustomTabs data={data} handleCategoryPress={handleCategoryPress} selectedCategory={selectedCategory} />

      <View style={styles.searchMainView}>
        <TextInput
          placeholder="Search for products, store or farms"
          style={styles.searchTextInput}
        />

        <TouchableOpacity style={styles.filterContainer}>
          <AntDesign name="filter" size={34} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        horizontal={false}
        renderItem={({ item }) => (
          <StoreCard
            imageUrl={item.image}
            storeName={item.storeName}
            storeDescription={item.storeDescription}
            distance={item.distance}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 53,
    height: 75,
  },

  searchMainView: {
    padding: 10,
    flexDirection: "row",
  },

  searchTextInput: {
    borderRadius: 10,
    width: "80%",
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: -1.5,
      height: 0.5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 2,
    elevation: 10,
  },

  filterContainer: {
    width: "20%",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: -1.5,
      height: 0.5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 2,
    elevation: 10,
  },
});
export default SearchPage;
