import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal
} from "react-native";
import React,{useState} from "react";
import ProductCard from "./productCard";
import CustomHeader from "../../configs/customHeader";
import { storeProducts } from "../Home/data";
import colors from "../../configs/colors";
import { FontAwesome } from "@expo/vector-icons";
import UploadProduct from "./uploadProduct";

export default function Mystore({navigation}) {

  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((prev) =>!prev);
  };

  const handleNavigate = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView>
      <CustomHeader title={"My Store"} handleNavigate={handleNavigate} />
      <Modal visible={showModal}>
        <UploadProduct handleModal={handleModal} />
      </Modal>
      <View>
        <FlatList
          data={storeProducts}
          renderItem={({ item }) => (
            <ProductCard
              img={item.image}
              productName={item.productTitle}
              productPrice={item.price}
              brandName={item.store}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      <TouchableOpacity style={styles.absoluteButton} onPress={handleModal}>
        <FontAwesome name="edit" size={24} color={colors.white} />
        <Text style={styles.absoluteButtonText}>Upload Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  absoluteButton: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 40,
    right: 10,
    backgroundColor: colors.primary,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  absoluteButtonText: {
    color: colors.white,
  },
});
