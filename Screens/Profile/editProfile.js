import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../configs/colors";
import mcd from "../../assets/images/mcd.jpg";
import EditProfilePic from "./editProfilePic";
import GlassmorphicInput from "../../configs/GlassmorphicInput";
import CustomButton from "../../configs/CustomButton";
import CustomHeader from "../../configs/customHeader";

export default function EditProfile({ navigation }) {
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState({
    username: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleEditModal = () => {
    setEditModal((prev) => !prev);
  };

  const handleUpdateProfile=()=>{
    console.log("updated")
  }

  const handleNavigate = ()=>{
    navigation.navigate("Profile")
  }

  return (
    <SafeAreaView>
      <Modal visible={editModal}>
        <EditProfilePic handleEditModal={handleEditModal} />
      </Modal>
      <CustomHeader title={"Edit Profile"} handleNavigate={handleNavigate}  />
      <View style={styles.profilePicParent}>
        <View style={styles.profilePicContainer}>
          <Image source={mcd} alt="profilePic" style={styles.profilePic} />
        </View>
        <TouchableOpacity style={styles.editPic} onPress={handleEditModal}>
          <MaterialIcons name="edit" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
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
    height: 42,
    width: 80,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textInputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  formContainer:{
    height:250,
    justifyContent:"space-between",
    marginVertical:10
  }
});
