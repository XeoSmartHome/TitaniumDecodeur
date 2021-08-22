import React from "react";
import {Text, TouchableOpacity} from "react-native";


const TimisoaraButton = ({title, onPress, style, textStyle}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 100,
                backgroundColor: 'yellow',
                ...style
            }}
        >
            <Text
                style={{
                    fontSize: 22,
                    ...textStyle
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
