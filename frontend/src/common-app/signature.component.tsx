import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import { useStyles } from "./signature.styles";

export const SignatureComponent = () => {
  const [firma, setFirma] = React.useState(null);

  const sigPad = React.useRef(null);

  const styles = useStyles({});
  return (
    <>
    <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignaturePad
          canvasProps={{ className: styles.sigPad }}
          ref={sigPad}
        />
      </div>
    </div>
    <button onClick={()=>setFirma(sigPad.current.toData())}>Save</button>
    <button onClick={()=>sigPad.current.clear()}>Clear</button>
    <button onClick={()=>sigPad.current.fromData(firma)}>Load</button>
    </>
  );
};
