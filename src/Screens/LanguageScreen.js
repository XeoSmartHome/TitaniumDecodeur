import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {TimisoaraColors} from "../Style/Colors";
import I18n from 'i18n-js';
import {translator} from "../Internalization";


const t = translator('languageScreen');


const LanguageButton = ({language, selected, onPress}) => {

    return (
        <View
            style={styles.language}
        >
            <TouchableOpacity
                style={styles.languageTouchable}
                onPress={onPress}
            >
                <Text
                    style={styles.languageText}
                >
                    {
                        language
                    }
                </Text>
                {
                    selected === true &&
                    <Feather
                        style={styles.languageIcon}
                        name={'check'}
                        size={32}
                        color={TimisoaraColors.RaisinBlack}
                    />
                }
            </TouchableOpacity>
        </View>
    )
}

const LanguageScreen = () => {

    const languages = Object.keys(I18n.translations).map(
        (locale) => ({
            locale: locale,
            language: I18n.translations[locale]['language']
        })
    );

    const [currentLocale, setCurrentLocale] = useState(I18n.currentLocale());

    const getOnPress = (locale) => () => {
        I18n.locale = locale;
        setCurrentLocale(locale);
    }

    return (
        <ScrollView
            style={styles.screen}
        >
            {
                languages.map(
                    ({locale, language}) =>
                        <LanguageButton
                            key={`language-${locale}`}
                            language={language}
                            onPress={getOnPress(locale)}
                            selected={currentLocale === locale}
                        />
                )
            }
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    language: {
        marginHorizontal: 10,
        borderBottomColor: TimisoaraColors.MikadoYellow,
        borderBottomWidth: 2
    },
    languageTouchable: {
        flexDirection: 'row'
    },
    languageText: {
        fontSize: 20,
        padding: 14,
        flex: 5
    },
    languageIcon: {
        alignSelf: 'center',
        flex: 1
    }
});

export default LanguageScreen;