import { Button } from "react-native";
import {Text,View,Button}  from "react-native";
export default function Home(){

return(
<Button
title="get started"
onPress={()=>navigation.navigate('About')}
/>
);

}
