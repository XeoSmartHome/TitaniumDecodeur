import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import {TimisoaraColors} from "../Style/Colors";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AccountScreen from "../Screens/AccountScreen";
import I18n from 'i18n-js';
import LanguageScreen from "../Screens/LanguageScreen";

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Titanium Decodeur'}
                component={BottomTabNavigator}
                options={{
                    headerStyle:{
                        backgroundColor: TimisoaraColors.MikadoYellow
                    }
                }}
            />
            <Stack.Screen
                name={'Account'}
                component={AccountScreen}
                options={{
                    headerStyle:{
                        backgroundColor: TimisoaraColors.MikadoYellow
                    }
                }}
            />
            <Stack.Screen
                name={'Language'}
                component={LanguageScreen}
                options={{
                    title: I18n.t('languageScreen.header'),
                    headerStyle:{
                        backgroundColor: TimisoaraColors.MikadoYellow
                    }
                }}
            />
        </Stack.Navigator>
    )
};


export default StackNavigator;