import React from "react";
import { View, Text, Button } from 'react-native';

export default function HomeS({ navigation }) {
    return (
        <View>
            <Text>I am home</Text>
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
}
