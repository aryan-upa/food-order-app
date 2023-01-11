import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById('overlay')

const Modal = props => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;