import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import mainscreen from './mainscreen';
import login from './login';
import signup from './signup';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="main"
        component={mainscreen}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="login"
        component={login}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
        name="signup"
        component={signup}
        options={{
          headerShown:false
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

