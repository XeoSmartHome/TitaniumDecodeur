import React from "react";
import {View, StyleSheet} from "react-native";
import TimisoaraButton from "../Components/TimisoaraButton";
import {TimisoaraColors} from "../Style/Colors";


const MainScreen = ({navigation}) => {

    const onScanTicketButtonPress = () => {
        navigation.navigate('QrCodeScanner');
    };

    const onStatisticsButtonPress = () => {
        navigation.navigate('Statistics');
    };

    return (
        <View
            style={styles.screen}
        >
            <TimisoaraButton
                title={'Scan ticket'}
                onPress={onScanTicketButtonPress}
                style={styles.button}
            />
            <TimisoaraButton
                title={'Statistics'}
                onPress={onStatisticsButtonPress}
                style={styles.button}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        margin: 10,
        backgroundColor: TimisoaraColors.MikadoYellow
    }
})

export default MainScreen;