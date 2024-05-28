import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../app/globals.css";
import "../app/master.css";

import AnimatedCursor from "../component/cursor1";

export default function myApp({ Component, pageprops }) {
  return (
    <div className="App">
      <AnimatedCursor />
      <Component {...pageprops} />
    </div>
  );
}
