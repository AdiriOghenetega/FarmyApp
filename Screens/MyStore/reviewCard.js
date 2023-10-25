import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomStars from "../../configs/customStars";
import { globalStyles } from "../../styles/globalStyles";
import colors from "../../configs/colors";
import ReviewDetails from "./reviewDetails";

const { width, height } = Dimensions.get("window");

export default function ReviewCard({ item: { img, title, desc } }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleToogleModal = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <TouchableOpacity
      style={[styles.container, globalStyles.flexRow]}
      onPress={handleToogleModal}
    >
      <Modal visible={modalOpen} animationType="slide">
        <View>
          <ReviewDetails handleCloseModal={handleToogleModal} />
        </View>
      </Modal>
      <Image source={{ uri: img }} alt="product" style={styles.productAvatar} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={1} lineBreakMode="tail" style={styles.desc}>
          {desc}
        </Text>
      </View>
      <CustomStars />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 10,
    padding: 10,
  },
  productAvatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  productInfo: {
    width: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    color: colors.gray,
  },
});
