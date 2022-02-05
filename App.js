import React from "react";
import LocaleProvider from "./src/Internalization/LocaleProvider";
import RootNavigator from "./src/Navigation/RootNavigator";
import ReduxProvider from "./src/Store/ReduxProvider";
import {Provider as PaperProvider} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
    return (
        <ReduxProvider>
            <PaperProvider>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </PaperProvider>
        </ReduxProvider>
    );
};

export default App;
