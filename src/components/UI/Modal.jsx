import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from '../Styles/Modal.module.css'


const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const Overlays = props => {
    return <div className={classes.modal}>{props.children}</div>
}

const Modal = () => {
    const portalElement = document.getElementById('overlays-root')
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<Overlays />, portalElement)}
        </>
    );
}

export default Modal;
