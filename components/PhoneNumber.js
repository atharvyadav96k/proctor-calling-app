import { View, Text, Linking, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native'
import React from 'react'

const PhoneNumber = ({ number, name , numberShow=false}) => {
    const url = `tel:${number}`
    const call = () => {
        Linking.openURL(url).
            then(() => Alert.alert('Phone call initiated ' + number))
            .catch((error) => {
                Alert.alert(error)
            })
    }
    return (
        <View style={{ display: 'flex' }}>
            <Text style={[styles.name]}>{name}</Text>
            <TouchableOpacity  onPress={() => { call() }}>
                <View style={[styles.numberBox, {display: 'flex', flexDirection: 'row'}]}>
                    <Image style={[styles.Image]}
                        source={require('../assets/Images/call-outgoing.png')} />
                        <Text style={{color: '#fff', display:  numberShow ? 'block' : 'none' }}>{number}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    name: {
        color: '#FDFED7',
        marginLeft: 12,
        fontSize: 18
    },
    numberBox: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        backgroundColor: '#2F2F2F',
        borderRadius: 30,
        margin: 3,
        width: 100
    },
    number: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    Image: {
        width: 25,
        height: 25,
        transform: [
            {translateX: 25}
        ]
    }
})
export default PhoneNumber