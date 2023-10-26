import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../configs/colors";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import NotificationDetails from "./notificationDetails";

const ListCard = ({ title, compText, type }) => {
  const [openModal, setOpenModal] = useState(false);

  const icons = {
    rating: <AntDesign name="star" size={24} color={colors.lightgold} />,
    orderNotification: (
      <AntDesign name="bells" size={24} color={colors.otherprimary} />
    ),
    orderCanceled: (
      <AntDesign name="closecircle" size={24} color={colors.red} />
    ),
    chat: <AntDesign name="message1" size={24} color={colors.lightgold} />,
    logistics: (
      <FontAwesome5
        name="truck-loading"
        size={24}
        color={colors.otherprimary}
      />
    ),
  };

  const handleToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <View>
      <Modal visible={openModal}>
        <NotificationDetails handleToggleModal={handleToggleModal} />
      </Modal>
      <TouchableOpacity
        style={styles.notificationsContainer}
        onPress={handleToggleModal}
      >
        <View style={styles.accountImageContainer}>{icons[type]}</View>

        <View style={styles.notificationsTextContainer}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationsText} numberOfLines={1}>
            {compText}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  notificationsContainer: {
    borderColor: colors.lightgray,
    width: "90%",
    height: 103,
    borderWidth: 0.5,
    paddingHorizontal: 34,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 5,
  },
  accountImageContainer: {
    width: "24%",
    paddingLeft: 10,
    borderRadius: 50,
    alignItems: "flex-start",
  },
  accountImage: {
    width: 59,
    height: 59,
    borderRadius: 50,
  },
  notificationsTextContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "90%",
  },
  notificationTitle: {},
  notificationsText: {
    fontFamily: "RalewayMedium",
    color: colors.primary,
    marginVertical: 5,
  },
});

export default ListCard;
