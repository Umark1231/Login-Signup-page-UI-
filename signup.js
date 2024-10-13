import { View, Text, Image, StyleSheet,TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Signup() {
  const [text, setname] = useState('');
  const [text1, setemail] = useState('');
  const [text2, setpass] = useState('');
  const [text3, setrepass] = useState('');
  const signupped=()=>{
    Alert.alert('signedup');

  }
  return (
    <View style={styles.container}>
      <Image source={require('./assets/pic2.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Get On Board!</Text>
        <Text style={{ bottom: 15 }}>Create your profile to start your journey</Text>
      </View>
      <View style={styles.textInput}>
        <Icon name="person" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.container20}
          placeholder="Name"
          value={text}
          onChangeText={setname}
          />
          
        
      </View>
      <View style={styles.textInput}>
        <Icon name="mail" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.container20}
          placeholder="Email Address"
          value={text1}
          onChangeText={setemail}
          />
          
        
      </View>
      <View style={styles.textInput}>
        <Icon name="key" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.container20}
          placeholder="Password"
          value={text2}
          onChangeText={setpass}
          />
          
        
      </View>
      <View style={styles.textInput}>
        <Icon name="key" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.container20}
          placeholder="Re-Type Password"
          value={text3}
          onChangeText={setrepass}
          />
          
        
      </View>
      <View>
        <TouchableOpacity onPress={signupped} style={styles.container21}>
          <Text style={{color:'white'}}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container22}>
        <Text>Already Have an Account?</Text>
        <Text style={{paddingLeft:3, fontWeight:'bold'}}>
        Login
        </Text>
      </View>
      
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 270,
    width: 270,
    marginTop: 44,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 26,
    bottom: 20
  },
  textInput:{
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    width: 300,
    height: 50,
    backgroundColor: '#fff',

  },
  container20:{
    flex: 1,
    height: '100%',
  },
  icon:{
    marginRight: 10,
  },
  container21:{
    backgroundColor:'#fe696e',
    height:50,
      width:200,
      top:30,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:7
  },
  container22:{
    top:34,
    flexDirection:'row',
    margin:'auto',

  }



});
