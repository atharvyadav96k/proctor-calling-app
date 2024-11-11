import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Register from './screens/Register';
import TeacherProctor from './screens/TeacherProctor';
import Proctor from './screens/Proctor';
import Teacher from './screens/Teacher';
import StudentDetails from './screens/StudentDetails';
import Student from './screens/Student';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen 
        name="TeacherProctor" 
        component={TeacherProctor} 
        options={{ headerShown: false }}
        initialParams={{disableBackButton: false}} />
        <Stack.Screen name='Proctor' component={Proctor} options={{headerShown: false}}/>
        <Stack.Screen name='Teacher' component={Teacher} options={{headerShown: false}}/>
        <Stack.Screen name='Details' component={StudentDetails} options={{headerShown: false}}/>
        <Stack.Screen name='Student' component={Student} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}