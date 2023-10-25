import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../configs/customHeader";
import CustomButton from "../../configs/CustomButton";
import GlassmorphicInput from "../../configs/GlassmorphicInput";
import colors from "../../configs/colors";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function UploadProduct({ handleModal }) {
  const [uploadData, setUploadData] = useState({
    productName: "",
    productDescription: "",
    pricePerUnit: "",
    measuringScale: "",
    image1: "",
    image2: "",
    image3: "",
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
          setUploadData((prev) => {
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

  const handleImageDelete = (id) => {
    setUploadData((prev) => ({ ...prev, [id]: "" }));
  };

  const handleUpload = () => {
    console.log(uploadData);
  };

  return (
    <SafeAreaView>
      <CustomHeader title={"Upload Product"} handleNavigate={handleModal} />
      <View style={styles.container}>
        <GlassmorphicInput
          placeholder={"Product Name"}
          onChangeText={(text) => {
            setUploadData((prev) => {
              return {
                ...prev,
                productName: text,
              };
            });
          }}
          value={uploadData.productName}
        />
        <GlassmorphicInput
          placeholder={"Product Description"}
          onChangeText={(text) => {
            setUploadData((prev) => {
              return {
                ...prev,
                productDescription: text,
              };
            });
          }}
          value={uploadData.productDescription}
          isMultiline={true}
          customStyle={styles.descInputStyle}
        />
        <GlassmorphicInput
          placeholder={"Price Per Unit"}
          onChangeText={(text) => {
            setUploadData((prev) => {
              return {
                ...prev,
                pricePerUnit: text,
              };
            });
          }}
          value={uploadData.pricePerUnit}
        />
        <GlassmorphicInput
          placeholder={"Measuring Scale"}
          onChangeText={(text) => {
            setUploadData((prev) => {
              return {
                ...prev,
                measuringScale: text,
              };
            });
          }}
          value={uploadData.measuringScale}
        />
        <View style={styles.imageContainer}>
          <Text style={styles.imageText}>Add Images</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity
              style={styles.imageBox}
              onPress={() => pickImage("image1")}
            >
              <AntDesign name="pluscircleo" size={44} color={colors.white} />
              <Text style={styles.imageText2}>Add Image</Text>
              {uploadData.image1 && (
                <View style={styles.imageSubContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: uploadData.image1 }}
                  />
                  <Feather
                    name="x-circle"
                    size={24}
                    color={colors.white}
                    style={styles.imageDelete}
                    onPress={() => handleImageDelete("image1")}
                  />
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage("image2")}
              style={styles.imageBox}
            >
              <AntDesign name="pluscircleo" size={44} color={colors.white} />
              <Text style={styles.imageText2}>Add Image</Text>
              {uploadData.image2 && (
                <View style={styles.imageSubContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: uploadData.image2 }}
                  />
                  <Feather
                    name="x-circle"
                    size={24}
                    color={colors.white}
                    style={styles.imageDelete}
                    onPress={() => handleImageDelete("image2")}
                  />
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage("image3")}
              style={styles.imageBox}
            >
              <AntDesign name="pluscircleo" size={44} color={colors.white} />
              <Text style={styles.imageText2}>Add Image</Text>
              {uploadData.image3 && (
                <View style={styles.imageSubContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: uploadData.image3 }}
                  />
                  <Feather
                    name="x-circle"
                    size={24}
                    color={colors.white}
                    style={styles.imageDelete}
                    onPress={() => handleImageDelete("image3")}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <CustomButton
          buttonLabel={"Upload"}
          handleButtonPress={handleUpload}
          customStyle={styles.uploadButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  descInputStyle: {
    height: 248,
  },
  imageContainer: {},
  imageText: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 10,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
  },
  imageBox: {
    width: 113,
    height: 138,
    backgroundColor: colors.lightgray,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 2,
    position: "relative",
  },
  imageText2: {
    color: colors.white,
  },
  imageSubContainer: {
    position: "absolute",
    width: 113,
    height: 138,
    top: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageDelete: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  uploadButton: {
    marginVertical: 15,
  },
});
