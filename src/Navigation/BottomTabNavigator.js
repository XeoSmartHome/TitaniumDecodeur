import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import ScanTicketScreen from "../Screens/ScanTicketScreen";
import { SCREENS } from "./constants";


const Tab = createMaterialBottomTabNavigator();


const BottomTabNavigator = () => (
    <Tab.Navigator
        activeColor={'black'}
        //inactiveColor={TimisoaraColors.DarkLiver}
        //barStyle={{ backgroundColor: TimisoaraColors.MikadoYellow }}
        initialRouteName="TicketScanner"
    >
        <Tab.Screen
            name={SCREENS.STATISTICS}
            component={ScanTicketScreen}
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
            name={SCREENS.SCAN_TICKET}
            component={ScanTicketScreen}
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
            name={SCREENS.SETTINGS}
            component={ScanTicketScreen}
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


export default BottomTabNavigator;
