import { View,  StyleSheet, FlatList, ScrollView} from 'react-native'
import navigationTheme from '../../../app/navigators/navigationtheme'
            // COLORS
import colors from '../../../configs/colors'
import ListCard from '../ListCard'


const Notifications = [
    {
        id: 1,
        image:require("../../../assets/images/profilepic.jpg"),
        CompText: "Damilare Afolabi mentioned you in a comment"
    },

    
    {
        id: 2,
        image:require("../../../assets/images/[profilepic]1.jpg"),
        CompText: "Confirm your Email Address to complete your profile"
    },

    {
        id: 3,
        image:require("../../../assets/images/[profilepic]2.jpg"),
        CompText: "Damilare Afolabi mentioned you in a comment"
    },

    {
        id: 4,
        image:require("../../../assets/images/[profilepic]3.jpg"),
        CompText: "Check out this new products from FoodCo"
    },

    {
      id: 5,
      image:require("../../../assets/images/[profilepic]3.jpg"),
      CompText: "Check out this new products from FoodCo"
  },

  {
    id: 6,
    image:require("../../../assets/images/[profilepic]3.jpg"),
    CompText: "Check out this new products from FoodCo"
},

{
  id: 7,
  image:require("../../../assets/images/[profilepic]3.jpg"),
  CompText: "Check out this new products from FoodCo"
},

{
  id: 8,
  image:require("../../../assets/images/[profilepic]3.jpg"),
  CompText: "Check out this new products from FoodCo"
},
]

const VirtualizedList = ({children}) => {
  return (
      <FlatList
          data={[]}
          keyExtractor={() => "key"}
          renderItem={null}
          ListHeaderComponent={
              <>{children}</>
          }
      />
  )
}

const FarmersMarketNotification = ({navigation}) => {
  return (
    <VirtualizedList style={styles.container}>

        <FlatList 
            data={Notifications}
            keyExtractor={(Notification) => Notification.id.toString()}
            renderItem={({item}) => (
                <ListCard 
                    imageUrl={item.image}
                    compText={item.CompText}
                    onPress={()=> navigation.navigate("ProductDetails")}
                />
            )}
        />

        
    </VirtualizedList>
  )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 10,
      height: 100
    },

    notificationsContainer:{
        borderColor: colors.lightgray,
        borderBottomWidth: 0.5,
        paddingHorizontal: 34,
        paddingVertical: 10,
        justifyContent: "center",
        flexDirection: "row"
      },
  
      accountImageContainer:{
        height: 59,
        width: 59,
        borderRadius: 50
      },
  
      accountImage:{
        width: 59,
        height: 59,
        borderRadius: 50
  
      },
  
      notificationsTextContainer:{
        justifyContent: "center",
        paddingLeft: 10
      },
  
      notificationsText:{
          fontFamily: "RalewayMedium",
          color: colors.primary
      }
})
export default FarmersMarketNotification