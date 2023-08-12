import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from '../Styles/Modal.module.css'


const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const Overlays = props => {
    return (
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    );
}

const Modal = (props) => {
    const portalElement = document.getElementById('overlays-root')
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart}/>, portalElement)}
            {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>, portalElement)}
        </>
    );
}

export default Modal;
