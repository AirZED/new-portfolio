// importing from react-dom
import React, { Fragment, ReactNode } from "react";

interface BackdropProp {
  closeBackdrop: () => void;
  children: ReactNode;
}

export const Backdrop = (props: BackdropProp): JSX.Element => {
  return (
    <div className="w-screen h-screen fixed bg-[var(--backdrop)] z-[99] top-0 right-0 left-0 bottom-0 overflow-hidden max-[700px]:h-auto max-[700px]:overflow-auto" onClick={props.closeBackdrop}>
      {props.children}
    </div>
  );
};

export default Backdrop;
