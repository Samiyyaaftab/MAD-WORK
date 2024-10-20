import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeS from './Screens/Home';
import DetailS from './Screens/Detail';
 
const Stack = createNativeStackNavigator(); // Declared correctly

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">  
        
        <Stack.Screen name="Home" component={HomeS} />
        <Stack.Screen name="Detail" component={DetailS} />

 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

