import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../../configs/colors";

const { width } = Dimensions.get("window");

const VirtualizedList = ({ children }) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={() => "key"}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
    />
  );
};

export default function ProfileScreen({ navigation }) {

  const handleLogout =async()=>{
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    try{
      const sendData= await fetch("https://farmyapp-smju.onrender.com/api/v1/user/logout", requestOptions)
      const dataRes = await sendData.json()
      dataRes && navigation.replace("LoginCategory")
      console.log(dataRes)
    }catch(error){
    console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList>
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

              <TouchableOpacity style={styles.blurArrowContainer}>
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

        <View style={styles.profileContentContainerBox}>
          <TouchableOpacity
            style={styles.profileContentBox}
            onPress={() => navigation.navigate("StoreDetail")}
          >
            <Image
              source={require("../../assets/images/Shop.png")}
              style={styles.profileContentPic}
            />

            <Text style={styles.profileContentText}>My Store</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileContentBox}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              source={require("../../assets/images/bell.png")}
              style={styles.profileContentPic}
            />

            <Text style={styles.profileContentText}>Notifications</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileContentContainerBox}>
          <TouchableOpacity
            style={styles.profileContentBox}
            onPress={() => navigation.navigate("Cart")}
          >
            <Image
              source={require("../../assets/images/cart.png")}
              style={styles.profileContentPic}
            />

            <Text style={styles.profileContentText}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileContentBox} 
          onPress={() => navigation.navigate("Order")}
          >
            <Image
              source={require("../../assets/images/order.png")}
              style={styles.profileContentPic}
            />
            <Text style={styles.profileContentText}>Orders</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileContentContainerBox}>
          <TouchableOpacity
            style={styles.profileContentBox}
            onPress={() => navigation.navigate("FarmerMarketDetails")}
          >
            <Image
              source={require("../../assets/images/market.png")}
              style={styles.profileContentPic}
            />

            <Text style={styles.profileContentText}>Farmer's Market</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileContentBox}>
            <Image
              source={require("../../assets/images/coin.png")}
              style={styles.profileContentPic}
            />

            <Text style={styles.profileContentText}>Referal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileContentContainerBox}>
          <TouchableOpacity
            style={styles.profileContentBox}
            onPress={() => navigation.navigate("Logistics")}
          >
            <Image
              source={require("../../assets/images/truck1.png")}
              style={styles.profileContentPic}
            />

            <Text style={styles.profileContentText}>Logistics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileContentBox} onPress={handleLogout}>
            <Image
              source={require("../../assets/images/door.png")}
              style={styles.profileContentPic}
            />

            <Text style={styles.profileContentText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </VirtualizedList>
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
    justifyContent: "center",
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
    marginTop: 23,
    marginBottom: 15,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  followInfoStatBox: {
    paddingHorizontal: 35,
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

  profileContentContainer: {
    // alignItems: "center",
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
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 15,
    elevation: 3,
  },

  profileContentPic: {
    width: 60,
    height: 60,
  },

  profileContentText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
});
