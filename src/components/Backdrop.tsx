// importing from react-dom
import React, { Fragment, ReactNode } from "react";

// importing stylesheet
import style from "../styles/Backdrop.module.css";

interface BackdropProp {
  closeBackdrop: () => void;
  children: ReactNode;
}

export const Backdrop = (props: BackdropProp): JSX.Element => {
  return (
    <div className={style.backdrop} onClick={props.closeBackdrop}>
      {props.children}
    </div>
  );
};

export default Backdrop;
