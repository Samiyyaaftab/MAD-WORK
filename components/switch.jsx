import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, Switch } from 'react-native';


export default function Switch1() {
    const[isEnable,setIsEnable]=  useState(false);
    const toggleSwitch=() =>setIsEnable(!isEnable);
    return(
<Switch value={isEnable} onValueChange={toggleSwitch}></Switch>

    );
}

const styles = StyleSheet.create({
  container2: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
