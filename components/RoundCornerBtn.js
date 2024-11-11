import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const RoundCornerBtn = ({title, select= false, clickHandle}) => {

  return (
    <TouchableOpacity style={[styles.btn, select?styles.selected: styles.noSelect]} onPress={()=>{clickHandle();}}>
        <Text style={[{color: "#fff", textAlign: 'center', fontWeight: 'bold'}, select ? styles.selectText : styles.noSelect]}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 50,
        display: 'flex', 
        margin: 5,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
      backgroundColor: '#FEFFD7'
    },
    selectText: {
      color: '#45463C'
    },
    noSelect: {
      backgroundColor: 'transparent',
      borderColor: '#FEFFD7'
    },
    noSelectText: {
      color: '#FEFFD7'
    }
})

export default RoundCornerBtn