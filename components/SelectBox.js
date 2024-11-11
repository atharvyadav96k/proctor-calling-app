import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React , {useState} from 'react'
import globalStyle from '../styleSheet/globalStyle'
const SelectBox = ({selectHandle}) => {
    const [select, setSelect] = useState(false);
    return (
        <View>
            <TouchableNativeFeedback onPress={()=>{selectHandle[0](); setSelect(false)}}>
                <View style={[styles.box, select? styles.noSelect: styles.select]}>
                    <Text style={styles.boxTitle}>Teacher</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{selectHandle[1](); setSelect(true)}}>
                <View style={[styles.box, select ? styles.select : styles.noSelect]}>
                    <Text style={styles.boxTitle}>Procter</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        height: 150,
        backgroundColor: '#1D1D1D',
        marginHorizontal: 20,
        borderRadius: 7,
        marginVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    select: {
        borderColor: '#9D9D9D',
        borderWidth: 1
    },
    noSelect: {
        borderColor: '#484848',
        borderWidth: 1
    },
    boxTitle: {
        fontSize: 32,
        color: '#BDBDBD',
        fontWeight: '300'
    }
})
export default SelectBox