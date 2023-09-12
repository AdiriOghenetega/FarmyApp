import React,{useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image,ScrollView,Dimensions,ActivityIndicator} from 'react-native';
import * as Device from 'expo-device';
import colors from '../../configs/colors';
import GlassmorphicInput from '../../configs/GlassmorphicInput';
import CustomButton from '../../configs/CustomButton'

const {height,width}=Dimensions.get("window")

const ForgotPassword = ({navigation}) => {
  const [email,setEmail]=useState("")
 const [loading,setLoading]=useState(false)

  const handleForgotPassword =async ()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    try{
      setLoading(true)
     await fetch(`https://farmyapp-smju.onrender.com/api/v1/auth/request-token?email=${email}&type=user`, requestOptions)
     setLoading(false)
      navigation.navigate("OtpScreen",email)
    }catch(error){
     console.log(error)
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
                        Don’t worry this happens 😁{'\n'}
                        Enter your email to get a code to reset your password
                    </Text>
                </View>

                <View style={styles.textInputContainer}>
                    {/* Input fields */}
                    <GlassmorphicInput
                        placeholder="Enter your email"
                        style={styles.textInput}
                        onChangeText={(text)=>setEmail(text?.toLowerCase())}
                        value={email}
                    />
                  </View>
            </View>
                <View style={styles.buttonContainer}>
                {loading ? <ActivityIndicator />:<CustomButton
                        buttonLabel= "Send Code"
                        onPress={handleForgotPassword}
                />}
                <CustomButton
                        buttonLabel= "Back"
                        onPress={()=> navigation.navigate("LoginOptions")}
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
        flexDirection:"row-reverse",
      }
})

export default ForgotPassword;