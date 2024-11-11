import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const BackButton = ({ clickHandle=()=>{}}) => {
    return (
        <TouchableOpacity onPress={() => { clickHandle() }}>
            <View style={styles.btn}>
                <Image style={styles.btnImage} source={require('../assets/Images/angle-left.png')} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnImage: {
        width: 25,
        height: 25,
        transform: [
            { translateX: -2 }
        ]
    },
    btn: {
        marginTop: 20,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#fff',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default BackButton