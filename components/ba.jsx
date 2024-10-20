import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';



export default function Ba({navigation}) {
    return(
<View style={styles.container2}>
<Button
title="go to mar"
onPress={() => navigation.navigate('Mar')}
/>


</View>

    );
 
}

const styles = StyleSheet.create({
  container2: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
