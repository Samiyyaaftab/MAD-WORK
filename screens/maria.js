import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TouchableOpacity, TextInput} from 'react-native';
import Status from '../components/status';


export default function Maria({navigation}) {
 return(
<View style={styles.container3}>
<Status/>

<TouchableOpacity

onPress={() => navigation.navigate('Mar')}>
    <Text>Sf
        
    </Text>
</TouchableOpacity>

</View>

 );
}

const styles = StyleSheet.create({
  container3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
