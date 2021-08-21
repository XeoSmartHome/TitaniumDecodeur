import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./src/Screens/MainScreen";
import QrCodeScannerScreen from "./src/Screens/QrCodeScannerScreen";
import {NavigationContainer} from "@react-navigation/native";
import StatisticsScreen from "./src/Screens/StatisticsScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={MainScreen}/>
                <Stack.Screen name={'QrCodeScanner'} component={QrCodeScannerScreen}/>
                <Stack.Screen name={'Statistics'} component={StatisticsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
