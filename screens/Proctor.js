import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import globalStyle from '../styleSheet/globalStyle'
import BackButton from '../components/BackButton'
import RoundCornerBtn from '../components/RoundCornerBtn'
import LottieView from 'lottie-react-native'
import StudentBox from '../components/StudentBox'
const Proctor = ({ navigation }) => {
  const backHandle = () => {
    navigation.navigate('TeacherProctor');
  }
  const [hideAnimation, setAnimationVisibility] = useState(true);
  const [s1, s1Update] = useState(true)
  const [s2, s2Update] = useState(false)
  const [s3, s3Update] = useState(false)
  const clickHandle = (val) => {
    console.log(val)
  }
  return (
    <View style={[globalStyle.container]}>
      <BackButton clickHandle={backHandle} />
      <Text style={[globalStyle.title, { marginTop: 10 }]}>Proctor</Text>
      <View horizontal style={{ display: 'flex', flexDirection: 'row' }}>
        <RoundCornerBtn
          title="All"
          select={s1}
          clickHandle={() => { s1Update(true); s2Update(false); s3Update(false); clickHandle(1) }}
        />
        <RoundCornerBtn
          title="Absent"
          select={s2}
          clickHandle={() => { s1Update(false); s2Update(true); s3Update(false); clickHandle(2) }} />
        <RoundCornerBtn
          title="Present"
          select={s3}
          clickHandle={() => { s1Update(false); s2Update(false); s3Update(true); clickHandle(3) }} />
      </View>
      <View style={{flex: 1}}>
        <LottieView
          style={[styles.bufferAnimation, hideAnimation ? styles.hideAnimation : styles.displayAnimation]}
          source={require('../assets/animations/loadingStudent.json')}
          autoPlay />      
        <ScrollView style={{flex: 1}}>
          <StudentBox clickHandle={()=>{navigation.navigate('Details')}}/>
          <StudentBox clickHandle={()=>{navigation.navigate('Details')}}/>
          <StudentBox clickHandle={()=>{navigation.navigate('Details')}}/>
          <StudentBox clickHandle={()=>{navigation.navigate('Details')}}/>
          <StudentBox clickHandle={()=>{navigation.navigate('Details')}}/>
          <StudentBox clickHandle={()=>{navigation.navigate('Details')}}/>
          <StudentBox clickHandle={()=>{navigation.navigate('Details')}}/>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bufferAnimation: {
    width: '100%',
    aspectRatio: 1
  },
  hideAnimation: {
    display: 'none'
  },
  displayAnimation: {
    display: 'block'
  }
});
export default Proctor