import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import { useStyles } from "./signature.styles";
import { getThemeProps } from "@material-ui/styles";


interface Props {
  modeLectura: boolean;
  setImageFirma?: (o: []) => void;
  imageFirma: [];
}

export const SignatureComponent = (props: Props) => {
  //const [firma, setFirma] = React.useState(null);

  const sigPad = React.useRef(null);

  if (props.imageFirma) {
    sigPad.current.fromData(props.imageFirma);
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
      (!props.modeLectura) &&
        (<>
          <button onClick={() => props.setImageFirma(sigPad.current.toData())}>Save</button>
          <button onClick={()=>sigPad.current.clear()}>Clear</button>
        </>)
    }

    {/*
    <button onClick={()=>setFirma(sigPad.current.toData())}>Save</button>
    <button onClick={()=>sigPad.current.fromData(firma)}>Load</button>
    */}
    </>
  );
};


