import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TimisoaraColors} from "../Style/Colors";
import {translator} from "../Internalization";


const t = translator('accountScreen');


const Option = ({title, navigation, target}) => {

    const onPress = () => {
        navigation.navigate(target);
    };

    return (
        <View
            style={styles.option}
        >
            <TouchableOpacity
                style={styles.optionTouchable}
                onPress={onPress}
            >
                <Text
                    style={styles.optionText}
                >
                    {
                        title
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const SettingsScreen = ({navigation}) => {
    return (
        <ScrollView
            style={styles.screen}
        >
            <Option
                title={t('account')}
                navigation={navigation}
                target={'Account'}
            />
            <Option
                title={t('language')}
                navigation={navigation}
                target={'Language'}
            />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    option: {
        borderBottomWidth: 2,
        borderBottomColor: TimisoaraColors.MikadoYellow,
        marginHorizontal: 10
    },
    optionTouchable: {},
    optionText: {
        fontSize: 20,
        padding: 14
    }
});


export default SettingsScreen;
