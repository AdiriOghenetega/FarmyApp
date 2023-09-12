import {View, Text, StyleSheet} from 'react-native';

const CustomHr = ({middleText}) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View
                    style={styles.line}
                />
                <View>
                    <Text>{middleText}</Text>
                </View>
                <View
                    style={styles.line}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 30
    },
    main:{
        flexDirection: 'row', 
        alignItems: 'center'
    },

    line:{
        flex: 1,
         height: 1,
          backgroundColor: 'black',
          marginRight: 5,
          marginLeft: 5,
    },
})
export default CustomHr;