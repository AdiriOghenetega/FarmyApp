import { View , Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
        // CONFIG
import colors from '../../configs/colors'

const ListCard = ({imageUrl, compText, onPress }) => {
  return (
        <View>
            <TouchableOpacity style={styles.notificationsContainer}
                onPress={onPress}
            >
            <View style={styles.accountImageContainer}>
            <Image 
                source={imageUrl}
                style={styles.accountImage}
            />
            </View>

            <View style={styles.notificationsTextContainer}>
                <Text 
                style={styles.notificationsText}
                numberOfLines ={1}
                >
                    {compText}
                </Text>
            </View>
        </TouchableOpacity>
    </View>
    )
    }

const styles = StyleSheet.create({
container: {
},

notificationsContainer:{
  borderColor: colors.lightgray,
  width: "100%",
  borderBottomWidth: 0.5,
  paddingHorizontal: 34,
  paddingVertical: 10,
  justifyContent: "center",
  flexDirection: "row"
},

accountImageContainer:{
  height: 59,
  width: "24%",
  paddingLeft: 10,
  borderRadius: 50,
  alignItems: "flex-start"
},

accountImage:{
  width: 59,
  height: 59,
  borderRadius: 50

},

notificationsTextContainer:{
  justifyContent: "center",
  paddingHorizontal: 10,
  width: "90%",
},

notificationsText:{
    fontFamily: "RalewayMedium",
    color: colors.primary
}
})

export default ListCard