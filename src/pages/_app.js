import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";

// import { useFonts } from "expo-font";
// import { StatusBar } from "expo-status-bar";

// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle, Theme } from '../styles/GlobalStyle';

export default function myApp({ Component, pageprops }) {
  // const [fontsLoaded] = useFonts({
  //   SourceCodePro: require("../fonts/avenir-regular.ttf"),
  //   SourceCode: require("../fonts/avenir-regular.ttf"),
  // });
  // if (!fontsLoaded) {
  //   return <p>Loading...</p>;
  // }
  return (
    // <ThemeProvider theme={Theme}>
    //   <GlobalStyle/>
    <Component {...pageprops} />
    // </ThemeProvider>
  );
}
