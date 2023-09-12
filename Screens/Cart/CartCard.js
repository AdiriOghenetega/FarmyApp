import { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native'
import colors from '../../configs/colors';
import { Ionicons } from '@expo/vector-icons';

const CartCard = ({storeName, price, productName, imageUrl}) =>{

const [quantityText, setQuanityText] = useState(1)

const DecrementButton = () => {
    if (quantityText > 1){
        
        setQuanityText(quantityText - 1)
    }
}

const IncrementButton = () => {

    setQuanityText(quantityText + 1)
}

    return(
        <View style={styles.main}>
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.productImage}
                    source={imageUrl}
                />
            </View>

            <View style={styles.productDetails}>
                <View style={styles.productDetailsBox}>
                    <View>
                        <Text style={styles.storeName}>{storeName}</Text>
                        <Text style={styles.productName}>{productName}</Text>
                    </View>
                    <Text style={styles.price}>₦{price}</Text>
                </View>

                <View style={styles.productActionBox}>
                    <View style={styles.incrementContainer}>
                        <TouchableOpacity style={styles.incrementButton}
                            onPress={DecrementButton}
                        >
                            <Text style={styles.incrementTextTwo}>-</Text>
                        </TouchableOpacity>

                        
                            <Text style={styles.quantityText}>{quantityText}</Text>

                        <TouchableOpacity style={styles.incrementButton}
                            onPress={IncrementButton}
                        >
                            <Text style={styles.incrementText}>+</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{alignItems: "flex-end"}}>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Ionicons
                                name="trash" size={16}
                                color={colors.white}
                            />
                    </TouchableOpacity> 
                    </View>
                </View>
            </View>
          
        </View>
    </View>
    )
}

const styles= StyleSheet.create({
    main:{
        paddingVertical:12,
        alignItems: "center",
        justifyContent: 'center',
      },

      mainContainer:{
        borderRadius: 15,
        width: "90%",
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
        elevation: 3
      },

      productDetails:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "71%"
      },


     productDetailsBox:{
        flexDirection: "row",
        justifyContent: "space-between",
     },
      
      productImage:{
        width: 100,
        height: 100,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
      },

      storeName:{
        fontSize: 12,
        fontFamily: "RalewayMedium",
        color: colors.primary,
      },

      productName:{
        fontSize: 18,
        fontFamily: "RalewayBold",
        
      },

     price: {
        fontSize: 18,
        fontFamily: "RalewayBold"
     },

     productActionBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        alignItems: "center",

     },

     incrementContainer:{
        flexDirection: "row"
     },

     incrementButton:{
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
     },

     incrementText:{
        fontSize: 22,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.white,
     },

     incrementTextTwo:{
        fontSize: 22,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.white,
     },

     quantityText:{
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 5,
        fontFamily: "RalewaySemiBold"
     },

     deleteButton:{
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor:colors.red,
     }
})

export default CartCard;