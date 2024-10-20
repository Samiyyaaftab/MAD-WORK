import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';



export default function Status() {
    return(
<View style={styles.container2}>

<StatusBar  barStyle="light-content" hidden={false } backgroundColor="red"/>
 
</View>

    );
 
}

const styles = StyleSheet.create({
  container2: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
