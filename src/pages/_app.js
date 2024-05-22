import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle, Theme } from '../styles/GlobalStyle';

export default function myApp({ Component, pageprops }) {
  return (
    // <ThemeProvider theme={Theme}>
    //   <GlobalStyle/>
      <Component {...pageprops} />
    // </ThemeProvider>
  );
}
