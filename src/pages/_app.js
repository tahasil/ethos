import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../app/globals.css";
import "../app/master.css";

export default function myApp({ Component, pageprops }) {
  return <Component {...pageprops} />;
}
