import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import globalStyle from '../styleSheet/globalStyle'
const Continue = ({ title , onClick}) => {
    return (
        <TouchableNativeFeedback onPress={onClick}>
            <View style={[styles.btn]}>
                <Text style={[globalStyle.subTitle, { color: '#181818', fontWeight: 'bold' }]}>{title}</Text>
                <Image style={[styles.Image]}
                    source={require('../assets/Images/angle-double-small-right.png')} />
            </View>
        </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        backgroundColor: '#92E498',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10
    },
    Image: {
        width: 30,
        height: 30,
        marginLeft: 7
    }
})
export default Continue