import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import colors from './colors'

export default function CustomTabs({data,handleCategoryPress,selectedCategory}) {
   
  return (
    <View style={styles.categorySelector}>
    <View style={styles.categoryContainer}>
      <View style={styles.categoryMain}>
        {data?.map((elem,index)=>{
            return  <TouchableOpacity
            key={index}
            style={[
              styles.categoryBox,
              selectedCategory == elem.categoryName
                ? styles.selectedCategory
                : null,
            ]}
            onPress={() => handleCategoryPress(elem.categoryName)}
          >
            <Image
              source={elem.img}
              style={styles.categoryImage}
            />
            <Text
              style={[
                styles.categoryText,
                selectedCategory == elem.categoryName
                  ? styles.selectedCategoryText
                  : null,
              ]}
            >
              {elem.name}
            </Text>
          </TouchableOpacity>
        })}
       
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    categoryContainer: {
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between",
      },
    
      categoryMain: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },categoryImage: {
        width: 35,
        height: 25,
      },
    
      categoryText: {
        textAlign: "center",
        color: colors.gray,
        fontFamily: "RalewayBold",
        fontSize: 10,
      },
    
      selectedCategory: {
        color: colors.primary,
        borderColor: colors.primary,
        borderWidth: 2,
      },
      selectedCategoryText: {
        color: colors.primary,
      },
      categoryBox: {
        borderColor: colors.gray,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        width: "23%",
        height: 100,
        padding: 10,
        borderRadius: 15,
      },
})