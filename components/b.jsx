import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,handlePress } from 'react-native';



export default function B({navigation}) {
    return(
<View style={styles.container6}>

<Button
title="go"
onPress={handlePress}

/>

</View>

    );
 
}

const styles = StyleSheet.create({
  container6: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
