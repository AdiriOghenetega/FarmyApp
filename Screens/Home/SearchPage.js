import { useState, useEffect } from "react";
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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import colors from "../../configs/colors";
import { AntDesign } from "@expo/vector-icons";
import StoreCard from "./StoreCard";
import StoreProductCard from "./StoreProductCard";
import CustomTabs from "../../configs/customTabs";
import { products, data, storeProducts } from "./data";

const SearchPage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("store");
  const [searchInput, setSearchInput] = useState("");
  const [selectedList, setSelectedList] = useState(products);
  const [filterdedData, setFilteredData] = useState(selectedList);

  // SELECT Category TYPE LOGIC
  const handleCategoryPress = (CategoryId) => {
    setSelectedCategory(CategoryId);
  };

  useEffect(() => {
    let filter = selectedList.filter(
      (elem) =>
        elem.storeName?.toLowerCase().includes(searchInput?.toLowerCase()) ||
        elem.productTitle?.toLowerCase().includes(searchInput?.toLowerCase())
    );

    setFilteredData(filter);
  }, [searchInput, selectedList]);

  useEffect(() => {
    setSelectedList(
      selectedCategory === "farm" || selectedCategory === "store"
        ? products
        : storeProducts
    );
    setSearchInput("");
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/flogo.png")}
            style={styles.logo}
          />
        </View>
      </TouchableWithoutFeedback>

      <CustomTabs
        data={data}
        handleCategoryPress={handleCategoryPress}
        selectedCategory={selectedCategory}
      />

      <View style={styles.searchMainView}>
        <TextInput
          placeholder="Search for products, store or farms"
          style={styles.searchTextInput}
          onChangeText={(text) => {
            setSearchInput(text);
          }}
          value={searchInput}
        />

        {/* <TouchableOpacity style={styles.filterContainer}>
          <AntDesign name="filter" size={24} color={colors.primary} />
        </TouchableOpacity> */}
      </View>
      <FlatList
        data={filterdedData}
        keyExtractor={(product) => product.id.toString() + selectedCategory}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) =>
          selectedCategory === "farm" || selectedCategory === "store" ? (
            <StoreCard
              imageUrl={item.image}
              storeName={item.storeName}
              storeDescription={item.storeDescription}
              distance={item.distance}
            />
          ) : (
            <StoreProductCard
              image={item.image}
              store={item.store}
              productTitle={item.productTitle}
              price={item.price}
            />
          )
        }
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
    alignItems: "center",
  },

  searchTextInput: {
    borderRadius: 10,
    width: "90%",
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
