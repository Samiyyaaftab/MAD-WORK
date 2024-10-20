import React from "react";
import { View, Text, Button } from 'react-native';
import Field from "../Components/Field";
export default function DetailS({ navigation }) {
    return (
        <View>
            
            <Field headerText='Lets find your doctor'> </Field>
            <Button
                title="Go to Home
                
                "
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}