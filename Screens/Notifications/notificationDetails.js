import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CustomHeader from '../../configs/customHeader'

export default function NotificationDetails({handleToggleModal}) {
  return (
    <SafeAreaView>
    <CustomHeader title={"Notification Details"} handleNavigate={handleToggleModal} />
    <View>
      <Text>NotificationDetails</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})