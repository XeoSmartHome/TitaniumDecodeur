import React from "react";
import {ScrollView, Dimensions, Text, View} from "react-native";
import {BarChart, LineChart, PieChart} from "react-native-chart-kit";
import {TimisoaraColors} from "../Style/Colors";
import {CITY_PASS_SOLD_IN_6_MONTHS} from "../FakeBackend/statistics";


const StatisticsScreen = () => {

    const data1 = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: CITY_PASS_SOLD_IN_6_MONTHS
            }
        ]
    };

    const data2 = {
        labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        datasets: [
            {
                data: [15, 18, 7, 5, 19, 23, 43]
            }
        ]
    };

    const data3 = [
        {
            name: "visitors <18",
            population: 102,
            color: TimisoaraColors.MikadoYellow,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "visitors 18-24",
            population: 56,
            color: TimisoaraColors.DarkLiver,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "visitors 25-34",
            population: 38,
            color: TimisoaraColors.RedPigment,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "visitors 35-44",
            population: 42,
            color: TimisoaraColors.WindsonTan,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "visitors 45-54",
            population: 28,
            color: 'orange',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "visitors 55+",
            population: 31,
            color: TimisoaraColors.RaisinBlack,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

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
        },
    };

    return (
        <ScrollView>
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
                    data={data1}
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
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        margin: 20
                    }}
                >
                    Tickets scanned last week
                </Text>
                <BarChart
                    data={data2}
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
            <View
                style={{marginBottom:50}}
            >
                <Text
                    style={{
                        fontSize: 20,
                        margin: 20
                    }}
                >
                    Visitors ages
                </Text>
                <PieChart
                    data={data3}
                    width={Dimensions.get("window").width - 20}
                    height={250}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[10, 0]}
                    absolute
                />
            </View>
        </ScrollView>
    );
};

export default StatisticsScreen;