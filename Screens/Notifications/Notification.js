import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native'
          // ICONS 
import { Ionicons } from '@expo/vector-icons';
        // CONFIG 
import colors from '../../configs/colors';
        // TOP TAB NAVIGATION
import TopTabNavigator from '../../app/navigators/TopNavigator';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
              <View style={styles.arrowIcon}>
                  <Ionicons 
                    name="ios-arrow-back" 
                    size={23} 
                    color={colors.primary}
                    onPress={() => navigation.goBack()} 
                  />
              </View>

              <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>Notifications</Text>
              </View>

        </View>

        <View style={styles.screenContainer}>
            <TopTabNavigator/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },

    headerContainer:{
      paddingHorizontal: 15,
      paddingVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      borderColor: colors.lightgray,
      borderBottomWidth: 0.5,
    },

    arrowIcon:{
      width: "35%"
    },

    headerTitle:{
      width: "75%"
    },

    headerTitleText:{
      fontFamily:"RalewayBold",
      fontSize: 16,
      color: colors.primary
    },

    screenContainer:{
        flex: 1,
    }

})
export default Notification;