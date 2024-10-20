import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maria from './screens/maria';
import Mar from './screens/mar';
const Stack= createNativeStackNavigator();

export default function App() {
  return(
 <NavigationContainer >
<Stack.Navigator>

  <Stack.Screen name='Maria' component={Maria}/>
    <Stack.Screen name='Mar' component={Mar}/>
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
