// importing from react-dom
import React, { Fragment } from "react";
import { createPortal } from "react-dom";

// importing stylesheet
import style from "../styles/Backdrop.module.css";

interface BackdropProp {
  clicked: () => void;
}

export const Backdrop = (props: BackdropProp): JSX.Element => {
  return <div className={style.backdrop} onClick={props.clicked}></div>;
};

interface PortalProp {
  element?: React.ReactNode;
  closeBackdrop: () => void;
}

const Portal: React.FC<PortalProp> = ({ element, closeBackdrop }) => {
  const portalEl = document.getElementById("portal") as HTMLElement;
  return (
    <Fragment>
      {createPortal(<Backdrop clicked={closeBackdrop} />, portalEl)}
      {createPortal(element, portalEl)}
    </Fragment>
  );
};

export default Portal;
