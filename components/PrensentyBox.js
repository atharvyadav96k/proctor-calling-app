import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import globalStyle from '../styleSheet/globalStyle'

const PrensentyBox = ({ name, rollNo }) => {
    const [present, setPresent] = useState(false)
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.rollNo}><Text>{rollNo}</Text></View>
                <Text style={{ color: '#fff', fontSize: 16, marginLeft: 12, fontWeight: 'bold' }}>{name}</Text>
            </View>
            <TouchableNativeFeedback onPress={()=>{setPresent(!present)}}>
                <View style={[present ? globalStyle.greenBackground : globalStyle.dangerBackground, { padding: 7, borderRadius: 7, marginVertical: 7 }]}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{present? "Present" : "Absent"}</Text>
                </View>
            </TouchableNativeFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F2F2F',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 7,
        borderRadius: 7,
        margin: 7
    },
    rollNo: {
        backgroundColor: '#FDFED7',
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})
export default PrensentyBox