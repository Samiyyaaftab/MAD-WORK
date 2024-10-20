import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, ImageBackground } from 'react-native';



export default function ImageBackground1() {
    return(

<ImageBackground style={styles.oo}
source={require('../assets/u.jpg')}

/>

    );
 
}

const styles = StyleSheet.create({


  oo:{
flex:1,
justifyContent:"center",
alignItems:"center",
height:900,
width:500,
  },
});
