import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../configs/colors';
import { Ionicons } from '@expo/vector-icons';
import CustomModal from './CustomModal';

const Checkout =({navigation}) =>{
  const [isModalVisible, setModalVisible] = useState(false)
  const [phone, setPhone] = useState("+234**********")
  const [deliveryLocation, setDeliveryLocation] = useState("567 Elm Avenue, Townsville, State Region, Countryland")

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = ()=>{
    setModalVisible(false)
  }

  const saveLocationItem = newlocation => {
    if (newlocation.trim() != ''){
      setDeliveryLocation(newlocation)
    }

    closeModal();
  }

  const savePhoneItem = newphone => {
    if (newphone.trim() != ''){
      setPhone(newphone)
    }
    closeModal
  }


    return (
    <ScrollView style={styles.container}>
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
                        <Text style={styles.headerTitleText}>Checkout</Text>
                    </View>
            </View>
        <View style={styles.contentContainer}>

            <View style={{padding: 10}}>
                <View style={styles.deliveryTimeBox}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../../assets/images/deliveryIconn.png")}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.deliveryTextContainer}>
                        <Text style={styles.deliveryTextHeader}>Delivery</Text>
                        <Text style={styles.deliveryTextBody}>Delivery in 23 - 45min</Text>
                    </View>
                </View>

                <View style={styles.deliveryTimeBox}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../../assets/images/location.png")}
                            style={styles.icon}
                        />
                    </View>

                    <CustomModal
                        isVisible={isModalVisible} 
                        onClose={closeModal} 
                        onSave={saveLocationItem}
                        modalHeader="Edit Delivery Location"
                        modalPlaceholder=""
                    />

                    <View style={styles.deliveryTextContainer}>
                        <Text style={styles.deliveryTextHeader}>Delivery Location</Text>
                        <Text style={styles.deliveryTextBody}>{deliveryLocation}</Text>
                    </View>

                    <TouchableOpacity style={styles.editContainer}
                        onPress={openModal}
                    >
                        <Text style={styles.editContainerText}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>

                <CustomModal
                    isVisible={isModalVisible}
                    onClose={closeModal}
                    onSave={savePhoneItem}
                    modalHeader="Edit Phone Number"
                    modalPlaceholder=""
                />

                <View style={styles.deliveryTimeBox}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../../assets/images/calling.png")}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.deliveryTextContainer}>
                        <Text style={styles.deliveryTextHeader}>Phone Number</Text>
                        <Text style={styles.deliveryTextBody}>{phone}</Text>
                    </View>

                    <TouchableOpacity style={styles.editContainer}
                      onPress={openModal}
                    >
                        <Text style={styles.editContainerText}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.deliveryTimeBox}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../../assets/images/credit-cards.png")}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.deliveryTextContainer}>
                    <Text style={styles.deliveryTextHeader}>Payment</Text>
                    <Text style={styles.deliveryTextBody}>Pay in one click - MasterCard,Visa and Verve</Text>
                </View>
                <TouchableOpacity style={styles.editContainer}>
                        <Text style={styles.editContainerText}>
                            Edit
                        </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.orderDetails}>
                <View style={styles.orderHeader}> 
                    <Text style={styles.orderHeaderText}>Orders</Text>
                    <Text style={styles.orderHeaderText}>Add More Products</Text>
                </View>

                <View style={styles.orderItem}>
                    <View style={styles.orderNQ}>
                    <Text style={styles.orderNumber}>
                        x1
                    </Text>
                    <Text style={styles.productName}>
                        Cargo Burger
                    </Text>
                    </View>
                    <Text style={styles.price}>
                        $50000
                    </Text>
                </View>

                <View style={styles.priceContainer}>
                    <View style={styles.priceBox}>
                        <Text style={styles.productName}>
                            Subtotal
                        </Text>
                        <Text style={styles.price}>
                            $50000
                        </Text>
                    </View>

                    <View style={styles.priceBox}>
                        <Text style={styles.productName}>
                            Service Fee
                        </Text>
                        <Text style={styles.price}>
                            $200
                        </Text>
                    </View>

                    <View style={styles.priceBox}>
                        <Text style={styles.productName}>
                            Delivery Fee
                        </Text>
                        <Text style={styles.price}>
                            $500
                        </Text>
                    </View>
                </View>
            </View>
            </View>
        </View>

        <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.cartButton}
              onPress={()=> navigation.navigate("Checkout")}
            >
                 <Text style={styles.cartButtonText}>Checkout</Text>
            </TouchableOpacity>
            
            <View style={styles.totalPriceContainer}>
                <Text style={styles.priceSymbol}> $</Text>
                <Text style={styles.totalPrice}> 50700</Text>
            </View>
        </View>
    </ScrollView>
   );
 }


const styles = StyleSheet.create({
    contentContainer:{
      // flex: 1
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
        width: "40%"
      },
  
      headerTitle:{
        width: "85%"
      },
  
      headerTitleText:{
        fontFamily:"RalewayBold",
        fontSize: 16,
        color: colors.primary
      },

      deliveryTimeBox:{
        flexDirection: "row",
        padding: 12,
        marginVertical: 10,
        backgroundColor: colors.white,
        borderRadius:5,
        shadowColor: "#000000",
        shadowOffset: {
            width: -1.5,
            height: 0.5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 2,
        elevation: 3
      },

      iconContainer: {
        width: "12%"
      },

      icon:{
        width: 40,
        height: 40
      },
      deliveryTextContainer:{
        paddingLeft: 5,
        width: "80%"

      },

      deliveryTextHeader:{
        fontFamily: "RalewayBold",
        fontSize: 16
      },

      deliveryTextBody:{
        fontFamily: "RalewayMedium",
        fontSize: 14,
        marginTop: 5
      },

      editContainer: {
        width: "12%"
      },

      editContainerText:{
        color:colors.primary
      },

      orderDetails:{
        marginTop: 12,
      },

      orderHeader:{
        flexDirection: "row",
        justifyContent: "space-between"
      },

      orderHeaderText:{
        fontFamily:"RalewaySemiBold",
        color: colors.primary
      },

      orderItem:{
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
      },

      orderNQ:{
        flexDirection: 'row',
      },

      productName:{
        marginLeft: 10,
        fontFamily: "RalewaySemiBold",
        fontSize: 14
      },

      orderNumber:{
        fontFamily: "RalewaySemiBold",
        fontSize: 14
      },

      price:{
        fontFamily: "RalewaySemiBold",
        fontSize: 14
      },

      priceContainer: {
        // padding: 20,

      },

      priceBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 12
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
    
    totalPriceContainer:{
        flexDirection: "row"
    },
    
    
    priceSymbol:{
        fontFamily:"RalewayBold",
        fontSize: 30,
        color: colors.primary
    },
    
    totalPrice:{
        fontFamily:"RalewayBold",
        fontSize: 27,
        color: colors.primary,
        marginTop: -4,
        marginLeft: -6,
    },
 })
export default Checkout;