/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { useState, useContext, useCallback } from "react";
import { createPortal } from "react-dom";

const ModalContext = React.createContext(null);

const ModelWrapper = (props) => {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "rgb(0, 0, 0, 0.5)",
      }}
    >
      {props.children}
    </div>
  );
};

const Modal = ({ modal }) => {
  return createPortal(
    <ModelWrapper>{modal}</ModelWrapper>,
    document.querySelector("#modal")
  );
};

const ModalProvider = (props) => {
  const [modal, setModal] = useState();
  const unSetModal = useCallback(() => {
    setModal(null);
  }, [setModal]);

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} />}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export { useModal, ModalProvider };
