import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mainscreen = () => {
  const navigation = useNavigation(); // Get access to the navigation object

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./assets/first.png')} style={styles.container1} />
      </View>

      <View>
        <Text style={styles.container2}>Build Awesome Apps</Text>
      </View>

      <View style={styles.container4}>
        <Text style={styles.container3}>Let's Put Your Creativity On the Development Path</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.container5} onPress={()=> navigation.navigate('login')}>
          <Text style={{ color: 'white' }}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container6} onPress={()=> navigation.navigate('signup')}>
          <Text style={{ color: '#fe696e' }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe696e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    height: 270,
    width: 270,
    top: -110,
  },
  container2: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  container3: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  container4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    top: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container5: {
    marginRight: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  container6: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
});
