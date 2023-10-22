import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Onboard from './Onboard/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import navigationtheme from './app/navigators/navigationtheme';
import AppNavigator from './app/navigators/AppNavigator';
import { UserContextProvider } from './Context/UserContext';
import MyWebView from './app/navigators/webView';
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45."
]);

const App = () => {
  // STATE FOR ONBOARDING SCREEN
  const [showOnboard, setShowOnboard] = useState(true);
  
  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

 // FONTS
 const [fontsLoaded] = useFonts({
    RalewayThin: require("./assets/fonts/RalewayThin.ttf"),
    RalewayLight: require("./assets/fonts/Raleway-Light.ttf"),
    RalewayExtraLight: require("./assets/fonts/Raleway-ExtraLight.ttf"),
    RalewayMedium: require("./assets/fonts/Raleway-Medium.ttf"),
    RalewayMediumItalic: require("./assets/fonts/Raleway-MediumItalic.ttf"),
    RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
    RalewaySemiBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
    RalewaySemiBoldItalic: require("./assets/fonts/Raleway-SemiBoldItalic.ttf"),
    RalewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
    RalewayBoldItalic: require("./assets/fonts/Raleway-BoldItalic.ttf"),
    RalewayExtraBold: require("./assets/fonts/Raleway-ExtraBold.ttf"),
    RalewayHeavy: require("./assets/fonts/Raleway-Heavy.ttf"),
  });

  if (!fontsLoaded) {
      return null;
  }

  return (
    <UserContextProvider>
    <View style={styles.container}>
      <NavigationContainer theme={navigationtheme}>
        {showOnboard ? (
          <Onboard handleDone={handleOnboardFinish} />
        ) : (
          <MyWebView />
        )}
      </NavigationContainer>
    </View>
    </UserContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
