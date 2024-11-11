import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import globalStyle from '../styleSheet/globalStyle'
import BackButton from '../components/BackButton'
import LottieView from 'lottie-react-native'
import PrensentyBox from '../components/PrensentyBox'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
const Student = ({ navigation, route }) => {
  const [students, setStudents] = useState([]);
  const data = route.params;
  function sortJsonByRollNo(jsonData) {
    return jsonData.sort((a, b) => a.rollNumber - b.rollNumber);
  }
  const StudentData = async () => {
    try {
      const params = {
        Class: data.Class,
        department: data.department,
        div: data.division
      };
      const response = await fetch('http://192.168.129.8:3000/getStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params),
      });
      const jsonData = await response.json();
      const sortedData = sortJsonByRollNo(jsonData)
      setStudents(sortedData); // Update students state with fetched data
      console.log(sortedData)
    } catch (error) {
      console.log(error)
    }

  }
  
  useEffect(() => {
    StudentData();
  }, [])
  if (data.division != '' && data.department != '' && data.Class != '' && data.lecture && students.length != 0) {
    return (
      <View style={[globalStyle.container]}>
        <BackButton clickHandle={() => { navigation.navigate('Teacher') }} />
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
          <Text style={[styles.contain, globalStyle.dangerBackground]}>{data.lecture}</Text>
          <Text style={[styles.contain]}>{data.division}</Text>
          <Text style={[styles.contain, { backgroundColor: '#92E498' }, styles.darkText]}>{data.Class}</Text>
          <Text style={[styles.contain, { backgroundColor: '#FBFF62' }, styles.darkText]}>{data.department}</Text>
        </View>
        <ScrollView>
          {
            students.map((item) => <PrensentyBox key={item.prlNumber} name={item.name} rollNo={item.rollNumber} />)
          }
        </ScrollView>
      </View>
    )
  }
  else if(students.length == 0 && data.division != '' && data.department != '' && data.Class != '' && data.lecture ){
    return (
      <View style={globalStyle.container}>
        <BackButton clickHandle={() => { navigation.navigate('Teacher') }} />
        <Text style={[globalStyle.title, { marginTop: 5 },]}>No result found</Text>
        <LottieView
            style={styles.animation}
            source={require('../assets/animations/empty.json')}
            autoPlay
          />
      </View>
    )
  }
  else {
    return (
      <View style={[globalStyle.container]}>
        <BackButton clickHandle={() => { navigation.navigate('Teacher') }} />
        <Text style={[globalStyle.title, { marginTop: 5 }, globalStyle.dangerText,]}>Please Enter Valid Information</Text>
        <View style={globalStyle.flexCenter}>
          <LottieView
            style={styles.animation}
            source={require('../assets/animations/dumb.json')}
            autoPlay
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  animation: {
    width: '90%',
    aspectRatio: 1
  },
  contain: {
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16
  },
  lightText: {
    color: "#fff"
  },
  darkText: {
    color: '#0D0D0D'
  }
})
export default Student;