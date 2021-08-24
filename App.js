import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/Navigators/StackNavigator";
import I18n from 'i18n-js';


I18n.fallbacks = true;
I18n.translations = {
    'en': require('./assets/languages/english.json'),
    'ro': require('./assets/languages/romanian.json')
};


export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}
