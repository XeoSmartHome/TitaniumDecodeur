import React from "react";
import {Text, TouchableOpacity} from "react-native";


const TimisoaraButton = ({title, onPress, style}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                padding: 10,
                borderRadius: 20,
                backgroundColor: 'yellow',
                ...style
            }}
        >
            <Text
                style={{
                    fontSize: 20
                }}
            >
                {
                    title
                }
            </Text>
        </TouchableOpacity>
    );
};

export default TimisoaraButton;
