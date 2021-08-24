import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import TimisoaraButton from "../Components/TimisoaraButton";
import {TimisoaraColors} from "../Style/Colors";
import {TICKET_INFO_EXAMPLE} from "../FakeBackend/tickets";
import Foundation from "react-native-vector-icons/Foundation";


const TicketField = ({label, value}) => {
    return (
        <View
            style={styles.ticketFieldContainer}
        >
            <Text
                style={styles.ticketFieldLabel}
            >
                {
                    label
                }
            </Text>
            <Text
                style={styles.ticketFieldValue}
            >
                {
                    value
                }
            </Text>
        </View>
    )
};


const TicketInfo = ({ticket, rescanButtonPress}) => {

    return (
        <View
            style={styles.ticketInfo}
        >
            <Foundation name={'checkbox'} size={100} color={'green'}/>

            <TicketField
                label={'First name'}
                value={ticket.firstName}
            />
            <TicketField
                label={'Last name'}
                value={ticket.lastName}
            />
            <TicketField
                label={'Event'}
                value={ticket.event}
            />
            <TicketField
                label={'Start'}
                value={ticket.startTime}
            />
            <TicketField
                label={'End'}
                value={ticket.endTime}
            />
            <TimisoaraButton
                onPress={rescanButtonPress}
                title={'Scan another ticket'}
                style={styles.rescanButton}
            />
        </View>
    )
};


const TicketScannerScreen = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [ticketInfo, setTicketInfo] = useState({});

    const onBarCodeScanned = ({type, data}) => {
        setScanned(true);
        setTicketInfo(TICKET_INFO_EXAMPLE)
    };

    const rescanButtonPress = () => {
        setScanned(false);
    };

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
        <View
            style={styles.screen}
        >
            {
                scanned === false ?
                    <BarCodeScanner
                        onBarCodeScanned={scanned === true ? undefined : onBarCodeScanned}
                        style={styles.barCodeScanner}
                    />
                    :
                    <TicketInfo ticket={ticketInfo} rescanButtonPress={rescanButtonPress}/>

            }
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    barCodeScanner: {
        flex: 1,
        margin: 10
    },
    ticketInfo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ticketFieldContainer: {
        backgroundColor: '#b9b6b6',
        width: '90%',
        marginVertical: 8,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    ticketFieldLabel: {
        borderRadius: 20,
        fontSize: 16
    },
    ticketFieldValue: {
        borderRadius: 20,
        fontSize: 20
    },
    rescanButton: {
        backgroundColor: TimisoaraColors.MikadoYellow,
        marginTop: 20,
        marginBottom: 20
    }
});

export default TicketScannerScreen;