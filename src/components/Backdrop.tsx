// importing from react-dom
import React, { Fragment } from "react";

// importing stylesheet
import style from "../styles/Backdrop.module.css";

interface BackdropProp {
  closeBackdrop: () => void;
}

export const Backdrop = (props: BackdropProp): JSX.Element => {
  return <div className={style.backdrop} onClick={props.closeBackdrop}></div>;
};

export default Backdrop;
