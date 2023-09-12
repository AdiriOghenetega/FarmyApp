import React from 'react';
import {View, StyleSheet,Text, Image, TouchableOpacity, FlatList} from 'react-native';
import colors from '../../configs/colors';
import LogisticsCard from './LogisticsCard';

const logistics = [
  {
    id: 1,
    logo: require("../../assets/images/gigs.jpeg"),
    logisticsname: "Gigs Logistics",
    location: "Lagos",
    rating:"5.0"
  },

  {
    id: 2,
    logo: require("../../assets/images/fedex.png"),
    logisticsname: "FEDEX",
    location: "Lagos",
    rating:"5.0"
  },

  {
    id: 3,
    logo: require("../../assets/images/gigs.jpeg"),
    logisticsname: "DHL Logistics",
    location: "Lagos",
    rating:"5.0"
  },

  {
    id: 4,
    logo: require("../../assets/images/dhl.jpg"),
    logisticsname: "David Logistics",
    location: "Lagos",
    rating:"5.0"
  },

  {
    id: 5,
    logo: require("../../assets/images/fligth.jpeg"),
    logisticsname: "Finder Logistics",
    location: "Lagos",
    rating:"5.0"
  },

  {
    id: 6,
    logo: require("../../assets/images/sendbox.png"),
    logisticsname: "SendBox",
    location: "Lagos",
    rating:"5.0"
  },

  {
    id: 7,
    logo: require("../../assets/images/gigs.jpeg"),
    logisticsname: "Gigs Logistics",
    location: "Lagos",
    rating:"5.0"
  }
]

const Logistics =()=>{
return (
  <View style={styles.container}>
      <Text style={styles.headText}>Choose a Logistics</Text>
    <View style={styles.logisticsHeaderContainer}>
       <View style={styles.logisticsContainerText}>
          <Text style={styles.containerText}>Track Your Shipment</Text>
          <Text style={styles.containerTextDescription}>Type your tracking number and find your order</Text>
          <View style={styles.logisticsButtonContainer}>
              <TouchableOpacity style={styles.logisticsActionButton}>
                    <Text style={styles.logisticsActionButtonText}>Track</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logisticsActionButton}>
                    <Text style={styles.logisticsActionButtonText}>Shipments</Text>
              </TouchableOpacity>
          </View>
       </View>
       <View
          style={styles.logisticsImageContainer}
       >
          <Image
            source={require("../../assets/images/logisticsHeader.png")}
            style={styles.logisticsImage}
          />
       </View>
    </View>

        <FlatList
          data={logistics}
          keyExtractor={(logistic) => logistic.id.toString()}
          horizontal={false}
          renderItem={({item}) => 
            <LogisticsCard
               logo={item.logo}
               logisticsname={item.logisticsname}
               location={item.location}
               rating={item.rating}
            />    
          }
        />
  </View>
   );
 }


const styles = StyleSheet.create({
container:{
  flex: 1,
  paddingHorizontal: 15,
},

headText:{
    fontSize: 20,
    color: colors.primary,
    fontFamily: "RalewayBold",
    textAlign: "center",
    paddingVertical: 12,
},

logisticsHeaderContainer:{
  paddingVertical: 30,
  paddingLeft: 25,
  marginBottom: 15,
  flexDirection: "row",
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

logisticsContainerText:{
  width: "60%",
  paddingRight: 10
},

containerText:{
  fontSize: 18,
  fontFamily: "RalewayBold",
},

containerTextDescription:{
  paddingVertical: 10,
  fontSize: 13,
  fontFamily: "RalewayRegular",
  lineHeight: 20,
},

logisticsImageContainer:{
  width: "35%",

},

logisticsImage:{
  width: "100%",
  height: 100,
  borderWidth: 1,
},

logisticsButtonContainer:{
  flexDirection:"row",
  justifyContent:'space-between',
},

logisticsActionButton:{
  // borderWidth: 1,
  borderRadius: 8,
  backgroundColor: colors.primary,
  padding: 12,
  width: "48%",
  shadowColor: "#000000",
  shadowOffset: {
      width: -1.5,
      height: 0.5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 2,
  elevation: 5
},

logisticsActionButtonText:{
  color: colors.white,
  fontSize: 12,
  fontFamily: "RalewaySemiBold",
  textAlign: "center"

},
 })
export default Logistics;