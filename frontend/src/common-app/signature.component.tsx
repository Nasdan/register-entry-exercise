import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import { useStyles } from "./signature.styles";

interface Props {
  readOnly: boolean;
  setImageSignature?: (o: []) => void;
  imageSignature: [];
}

export const SignatureComponent = (props: Props) => {

  const sigPad = React.useRef(null);

  if (props.imageSignature) {
    sigPad.current.fromData(props.imageSignature);
  }

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
    {
      (!props.readOnly) &&
        (<>
          <button onClick={() => props.setImageSignature(sigPad.current.toData())}>Save</button>
          <button onClick={() => sigPad.current.clear()}>Clear</button>
        </>)
    }
    </>
  );
};


