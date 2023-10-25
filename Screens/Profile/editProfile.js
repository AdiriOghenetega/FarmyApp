import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../configs/colors";
import mcd from "../../assets/images/mcd.jpg";
import GlassmorphicInput from "../../configs/GlassmorphicInput";
import CustomButton from "../../configs/CustomButton";
import CustomHeader from "../../configs/customHeader";
import * as ImagePicker from "expo-image-picker";

export default function EditProfile({ navigation }) {
  const [editData, setEditData] = useState({
    username: "",
    name: "",
    phoneNumber: "",
    email: "",
    image: "",
    coverImage: "",
  });

  const pickImage = async (id) => {
    try {
      // No permissions request is necessary for launching the image library

      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }

      if (status === "granted") {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });

        if (!result.canceled) {
          setEditData((prev) => {
            return {
              ...prev,
              [id]: result.assets[0].uri,
            };
          });
        }
      }
    } catch (error) {
      console.log(error, "unable to upload image");
      toast("Unable to upload image,try again");
    }
  };

  const handleUpdateProfile = () => {
    console.log("updated");
  };

  const handleNavigate = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView>
      <CustomHeader title={"Edit Profile"} handleNavigate={handleNavigate} />
      <ImageBackground
        source={{
          uri: editData.coverImage
            ? editData.coverImage
            : "https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D",
        }}
        style={styles.profilePicParent}
      >
        <View style={styles.profilePicContainer}>
          <Image
            source={editData.image ? { uri: editData.image } : mcd}
            alt="profilePic"
            style={styles.profilePic}
          />
          <TouchableOpacity
            style={styles.editPic}
            onPress={() => pickImage("image")}
          >
            <MaterialIcons name="edit" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.editPic2}
          onPress={() => pickImage("coverImage")}
        >
          <MaterialIcons name="edit" size={24} color={colors.white} />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.formContainer}>
        <View style={styles.textInputContainer}>
          <GlassmorphicInput
            placeholder="Username"
            onChangeText={(text) => {
              setEditData((prev) => {
                return {
                  ...prev,
                  username: text,
                };
              });
            }}
            value={editData.username}
          />
        </View>
        <View style={styles.textInputContainer}>
          <GlassmorphicInput
            placeholder="Name"
            onChangeText={(text) => {
              setEditData((prev) => {
                return {
                  ...prev,
                  name: text,
                };
              });
            }}
            value={editData.name}
          />
        </View>
        <View style={styles.textInputContainer}>
          <GlassmorphicInput
            placeholder="PhoneNumber"
            onChangeText={(text) => {
              setEditData((prev) => {
                return {
                  ...prev,
                  phoneNumber: text,
                };
              });
            }}
            value={editData.phoneNumber}
          />
        </View>
        <View style={styles.textInputContainer}>
          <GlassmorphicInput
            placeholder="Email"
            onChangeText={(text) => {
              setEditData((prev) => {
                return {
                  ...prev,
                  email: text,
                };
              });
            }}
            value={editData.email}
          />
        </View>
      </View>
      <CustomButton buttonLabel={"Update"} onPress={handleUpdateProfile} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profilePicContainer: {
    height: 84,
    width: 84,
    borderRadius: 50,
  },
  profilePicParent: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  profilePic: {
    height: 84,
    width: 84,
    borderRadius: 50,
  },
  editPic: {
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    bottom: 10,
    right: 10,
  },
  editPic2: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textInputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  formContainer: {
    height: 250,
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
