import { View, Text } from 'react-native'
import React from 'react'
import globalStyle from '../styleSheet/globalStyle'
import BackButton from '../components/BackButton'
import PhoneNumber from '../components/PhoneNumber'
const StudentDetails = ({navigation}) => {
    return (
        <View style={[globalStyle.container]}>
            <BackButton clickHandle={()=>{navigation.navigate('Proctor')}}/>
            <Text style={[globalStyle.title, { fontSize: 24, marginTop: 20 }]}>Atharv Sanjay Yadav</Text>
            
        </View>
    )
}

export default StudentDetails