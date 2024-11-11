import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ClickBox = ({ title, bgColor = "#fff", lastElement = false, clickHandle=()=>{} }) => {

    return (
        <TouchableOpacity onPress={()=>{clickHandle()}} style={[styles.btn, { backgroundColor: bgColor, marginBottom: lastElement ? 30 : 0 },]}>
            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: '400' }}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 8
    },

})
export default ClickBox
