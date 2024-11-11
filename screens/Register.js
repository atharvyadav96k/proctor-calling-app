import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import React from 'react'
import globalStyle from '../styleSheet/globalStyle'
import FormInput from '../components/FormInput'
import ClickBox from '../components/ClickBox'
import LottieView from 'lottie-react-native'
const Register = ({ navigation }) => {
    const login = () => {
        navigation.navigate('Home');
    }
    const RegisterHandle = () => {
        navigation.navigate('TeacherProctor');
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={globalStyle.container}>
                <Text style={[globalStyle.title, { marginTop: 25 }]}>Welcome</Text>
                <Text style={globalStyle.subTitle}>Register to Continue</Text>
                <View style={globalStyle.flexEnd}>
                    <LottieView
                        source={require('../assets/animations/Animation.json')}
                        style={[styles.animationBackground]}
                        autoPlay
                    />
                    <FormInput title='Name' />
                    <FormInput title='Email' />
                    <FormInput title='Password' security={true} />
                    <ClickBox title="Register" bgColor='#A9EBF9' clickHandle={RegisterHandle} />
                    <ClickBox
                        title="Login"
                        bgColor='#FDFED7'
                        lastElement={true}
                        clickHandle={login} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    animationBackground: {
        width: '100%',
        height: 250,
        zIndex: 0,
        backgroundColor: '#0D0D0D'
    }
})
export default Register