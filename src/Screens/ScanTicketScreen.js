import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";


const ScanTicketScreen = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [scanned, setScanned] = useState(true);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.screen}>

        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "red"
    },
});


export default ScanTicketScreen;
