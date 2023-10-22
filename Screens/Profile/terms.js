import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomHeader from '../../configs/customHeader'

export default function TermsOfService({navigation}) {
  const handleNavigate = () => {
    navigation.navigate("Profile");
  };
  return (
    <SafeAreaView>
      <CustomHeader title={"Terms & Conditions"} handleNavigate={handleNavigate} />
    </SafeAreaView>
  )
}