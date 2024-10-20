import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home';
import About from './screens/About';
const Stack= createNativeStackNavigator();

export default function App() {
  return(
  <NavigationContainer>
<Stack.Navigator>

<Stack.Screen name='Home' component={Home}/>
<Stack.Screen name='About' component={About}/>
</Stack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
