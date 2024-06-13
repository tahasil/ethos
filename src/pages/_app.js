import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../app/globals.css";
//import "../app/master.css";
import "../app/master3.css";

//import AnimatedCursor from "../component/cursor1";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head";
import { Spin } from "antd";

export default function myApp({ Component, pageprops }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Head>
        <title>Aethos</title>
        <link rel="icon" href="/images/logo2.svg" />
      </Head>

      {loading ? (
        <Spin fullscreen></Spin>
      ) : (
        <>
          <AnimatedCursor
            color="58,127,208"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={1}
            hasBlendMode={true}
            outerStyle={{
              mixBlendMode: "exclusion",
              zIndex: "999",
            }}
            innerStyle={{
              backgroundColor: "#FFFFFF",
              mixBlendMode: "exclusion",
            }}
            clickables={[
              "a, p, h1, h2, h3, h4, h5, h6, span",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          <Component {...pageprops} />
        </>
      )}
    </div>
  );
}
