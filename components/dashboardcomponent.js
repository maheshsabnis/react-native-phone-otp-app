import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState, useEffect} from 'react';

const DashboardComponent=({navigation})=>{
    const [uid, setUid] =useState('');
    const [message,setMessage] = useState('');
    const [displayName, setDisplayName] = useState('');

    useEffect(()=>{
        if(firebase.currentUser.displayName){
            setDisplayName(firebase.currentUser.displayName);
            setUid(firebase.currentUser.uid);
        }else {
            setDisplayName('');
            setUid('');
        }
         
    },[displayName, uid]);


    const signOut = () => {
        firebase.signOut().then(() => {
          navigation.navigate('Login');
        })
        .catch(error => setMessage(error.message ));
      }

   if(firebase){
    return (
        <View style={styles.container}>
          <Text style = {styles.textStyle}>
            Hello,  {firebase.currentUser.email}
          </Text>
          <Button
            color="#3740FE"
            title="Logout"
            onPress={signOut}
          />
        </View>
      );
   } else {
    <View style={styles.container}>
         <Text style = {styles.textStyle}>
            Hello,  Please Login
          </Text>
    </View>
   }   

     
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 35,
      backgroundColor: '#fff'
    },
    textStyle: {
      fontSize: 15,
      marginBottom: 20
    }
  });

 export default DashboardComponent; 