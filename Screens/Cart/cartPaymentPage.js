import { View, Text,StyleSheet,Image,ImageBackground} from 'react-native'
import React from 'react'
import colors from '../../configs/colors'
import card from "../../assets/images/card.png"
import logo from "../../assets/images/flogo.png"
import chip from "../../assets/images/chip.png"
import { globalStyles } from '../../styles/globalStyles'

export default function CartPaymentPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Select Payment Option</Text>
      <ImageBackground source={card} style={styles.cardContainer}>
       <View style={styles.logoContainer}>
        <Image source={logo} style={globalStyles.logo} alt='logo' />
        <View style={styles.logoTextContainer}>
            <Text style={styles.logoText}>02/26</Text>
        </View>
       </View>
       <View style={styles.chipContainer}>
       <View>
        <Text style={styles.chipText}>5674 4737 3664 XXXX</Text>
        <Text style={styles.chipText}>Popoola Covenant Ifeoluwa</Text>
       </View>
       <View>
        <Image source={chip} alt='chip'  />
       </View>
       </View>
      </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 15,
    },
    titleText: {
        color: colors.primary,
        marginLeft: 18,
        fontSize: 17,
      },
      cardContainer:{
        width:350,
        height:221,
        padding:25,
        justifyContent:"space-between"
      },
      logoContainer:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between"
      },
      logoTextContainer:{
         width:91,
         height:28,
         backgroundColor:"#76A78C",
         alignItems:"center",
         justifyContent:"center",
         borderRadius:10
      },
      logoText:{
        color:colors.white
      },
      chipContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      },
      chipText:{
        color:colors.white,
        marginVertical:4,
        fontSize:15
      }
})