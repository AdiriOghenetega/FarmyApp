import {useState} from 'react';
import {View, StyleSheet, Image, SafeAreaView, Platform, TouchableOpacity, Text, TextInput, ScrollView, FlatList} from 'react-native';
import colors from '../../configs/colors';
import { AntDesign } from '@expo/vector-icons';
import StoreCard from './StoreCard';

const SearchPage = ({navigation}) => {

    const products = [
        {
          id: 1,
          image:require('../../assets/images/chicken.jpg'),
          storeName: "McDonalds",
          storeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit senectus vel turpis tincidunt nec eget maecenas. Habitant",
          distance: "45 km away" 
        },
      
        {
          id: 2,
          image:require('../../assets/images/630steak.png'),
          storeName: "630 Steak House",
          storeDescription: "A modern spin on a classic American steakhouse, 630 Park delights guests with impeccable prime steaks, fresh seafood, and unparalleled hospitality.",
          distance: "12 km away" 
        },
      
        {
          id: 3,
          image:require('../../assets/images/Tonys.png'),
          storeName: "TONY’S OF NORTH BEACH",
          storeDescription: "Twelve-time World Pizza Champion Chef Tony Gemignani’s passion for Italian food is the inspiration at this casual eatery.",
          distance: "5 km away" 
        },
      
        {
          id: 4,
          image:require('../../assets/images/boathouse.jpeg'),
          storeName: "BOATHOUSE ASIAN EATERY",
          storeDescription: "An eclectic mix of Japanese and East Asian Cuisine that offers a large selection of fresh seafood including innovative sushi rolls. ",
          distance: "120 km away" 
        },

        {
            id: 5,
            image:require('../../assets/images/city.jpeg'),
            storeName: "CITY WORKS EATERY & POUR HOUSE",
            storeDescription: "City Works is an eatery and pour house style restaurant, focusing on classic American food with a twist and an impressive selection of drinks in an upbeat, energetic atmosphere.",
            distance: "50 km away"  
          },
      
        {
          id: 6,
          image:require('../../assets/images/chicken.jpg'),
          storeName: "Stripe",
          storeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit senectus vel turpis tincidunt nec eget maecenas. Habitant",
          distance: "50 km away"  
        },


          {
            id: 7,
            image:require('../../assets/images/chicken.jpg'),
            storeName: "Scoops",
            storeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit senectus vel turpis tincidunt nec eget maecenas. Habitant",
            distance: "50 km away"  
          },
      ]

    const [selectedCategory, setSelectedCategory] = useState('');

        // SELECT Category TYPE LOGIC
        const handleCategoryPress = (CategoryId) => {
            setSelectedCategory(CategoryId);
        }

return (
    <SafeAreaView style={styles.container}>

   
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../../assets/images/flogo.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.searchMainView}>
                <TextInput
                    placeholder='Search for products, store or farms'
                    style={styles.searchTextInput}
                />

                <TouchableOpacity style={styles.filterContainer}>
                     <AntDesign name="filter" size={34} color={colors.primary} />
                </TouchableOpacity>
            </View>

       
        
                <FlatList
                    data={products}
                    keyExtractor={(product) => product.id.toString()}
                    horizontal={false}
                    
                    renderItem={({item}) => 
                        <StoreCard
                            imageUrl={item.image}
                            storeName={item.storeName}
                            storeDescription={item.storeDescription}
                            distance={item.distance}
                            onPress={()=> navigation.navigate("StoreDetail")}
                        />
                  
                    }
                />

    </SafeAreaView>
   );
 }


const styles = StyleSheet.create({
container:{
    flex: 1,
    // paddingTop: Platform.OS == 'android' ? 40 : null
},

logoContainer: {
    alignItems: "center",
    justifyContent: "center"
},

logo:{
    width: 53,
    height: 75
  },

 searchMainView: {
    padding:  10,
    flexDirection: "row",
 },

 searchTextInput:{
    borderRadius: 10,
    width: "80%",
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
        width: -1.5,
        height: 0.5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 2,
    elevation: 10
 },

 filterContainer: {
     width: "20%",
     marginLeft: 10,
     alignItems: "center",
     justifyContent: "center",
     backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#cccccc",
    shadowOffset: {
        width: -1.5,
        height: 0.5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 2,
    elevation: 10
 },


})
export default SearchPage;