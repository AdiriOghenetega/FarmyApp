import { useState } from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from './colors';

const GlassmorphicInput = ({ placeholder, value, onChangeText, isPassword}) => {

    const [showPassword, setShowPassword] = useState(true);


    const renderShowHideButton = () => {
        if (isPassword) {
          return (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.hideText}>{showPassword ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          );
        }
    
        return null;
      };

    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity 
            onPress={()=> setShowPassword(!showPassword)}
            style={{ marginLeft: -50}}
        >
           {renderShowHideButton()}
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    textInputContainer: {
        padding: 5,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(14, 168, 87, 0.3)',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between'
      },
    
    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: 'white',
        fontSize: 14,
        fontFamily: 'RalewayMedium',
        color: colors.black,
        width: "100%"
        
    },

    hideText: {
        color: colors.blueFaded
    }
  })

  export default GlassmorphicInput;