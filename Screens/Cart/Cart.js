import { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
          // ICONS 
import { Ionicons } from '@expo/vector-icons';

import colors from '../../configs/colors';
import CartCard from './CartCard.js';


const Cart = ({navigation}) =>{
const cartItems = [
  {
      id: 1,
      image:require('../../assets/images/chicken.jpg'),
      storeName: "FoodCo",
      productName: "Burger",
      price: "2500"
  },

  {
    id: 2,
    image:require('../../assets/images/chickem.jpg'),
    storeName: "Chicken Republic",
    productName: "Burger",
    price: "2500"
},

{
  id: 3,
  image:require('../../assets/images/Dough.jpg'),
  storeName: "FoodCo",
  productName: "Burger",
  price: "250"
},

{
  id: 4,
  image:require('../../assets/images/[profilepic]1.jpg'),
  storeName: "Obasanjo Farms",
  productName: "Christmas Cow",
  price: "250000"
}
]

    return(
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
                <Text style={styles.headerTitleText}>Cart</Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.clearText}>Clear(2)</Text>
              </TouchableOpacity>

            </View>

            {/* CART ITEMS */}
            <FlatList
                data={cartItems}
                keyExtractor={(cartItem) => cartItem.id.toString}
                horizontal={false}
                renderItem={({item})=>
                 <CartCard
                       imageUrl={item.image}
                       storeName={item.storeName}
                       productName={item.productName}
                       price={item.price}
                       onPress={()=> navigation.navigate("StoreDetail")}
                 />
                }
            />

         <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.cartButton}
              onPress={()=> navigation.navigate("Checkout")}
            >
                 <Text style={styles.cartButtonText}>Checkout</Text>
            </TouchableOpacity>
            
            <View style={styles.priceContainer}>
                <Text style={styles.priceSymbol}> $</Text>
                <Text style={styles.price}> 3,500</Text>
            </View>
        </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    headerContainer:{
        paddingHorizontal: 15,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: colors.lightgray,
        borderBottomWidth: 0.5,
      },
  
      arrowIcon:{
        // width: "35%"
      },
  
      headerTitle:{
        // width: "75%"
      },
  
      headerTitleText:{
        fontFamily:"RalewayBold",
        fontSize: 16,
        color: colors.primary
      },

      clearText:{
        fontFamily:"RalewayMedium",
        fontSize: 14,
        color: colors.primary
      },

      bottomContainer:{
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    
    cartButton: {
        width: "70%",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderRadius: 15
    
    },
    
    cartButtonText:{
        color: colors.white,
        fontFamily: "RalewayBold",
        fontSize: 19,
    },
    
    priceContainer:{
        flexDirection: "row"
    },
    
    
    priceSymbol:{
        fontFamily:"RalewayBold",
        fontSize: 30,
        color: colors.primary
    },
    
    price:{
        fontFamily:"RalewayBold",
        fontSize: 28,
        color: colors.primary,
        marginTop: -4,
        marginLeft: -6,
    },
    
})

export default Cart;