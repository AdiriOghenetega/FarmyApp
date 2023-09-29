import { View, Text, StyleSheet, FlatList,SafeAreaView,TouchableOpacity,Modal } from 'react-native'
import React,{useState} from 'react'
import { cartItems } from '../Cart/data'
import OrderCard from './orderCard'
import colors from '../../configs/colors'
import OrderDetails from './orderDetails'

export default function Order() {
    const [delivered,setDelivered]=useState(false)
    const [openDetails,setOpenDetails]=useState(false)

    const handleDetailsClose = ()=>{
        setOpenDetails(prev=>!prev)
    }
    
  return (
    <SafeAreaView style={styles.container}>
        <Modal visible={openDetails}>
        <OrderDetails handleDetailsClose={handleDetailsClose} />
        </Modal>
      <Text style={styles.titleText}>Recent Orders</Text>
      <FlatList 
      data={cartItems}
      style={styles.flatList}
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={handleDetailsClose}>
            <OrderCard delivered={delivered} />
        </TouchableOpacity>
      )}
      />
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.lightgray
},
flatList:{
borderTopStartRadius:10
},
titleText:{
    fontSize:27,
    marginVertical:10,
    marginLeft:10
}
})