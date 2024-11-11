import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'

const Option = ({ backgroundColor = "#FBFF62", title, selected = false, clickHandle }) => {
    const click = () => {
        clickHandle();
    }
    return (
        <TouchableNativeFeedback onPress={() => { click(); }}>
            <View style={[styles.option, { backgroundColor: selected ? backgroundColor : 'transparent' }]}>
                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
const OptionContainer = ({ options , getValue}) => {
    const [select, setSelect] = useState('');
    const onChange = (val)=>{
        getValue(val)
    }
    return (
        <ScrollView horizontal>
            {
                options.map((ele, index) => {
                    return (
                        <Option 
                        clickHandle={() => {setSelect(ele);onChange(ele)}} 
                        key={index} 
                        title={ele} 
                        selected={ele == select ? true : false} />
                    )
                })
            }
        </ScrollView>
    )
}
const SelectOption = ({ backgroundColor = '#FDFED7', optionBackgroundColor = '#92E498', title, options,getVal=(val)=>{console.log("Hello",val)} }) => {
    const setVal = (val)=>{
        getVal(val)
    }
    return (
        <View style={[{ backgroundColor: backgroundColor, borderRadius: 14, padding: 10, marginBottom: 7 }]}>
            <Text style={[styles.titleContainer, { backgroundColor: optionBackgroundColor }]}>{title}</Text>
            <OptionContainer options={options} getValue={setVal}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 7,
        marginVertical: 5
    },
    titleContainer: {
        color: '#181818',
        padding: 10,
        borderRadius: 7,
        fontWeight: 'bold',
        maxWidth: 140
    },
    option: {
        padding: 7,
        paddingHorizontal: 12,
        borderRadius: 7,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: '#707070',
        marginHorizontal: 5
    }
})
export default SelectOption