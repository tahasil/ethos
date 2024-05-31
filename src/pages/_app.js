import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../app/globals.css";
//import "../app/master.css";
import "../app/master3.css";

//import AnimatedCursor from "../component/cursor1";
import AnimatedCursor from "react-animated-cursor";

export default function myApp({ Component, pageprops }) {
  return (
    <div className="App">
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
    </div>
  );
}
