import React from "react";
import {ScrollView, Dimensions, Text, View} from "react-native";
import {LineChart} from "react-native-chart-kit";
import {TimisoaraColors} from "../Style/Colors";
import {CITY_PASS_SOLD_IN_6_MONTHS} from "../FakeBackend/statistics";


const StatisticsScreen = () => {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: CITY_PASS_SOLD_IN_6_MONTHS
            }
        ]
    };

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: TimisoaraColors.MikadoYellow,
        backgroundGradientTo: TimisoaraColors.MikadoYellow,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    };

    return (
        <ScrollView
            style={{
                flex: 1
            }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        margin: 20
                    }}
                >
                    One day City Pass sold
                </Text>
                <LineChart
                    data={data}
                    width={Dimensions.get("window").width - 20} // from react-native
                    height={250}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={chartConfig}
                    bezier
                    style={{
                        borderRadius: 16,
                        marginHorizontal: 10
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default StatisticsScreen;