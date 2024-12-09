import React from "react";
import { useEffect } from "react";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./Pages/Home.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const colors = {
    dark: {
        100: "#06090F",
        200:'#151B26',
        300:'#050911'
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
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <HomePage />
            </React.StrictMode>
        </ChakraProvider>
    );
};

export default App;
