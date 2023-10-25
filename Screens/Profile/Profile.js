import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../../configs/colors";

const { width, height } = Dimensions.get("window");

export default function ProfileScreen({ navigation }) {
  const handleLogout = async () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    try {
      const sendData = await fetch(
        "https://farmyapp-smju.onrender.com/api/v1/user/logout",
        requestOptions
      );
      const dataRes = await sendData.json();
      dataRes && navigation.replace("LoginCategory");
      console.log(dataRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/mcdo.jpg")}
        style={styles.coverPhoto}
      >
        <View style={styles.coverPhotoOverlay}>
          <View style={styles.navigationTop}>
            <View style={styles.blurArrowContainer}>
              <Ionicons
                name="ios-arrow-back"
                size={27}
                color={colors.white}
                onPress={() => navigation.goBack()}
              />
            </View>

            <TouchableOpacity
              style={styles.blurArrowContainer}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Ionicons name="settings" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.storeProfilePicContainer}>
        <View style={styles.storePicContainer}>
          <Image
            source={require("../../assets/images/mcd.jpg")}
            style={styles.storeProfilePic}
          />
        </View>
      </View>

      <View style={styles.storeNameContainer}>
        <View>
          <View style={styles.storeNameBox}>
            <Text style={styles.storeName}>McDonalds</Text>
            <MaterialIcons
              name="verified"
              size={20}
              color={colors.blue}
              style={styles.blueTick}
            />
          </View>

          <View style={styles.storeUserName}>
            <Text style={styles.storeUserName}>@mcdonaldsng</Text>
          </View>
        </View>
        <View style={styles.followStatContainer}>
          <View style={styles.followInfoStatBox}>
            <Text style={styles.followTextNumber}>2</Text>
            <Text style={styles.followerText}>Following</Text>
          </View>
          <View style={styles.followInfoStatBox}>
            <Text style={styles.followTextNumber}>1.4m</Text>
            <Text style={styles.followerText}>Followers</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView style={styles.scrollSize}>
          <View style={styles.profileContentContainerBox}>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Mystore")}
            >
              <MaterialIcons
                name="store"
                size={34}
                color={colors.otherprimary}
              />

              <Text style={styles.profileContentText}>My Store</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Notification")}
            >
              <Ionicons
                name="notifications"
                size={34}
                color={colors.otherprimary}
              />

              <Text style={styles.profileContentText}>Notifications</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileContentContainerBox}>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Cart")}
            >
              <MaterialIcons
                name="shopping-cart"
                size={34}
                color={colors.otherprimary}
              />

              <Text style={styles.profileContentText}>Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Order")}
            >
              <MaterialIcons
                name="library-books"
                size={34}
                color={colors.otherprimary}
              />
              <Text style={styles.profileContentText}>Orders</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileContentContainerBox}>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Wallet")}
            >
              <Ionicons name="wallet" size={34} color={colors.otherprimary} />

              <Text style={styles.profileContentText}>Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Security")}
            >
              <MaterialIcons
                name="security"
                size={34}
                color={colors.otherprimary}
              />

              <Text style={styles.profileContentText}>Security</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileContentContainerBox}>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Farmersmarket")}
            >
              <MaterialIcons
                name="storefront"
                size={34}
                color={colors.otherprimary}
              />
              <Text style={styles.profileContentText}>Farmer's Market</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Logistics")}
            >
              <FontAwesome name="truck" size={34} color={colors.otherprimary} />

              <Text style={styles.profileContentText}>Logistics</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileContentContainerBox}>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Refferal")}
            >
              <FontAwesome name="users" size={34} color={colors.otherprimary} />

              <Text style={styles.profileContentText}>Refer and Earn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Faq")}
            >
              <FontAwesome
                name="question"
                size={34}
                color={colors.otherprimary}
              />
              <Text style={styles.profileContentText}>FAQ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileContentContainerBox}>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("TermsOfService")}
            >
              <MaterialCommunityIcons
                name="checkbox-intermediate"
                size={34}
                color={colors.otherprimary}
              />

              <Text style={styles.profileContentText}>Terms of Service</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Privacy")}
            >
              <MaterialIcons
                name="privacy-tip"
                size={34}
                color={colors.otherprimary}
              />

              <Text style={styles.profileContentText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileContentContainerBox}>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <MaterialCommunityIcons
                name="tablet-dashboard"
                size={34}
                color={colors.otherprimary}
              />

              <Text style={styles.profileContentText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileContentBox}
              onPress={handleLogout}
            >
              <Ionicons name="log-out" size={34} color={colors.otherprimary} />

              <Text style={styles.profileContentText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  coverPhoto: {
    height: 140,
  },

  coverPhotoOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 140,
  },

  navigationTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 10,
  },

  blurArrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  storePicContainer: {
    width: 140,
    alignItems: "center",
    justifyContent: "center",
  },

  storeProfilePic: {
    width: 170,
    height: 170,
    borderWidth: 6,
    borderColor: "#fff",
    borderRadius: 100,
    marginTop: -80,
  },

  storeProfilePicContainer: {
    alignItems: "center",
  },

  storeNameContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
  },

  storeNameBox: {
    flexDirection: "row",
  },
  storeName: {
    fontFamily: "RalewayBold",
    fontSize: 24,
    color: colors.primary,
  },

  storeUserName: {
    fontFamily: "RalewayMedium",
    color: colors.gray,
    fontSize: 13,
    paddingHorizontal: 10,
  },

  blueTick: {
    marginTop: 4,
    marginLeft: 4,
  },

  followStatContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  followInfoStatBox: {
    paddingHorizontal: 4,
  },

  followTextNumber: {
    textAlign: "center",
    fontFamily: "RalewayMedium",
    fontSize: 18,
    color: colors.primary,
  },

  followerText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: colors.gray,
  },
  scrollSize: {
    paddingTop: 10,
    height: 350,
  },
  contentContainer: {
    marginTop: 20,
  },

  profileContentContainer: {
    justifyContent: "space-evenly",
  },

  profileContentContainerBox: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  profileContentBox: {
    width: "45%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
  },

  profileContentPic: {
    width: 40,
    height: 40,
  },

  profileContentText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
});
