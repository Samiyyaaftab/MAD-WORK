import { Button } from "react-native";
import {Icon} from "react-native-vector-icons/FontAwesome"
import {Text,View,Button}  from "react-native";
export default function About(){

return(
 <View>
    <Icon name="user" color= "red" size={30}></Icon>
    <Text>rftghijk</Text>
<Button
title="get started"
onPress={()=>navigation.navigate('Home')}
/>
</View>
);

}
