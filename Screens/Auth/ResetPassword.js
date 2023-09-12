import React,{useState} from 'react';
import {View, StyleSheet, SafeAreaView, Image,Text,ScrollView,Dimensions,Alert,ActivityIndicator} from 'react-native';
import * as Device from 'expo-device';
import GlassmorphicInput from '../../configs/GlassmorphicInput';
import colors from '../../configs/colors';
import CustomButton from '../../configs/CustomButton';


const {height,width}=Dimensions.get("window")

const ResetPassword = ({navigation,route}) => {
  const [data,setData]=useState({
    password:"",
    confirmPassword:""
  })
  const [loading,setLoading]=useState(false)


  const handleOtpSend = async ()=>{
    if(data.password === data.confirmPassword){
      const requestOptions = {
        method: 'POST',
        body: {
          password:data.password,
          token:route.params
        },
        redirect: 'follow'
      };
      try{
        setLoading(true)
       await fetch(`https://farmyapp-smju.onrender.com/api/v1/auth/password-reset?type=user`, requestOptions)
       setLoading(false)
        navigation.navigate("LoginOptions")
      }catch(error){
       console.log(error)
      }
    }else{
      Alert.alert("Inputs do not match", "confirm password should match password", [
        { text: "OK" },
      ]);
    }
  }


    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.innerScrollContainer}>
            <View style={styles.main}>
                <View>
                    <Image 
                        style={styles.logo}
                        source={require("../../assets/images/flogo.png")}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>Forgot Password</Text>
                    <Text style={styles.textBody}>
                    Choose new password
                    </Text>
                </View>

                <View style={styles.textInputContainer}>
                    {/* Input fields */}
                    <GlassmorphicInput
                        placeholder="Enter new password"
                        style={styles.textInput}
                        onChangeText={(text)=>setData(prev=>{
                          return{
                            ...prev,
                            password:text
                          }
                        })}
                        value={data.password}
                    />

                    <GlassmorphicInput
                        placeholder="Confirm New Password"
                        style={styles.textInput}
                        onChangeText={(text)=>setData(prev=>{
                          return{
                            ...prev,
                            confirmPassword:text
                          }
                        })}
                        value={data.confirmPassword}
                    />
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                {loading ? <ActivityIndicator />:<CustomButton
                    buttonLabel= "Verify"
                    onPress={handleOtpSend}
                />}
              <CustomButton
                        buttonLabel= "Back"
                        onPress={()=> navigation.navigate("OtpScreen")}
                />
                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Device.modelName == 'android' ? 20 : null,
        alignItems: "center",
        justifyContent: 'center',

    },
    innerScrollContainer:{
      height:height-100,
      alignItems: "center",
      justifyContent: 'center',
    },
    main:{
        alignItems: "center",
        justifyContent: 'center',
    },

    logo:{
        width: 53,
        height: 75
      },

      textHeader:{
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 10,
        fontFamily: "RalewayBold",
        color: colors.primary
      },

      textBody:{
        textAlign: "center",
        color: colors.gray
      },

      textContainer:{
        padding: 20,
        
      },

      textInputContainer: {
        width: "100%"
      },

      textInput:{
        width: "100%",
        borderWidth: 1
      },
      buttonContainer:{
        flexDirection:"row-reverse"
      }
})
export default ResetPassword;