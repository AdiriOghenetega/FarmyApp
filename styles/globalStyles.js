import { StyleSheet } from "react-native";

export const globalStyles=StyleSheet.create({
    shadowContainer:{
        elevation: 3,
        shadowOffset: { 
          width: 2, 
          height: 5 
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    logo: {
        width: 53,
        height: 75,
      },
})