import React from "react";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./Pages/Home.jsx";

const colors = {
    dark: {
        100: "#06090F",
    },
    textColor: {
        100: "white",
        200: "#E9E9E9",
    },
    blueGradient: {
        100: "#6686F6",
    },
};

const theme = extendTheme({ colors });

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <HomePage />
            </React.StrictMode>
        </ChakraProvider>
    );
};

export default App;
