import React from "react";
import {View, StyleSheet} from "react-native";
import TimisoaraButton from "../Components/TimisoaraButton";


const MainScreen = ({navigation}) => {

    const onScanTicketButtonPress = () => {
        navigation.navigate('QrCodeScanner');
    };

    const onStatisticsButtonPress = () => {
        navigation.navigate('Statistics');
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
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
    button: {
        margin: 10,
        backgroundColor: 'red'
    }
})

export default MainScreen;