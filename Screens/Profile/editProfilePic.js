import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../../configs/customHeader';

export default function EditProfilePic({handleEditModal}) {
  return (
    <SafeAreaView>
        <CustomHeader handleNavigate={handleEditModal} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    titleHeader:{
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    }
})