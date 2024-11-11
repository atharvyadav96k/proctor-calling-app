import { View, Text } from 'react-native'
import React , {useState} from 'react'
import globalStyle from '../styleSheet/globalStyle'
import BackButton from '../components/BackButton'
import Continue from '../components/Continue'
import SelectOption from '../components/SelectOption'
const Teacher = ({ navigation }) => {
  const backHandle = () => {
    navigation.navigate('TeacherProctor');
  }
  const [lecture, setLecture] = useState('');
  const [division, setDivision] = useState('');
  const [Class, setClass]= useState('');
  const [department, setDepartment] = useState('');
  return (
    <View style={[globalStyle.container]}>
      <BackButton clickHandle={backHandle} />
      <Text style={[globalStyle.title, { marginTop: 10 }]}>Class</Text>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <SelectOption title="Lecture" options={[1, 2, 3, 4, 5, 6]} getVal={setLecture}/>
        <SelectOption title="Division" options={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']} getVal={setDivision} />
        <SelectOption title="Class" options={['FY', 'SY', 'TY', 'LY']} getVal={setClass}/>
        <SelectOption title="Department" options={['CSE', 'AIDS', 'CIVIL']} getVal={setDepartment}/>
        <Continue title="Continue" onClick={()=>{navigation.navigate('Student', {lecture, division,Class, department})}}/>
      </View>
    </View>
  )
}

export default Teacher