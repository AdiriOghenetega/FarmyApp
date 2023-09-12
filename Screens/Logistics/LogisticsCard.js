import {View, StyleSheet,Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../configs/colors';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const LogisticsCard =({logo, logisticsname, location, rating})=>{
    return(
        <TouchableOpacity style={styles.logisticsBox}>
        <View style={styles.logisticsPicContainer}>
          <Image
            source={logo}
            style={styles.logisticsPic}
          />
        </View>

        <View style={styles.logisticsChildBox}>
          <View style={styles.logisticsNameContainer}>
                <Text style={styles.logisticsNameText}>{logisticsname}</Text>
                <Text style={styles.logisticsLocation}>{location}</Text>
                <View style={styles.storeStars}>
                  <AntDesign name="star" size={12} color={colors.lightgold}/>
                  <AntDesign name="star" size={12} color={colors.lightgold}/>
                  <AntDesign name="star" size={12} color={colors.lightgold}/>
                  <AntDesign name="star" size={12} color={colors.lightgold}/>
                  <AntDesign name="star" size={12} color={colors.lightgold}/>
                  <Text style={styles.ratingText}>{rating}</Text>
                </View>
            </View>

            <View style={styles.logisticsNav}>
                <MaterialIcons
                  name='arrow-forward-ios'
                  size={18}
                  color={colors.primary}
                />
            </View>
        </View>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({


logisticsBox:{
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
        width: -1.5,
        height: 0.5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 2,
    elevation: 5
  },
  
  
  logisticsPicContainer:{
    alignItems: "center",
    justifyContent: "center",
    width: "15%", 
    padding: 5,
    height: 50,
    borderRadius: 50
  },
  
  logisticsPic:{
    borderWidth:3,
    borderColor: colors.primary,
    width: "100%",
    height: 45,
    borderRadius: 50
  },
  
  logisticsNameContainer:{
    paddingHorizontal: 10
  },
  
  logisticsNameText:{
    fontSize: 18,
    color: colors.gray,
    fontFamily:"RalewaySemiBold"
  },
  
  logisticsLocation:{
    fontSize: 15,
    color: colors.primary,
    fontFamily:"RalewaySemiBold"
  },
  
  logisticsChildBox:{
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },
  
  storeStars:{
    flexDirection: "row",
    alignItems: "center",
  },
  
  ratingText:{
    fontSize: 14,
    fontFamily:"RalewaySemiBold",
    color: colors.primary,
    marginLeft: 4
  }
})

export default LogisticsCard;