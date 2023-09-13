import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../configs/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ProductDetail = ({ setOpenStoreProduct, navigation }) => {
  const [orderCount, setOrderCount] = useState(0);

  const IncrementButton = () => {
    setOrderCount(orderCount + 1);
  };

  const DecrementButton = () => {
    if (orderCount > 0) {
      setOrderCount(orderCount - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.storeHeader}>
          <TouchableOpacity onPress={() => setOpenStoreProduct(false)}>
            <AntDesign name="arrowleft" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.productImageContainer}>
          <Image
            source={require("../../assets/images/product.jpg")}
            style={styles.productImage}
          />
        </View>

        <View style={styles.productHeader}>
          <View style={styles.productInfo}>
            <Text style={styles.storeName}>McDonalds</Text>
            <Text style={styles.productName}>Special Burger</Text>
          </View>

          <TouchableOpacity style={styles.cartContainer}>
            <FontAwesome5
              name="shopping-cart"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.productRatingContainer}>
          <View style={styles.ratingBox}>
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <AntDesign name="star" size={14} color={colors.lightgold} />
            <Text style={styles.ratingText}>5.0</Text>
          </View>

          <View style={styles.timeDurationBox}>
            <MaterialCommunityIcons
              name="timer"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.timeText}>10Mins - 15Mins</Text>
          </View>

          <TouchableOpacity style={styles.timeDurationBox}>
            <Ionicons
              name="ios-chatbubble-ellipses-outline"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.reviewText}>Reviews</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productDescription}>
          <Text style={styles.productDescriptionText}>
            McDonald's is the world's largest restaurant chain by revenue,
            serving over 69 million customers daily in over 100 countries across
            37,855 outlets as of the year 2018.
          </Text>
        </View>

        <View style={styles.orderNumButton}>
          <View style={styles.orderButton}>
            <TouchableOpacity
              style={styles.decrementButton}
              onPress={DecrementButton}
            >
              <Text style={styles.orderNumText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.decrementButton}>
              <Text style={styles.orderNumText}>{orderCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.decrementButton}
              onPress={IncrementButton}
            >
              <Text style={styles.orderNumText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Add To Cart</Text>
          </TouchableOpacity>

          <View style={styles.priceContainer}>
            <Text style={styles.priceSymbol}> $</Text>
            <Text style={styles.price}> 3,500</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS == "android" ? 40 : null,
  },

  storeHeader: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  productImageContainer: {
    height: 350,
    alignItems: "center",
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  productHeader: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  storeName: {
    fontSize: 12,
    fontFamily: "RalewaySemiBold",
    color: colors.primary,
  },

  productName: {
    fontSize: 22,
    fontFamily: "RalewayBold",
    color: colors.primary,
  },

  productRatingContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ratingBox: {
    flexDirection: "row",
  },

  ratingText: {
    color: colors.primary,
    fontFamily: "RalewaySemiBold",
    marginLeft: 5,
    alignItems: "center",
    marginTop: -2,
  },

  timeDurationBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  timeText: {
    fontSize: 15,
    color: colors.primary,
    fontFamily: "RalewayMedium",
    marginLeft: 4,
  },

  reviewText: {
    color: colors.primary,
    fontFamily: "RalewayMedium",
    marginLeft: 4,
  },

  productDescription: {
    paddingHorizontal: 20,
  },

  productDescriptionText: {
    textAlign: "justify",
    fontFamily: "RalewayThin",
    fontSize: 16,
    lineHeight: 25,
  },

  orderNumButton: {
    paddingVertical: 20,
    alignItems: "center",
  },

  orderButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    borderRadius: 12,
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },

  decrementButton: {
    padding: 5,
  },

  orderNumText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 30,
    color: colors.white,
  },

  bottomContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cartButton: {
    width: "70%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 15,
  },

  cartButtonText: {
    color: colors.white,
    fontFamily: "RalewayBold",
    fontSize: 19,
  },

  priceContainer: {
    flexDirection: "row",
  },

  priceSymbol: {
    fontFamily: "RalewayBold",
    fontSize: 30,
    color: colors.primary,
  },

  price: {
    fontFamily: "RalewayBold",
    fontSize: 30,
    color: colors.primary,
    marginTop: -4,
    marginLeft: -6,
  },
});
export default ProductDetail;
