import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image, TextInput,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    const signedgoogle=()=>{
        Alert.alert('signedgoogle');
    }

    const loginfirst=()=>{
        Alert.alert('Loginfirst');
    }
    const [text, setEmail] = useState('');
    const [text1, setPassword] = useState('');
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/first.png')} style={styles.container8} />
            <View style={styles.textContainer}>
                <Text style={styles.container9}>Welcome Back,</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.container10}>Make it Work, Make it Right, Make it Fast</Text>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    value={text}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputContainer2}>
                <Icon name="key" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.textInput2}
                    value={text1}
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View style={styles.container11}>
                <Text style={styles.container12}>Forget Password?</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.container13} onPress={loginfirst}>
                    <Text style={{color:'white'}}>LOGIN</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.container14}>
                <Text style={{fontWeight:'700'}}>OR</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.container15} onPress={signedgoogle}>
                    <Image source={require('./assets/glogo.png')} style={styles.container16}/>
                  <Text>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container17}>
                <Text>Don't Have an Account?</Text>
                <Text style={{color:'black', fontWeight:'bold',marginLeft: 5}}>Signup</Text>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container8: {
        height: 270,
        width: 270,
        top: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: '100%',
        paddingLeft: 20,
        marginTop: 10,
    },
    container9: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'left',
        top: 30,
    },
    container10: {
        fontSize: 12,
        textAlign: 'left',
        top: 23,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 20,
        width: 300,
        height: 50,
        top: 25,
        backgroundColor: '#fff', 
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        height: '100%',
    },
    inputContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 20,
        width: 300,
        height: 50,
        top: 25,
        backgroundColor: '#fff',
    },
    textInput2: {
        flex: 1,
        height: '100%',
    },
    container11: {
        width: 300, 
        marginTop: 10,
        alignItems: 'flex-end', 
        top: 25,
    },
    container12:{
        color:'gray',
        fontWeight:'bold'
    },
    container13:{
      backgroundColor: '#fe696e',
      height:50,
      width:200,
      top:44,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:7
    },
    container14:{
        top:55
    },
    container15:{
        flexDirection:'row',
        top:67,
        borderColor: 'black',
        borderRadius:7,
        borderWidth: 1,
        height:50,
        width:200,
        alignItems:'center',
      justifyContent:'center',
},
container16:{
    width:18,
    height:24,
    marginRight:10
}
    
    ,
    container17:{
        top:72,
        flexDirection:'row',
        margin:'auto',
        
        
        
    }
});
