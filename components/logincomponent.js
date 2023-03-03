import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from 'react';

const LoginComponent=({navigation})=>{

    const [user, setUser] = useState({
        displayName:'',
        email:'',
        password:'',
        isLoading:false
      });  
 
      const userLogin = () => {
        if(user.email === '' && user.password === '') {
          Alert.alert('Enter details to signin!')
        } else {
          
            signInWithEmailAndPassword(firebase, user.email, user.password)
            .then((userCredentials)=>{
                navigation.navigate('Dashboard');
            })
            .catch();
          
        }
      }



    return(
        <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={user.email}
          onChangeText={(val) => setUser({...user, email:val})}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={user.password}
          onChangeText={(val) => setUser({...user, password:val})}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signin"
          onPress={userLogin}
        />   
        <Text 
          style={styles.loginText}
          onPress={() => navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>                          
      </View>
    );
    
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
  });

export default LoginComponent;