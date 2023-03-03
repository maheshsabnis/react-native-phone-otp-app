import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from './components/login';
// import Signup from './components/signup';
// import Dashboard from './components/dashboard';
import SignUpComponent from './components/signupcomponent';
import LoginComponent from './components/logincomponent';
import DashboardComponent from './components/dashboardcomponent';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Signup"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#3740FE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen 
      name="Signup" 
      component={SignUpComponent} 
      options={{ title: 'Signup' }}
    />       
    <Stack.Screen 
      name="Login" 
      component={LoginComponent} 
      options={
        { title: 'Dashboard' }}
    />
    <Stack.Screen 
     name="Dashboard" 
     component={DashboardComponent} 
     options={
       { title: 'Dashboard' }
     }
    />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
