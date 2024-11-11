import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PhoneNumber from './PhoneNumber'
const StudentBox = ({clickHandle}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.topCont,]}>
        <View style={[styles.imageContainer, { backgroundColor: '#C6A8A8' }]}>
          <Text style={{fontWeight: 'bold', color: "#2F2F2F"}}>72</Text>
        </View>
        <TouchableOpacity onPress={()=>{clickHandle()}} style={[styles.imageContainer, { backgroundColor: '#2F2F2F' }]}>
          <Image
            style={[styles.image,]}
            source={require('../assets/Images/arrow-up-right.png')} />
        </TouchableOpacity>

      </View>
      <Text style={[styles.name]}>Atharv Sanjay Yadav</Text>
      <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly' }}>
        <PhoneNumber number={8080072198} name="Parent"/>
        <PhoneNumber number={8080072198} name="Student"/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginTop: 5,
    padding: 8,
    backgroundColor: '#92E498',
    borderRadius: 7
  },
  topCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 20,
    height: 20,
    padding: 7,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#181818',
    fontWeight: 'bold',
    margin: 5
  }
})
export default StudentBox