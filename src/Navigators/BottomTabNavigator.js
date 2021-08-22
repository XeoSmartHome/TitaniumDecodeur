import React from "react";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TicketScannerScreen from "../Screens/TicketScannerScreen";
import StatisticsScreen from "../Screens/StatisticsScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import {TimisoaraColors} from "../Style/Colors";


const Tab = createMaterialBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            activeColor={'black'}
            inactiveColor={TimisoaraColors.DarkLiver}
            barStyle={{ backgroundColor: TimisoaraColors.MikadoYellow }}
            initialRouteName="TicketScanner"
        >
            <Tab.Screen
                name="Statistics"
                component={StatisticsScreen}
                options={{
                    tabBarLabel: "Statistics",
                    tabBarIcon: ({color}) => (
                        <Foundation
                            name="graph-bar"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="TicketScanner"
                component={TicketScannerScreen}
                options={{
                    tabBarLabel: "Ticket Scanner",
                    tabBarIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={22}
                            color={color}
                        />
                    )}}
            />
            <Tab.Screen
                name="Settings"
                component={StatisticsScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({color}) => (
                        <Feather
                            name="settings"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


export default BottomTabNavigator;