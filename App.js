import React from "react";
import LocaleProvider from "./src/Internalization/LocaleProvider";
import RootNavigator from "./src/Navigation/RootNavigator";
import ReduxProvider from "./src/Store/ReduxProvider";
import {Provider as PaperProvider} from "react-native-paper";


const App = () => {
    return (
        <ReduxProvider>
            <PaperProvider>
                <LocaleProvider>
                    <RootNavigator />
                </LocaleProvider>
            </PaperProvider>
        </ReduxProvider>
    );
};

export default App;
