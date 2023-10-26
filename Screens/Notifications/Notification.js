import { View, Text, StyleSheet, SafeAreaView, Modal, TouchableOpacity} from 'react-native'
import TopTabNavigator from '../../app/navigators/TopNavigator';
import CustomHeader from '../../configs/customHeader';

const Notification = ({navigation}) => {
  const handleNavigate = ()=>{
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader title={"Notifications"} handleNavigate={handleNavigate} />
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
    screenContainer:{
        flex: 1,
    }

})
export default Notification;