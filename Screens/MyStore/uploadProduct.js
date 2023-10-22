import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import CustomHeader from '../../configs/customHeader'
import GlassmorphicInput from '../../configs/GlassmorphicInput'
import { set } from 'react-native-reanimated'

export default function UploadProduct({handleModal}) {
    const [uploadData,setUploadData] = useState({
        productName:"",
        productDescription:"",
        pricePerUnit:"",
        measuringScale:"",
    })
  return (
    <SafeAreaView>
        <CustomHeader title={"Upload Product"} handleNavigate={handleModal} />
        <View style={styles.container}>
      <GlassmorphicInput 
      placeholder={"Product Name"}
      onChangeText={text=>{
        setUploadData(prev=>{
            return{
                ...prev,
                productName:text
            }
        })
      }}
      value={uploadData.productName}
      />
      <GlassmorphicInput 
      placeholder={"Product Description"}
      onChangeText={text=>{
        setUploadData(prev=>{
            return{
                ...prev,
               productDescription:text
            }
        })
      }}
      value={uploadData.productDescription}
      isMultiline={true}
      customStyle={styles.descInputStyle}
      />
      <GlassmorphicInput 
      placeholder={"Price Per Unit"}
      onChangeText={text=>{
        setUploadData(prev=>{
            return{
                ...prev,
                pricePerUnit:text
            }
        })
      }}
      value={uploadData.pricePerUnit}
      />
      <GlassmorphicInput 
      placeholder={"Measuring Scale"}
      onChangeText={text=>{
        setUploadData(prev=>{
            return{
                ...prev,
              measuringScale:text
            }
        })
      }}
      value={uploadData.measuringScale}
      />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 100,
},
descInputStyle:{
    height:248
}
})