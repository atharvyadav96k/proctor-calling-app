import { View, Text, StyleSheet, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectBox from '../components/SelectBox'
import globalStyle from '../styleSheet/globalStyle'
import ClickBox from '../components/ClickBox'
const TeacherProctor = ({ navigation }) => {
    // once we reach we will not go back to register or Login screen
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
        return () => backHandler.remove();
    })
    const [option, setOption] = useState(0);
    const continueHandle = ()=>{
        if(option == 1){
            navigation.navigate('Proctor')
            console.log('Proctor')
        }
        else{
            navigation.navigate('Teacher')
            console.log('Teacher')
        }
        
    }
    
    const clickHandle1 = () => {
        setOption(0)
        console.log(option)
    }
    const clickHandle2 = () => {
        setOption(1)
        console.log(option)
    }
    return (
        <View style={globalStyle.container}>
            <Text style={[globalStyle.subTitle, { marginTop: 10 }]}>Please</Text>
            <Text style={globalStyle.title}>Select On Option</Text>
            <View style={[globalStyle.flexEnd, { marginBottom: 20 }]}>
                <SelectBox selectHandle={[clickHandle1, clickHandle2]} />
                <View style={{ marginHorizontal: 20 }}>
                    <ClickBox title="Continue" bgColor='#FBFF62' clickHandle={continueHandle} />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({

})
export default TeacherProctor