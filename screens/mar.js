import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image ,ImageBackground, Switch} from 'react-native';

import Status from '../components/status';
import Image3 from '../components/image';

import Switch1 from '../components/switch';
export default function Mar({navigation}) {
 return(
    <ImageBackground style={styles.oo}
    source={require('../assets/u.jpg')}
    
    >


<Status/>

<Switch1/>
<Text>wwwwwwwwwwwwwwwwwwww</Text>
<Image3/>
<Button style={styles.f}
title="go to maria"
onPress={() => navigation.navigate('Maria')}
color="red"

/>
</ImageBackground>
 );
}

const styles = StyleSheet.create({
 oo: {
    flex:1,
    alignItems: 'center',
height:500,
 
  },
});