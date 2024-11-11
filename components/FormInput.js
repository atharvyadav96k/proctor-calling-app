import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'

const FormInput = ({title, security=false}) => {
  return (
    <View>
      <TextInput style={[styles.inputFiled]} placeholderTextColor={'#fff'} placeholder={title} secureTextEntry={security}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputFiled:{
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#fff',
        padding: 10,
        color: '#fff',
        marginVertical: 5
    },
})
export default FormInput