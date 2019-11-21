import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";

import styles from "./styles.module.css";

const App = (props) => {
  const [sigPad, setSigPad] = React.useState({});
  return (
    <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignaturePad
          canvasProps={{ className: styles.sigPad }}
          ref={ref => {
            setSigPad(ref);
          }}
        />
      </div>
    </div>
  );
};
