import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../configs/customHeader";
import colors from "../../configs/colors";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";
import Qr from "../../assets/images/qr.png";
import Chart from "../Profile/chart";
import OrderCard from "../Order/orderCard";
import OrderDetails from "../Order/orderDetails";
import { cartItems } from "../Cart/data";

export default function Dashboard({ navigation }) {
  const [activeFilter, setActiveFilter] = useState("All Orders");
  const [openDetails, setOpenDetails] = useState(false);

  const handleDetailsClose = () => {
    setOpenDetails((prev) => !prev);
  };

  const handleShowReviews = () => {
    console.log("called");
    navigation.navigate("Reviews");
  };

  const rightHeader = {
    exists: true,
    component: (
      <TouchableOpacity
        style={globalStyles.rightHeader}
        onPress={handleShowReviews}
      >
        <Text>Reviews</Text>
      </TouchableOpacity>
    ),
  };

  const orderListFilters = [
    "All Orders",
    "Completed",
    "Continuing",
    "Restitute",
    "Canceled",
  ];
  const handleOrderListFilter = (item) => {
    setActiveFilter(item);
  };
  const handleNavigate = () => {
    navigation.navigate("Profile");
  };
  return (
    <SafeAreaView>
      <CustomHeader
        title={"My Dashboard"}
        handleNavigate={handleNavigate}
        rightHeader={rightHeader}
      />
      <Modal visible={openDetails}>
        <OrderDetails handleDetailsClose={handleDetailsClose} />
      </Modal>
      <View style={styles.container}>
        <View style={[globalStyles.flexRow, styles.section1]}>
          <View style={styles.section1_Box}>
            <View style={[globalStyles.flexRow, styles.walletIconContainer]}>
              <FontAwesome5 name="wallet" size={24} color="black" />
              <Text style={styles.iconText}>Wallet Balance</Text>
            </View>
            <Text style={styles.amountText}>N30,000</Text>
          </View>
          <View style={styles.section1_Box}>
            <View style={[styles.walletIconContainer]}>
              <FontAwesome5 name="coins" size={24} color="black" />
              <Text style={styles.iconText}>Total sales</Text>
            </View>
            <Text style={styles.amountText}>N30,000</Text>
          </View>
          <View style={styles.section1_Box}>
            <View style={[globalStyles.flexRow, styles.walletIconContainer]}>
              <FontAwesome5 name="truck" size={24} color="black" />
              <Text style={styles.iconText}>Order count</Text>
            </View>
            <Text style={styles.amountText}>300</Text>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={[globalStyles.flexRow, styles.copyContainer]}>
            <Text>Farm URL</Text>
            <View style={styles.copySubContainer}>
              <Ionicons name="copy-outline" size={20} color="black" />
              <Text>copy</Text>
            </View>
          </View>
          <Text>http://www.farmyapp.com/f/obaanjofarm</Text>
          <View>
            <Image source={Qr} style={{ width: 96, height: 94 }} />
          </View>
        </View>
        <View style={styles.section3}>
          <Chart title={"Income statistics"} customHeight={100} />
        </View>
        <View style={styles.section4}>
          <Text style={styles.section4_title}>Recent orders</Text>
          <View style={styles.section4_FlatList1}>
            <FlatList
              data={orderListFilters}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.flatList1_item}
                    onPress={() => handleOrderListFilter(item)}
                  >
                    <Text
                      style={
                        activeFilter?.toLowerCase() === item?.toLowerCase()
                          ? styles.flatList1_item_Text_active
                          : styles.flatList1_item_Text
                      }
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              horizontal
            />
          </View>
          <View style={styles.section4_FlatList2}>
            <FlatList
              data={cartItems}
              style={styles.flatList}
              keyExtractor={(item) => item.id.toString()}
              horizontal={false}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={handleDetailsClose}>
                  <OrderCard delivered={true} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  section1: {
    gap: 5,
    alignSelf: "center",
    width: "95%",
    marginVertical: 15,
  },
  section1_Box: {
    backgroundColor: colors.lightgray,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 15,
    alignItems: "flex-end",
    gap: 15,
    width: 115,
    height: 85,
  },
  walletIconContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 2,
    width: "100%",
  },
  iconText: {
    fontWeight: "bold",
    fontSize: 10,
  },
  amountText: {
    fontWeight: "bold",
  },
  section2: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 194.82,
    width: "95%",
    alignSelf: "center",
    backgroundColor: colors.lightgray,
    borderRadius: 5,
    paddingVertical: 15,
  },
  copyContainer: {
    width: "70%",
  },
  copySubContainer: {
    alignItems: "center",
  },
  section3: {
    width: "95%",
    alignSelf: "center",
  },
  section4: {
    width: "95%",
    alignSelf: "center",
  },
  section4_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section4_FlatList1: {},
  section4_FlatList2: {
    height: 112,
  },
  flatList1_item: {
    margin: 5,
  },
  flatList1_item_Text: {
    color: colors.gray,
  },
  flatList1_item_Text_active: {
    color: colors.black,
    fontWeight: "bold",
  },
});
