import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet, } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import globalStyle from '../styleSheet/globalStyle'
import FormInput from '../components/FormInput'
import ClickBox from '../components/ClickBox'
const Home = ({ navigation }) => {
  const register = () => {
    navigation.navigate('Register')
  }
  const LoginHandler = () => {
    navigation.navigate('TeacherProctor');
  }
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={globalStyle.container}>
        <Text style={[globalStyle.title, { marginTop: 25 }]}>Welcome Back</Text>
        <Text style={globalStyle.subTitle}>Login to Continue</Text>
        <View style={globalStyle.flexEnd}>
          <LottieView
            source={require('../assets/animations/Animation.json')}
            style={[styles.animationBackground]}
            autoPlay
          />
          <FormInput title='Email' />
          <FormInput title='Password' security={true} />
          <ClickBox title="Login" bgColor='#A9EBF9' clickHandle={LoginHandler} />
          <ClickBox
            title="Register"
            bgColor='#FDFED7'
            lastElement={true}
            clickHandle={register}
          />
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
export default Home