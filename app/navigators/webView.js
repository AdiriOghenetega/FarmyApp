import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function MyWebView() {
  return (
    <SafeAreaView style={styles.container}>
        <WebView
        source={{ uri: 'https://farmyapptest.onrender.com' }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});