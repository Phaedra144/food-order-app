import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '../cart/Cart';
import Card from '../UI/Card';
import classes from './Modal.module.css';

const Modal = (props) => {

    const Backdrop = (props) => {
        return (<div className={classes.backdrop} onClick={props.onClose} />);
    };

    const ModalOverlay = (props) => {
        return (
            <Card className={classes.modal}>
                <Cart onCloseModal={props.onClose} />
            </Card>
        );
    };

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onClose={props.onClose} title={props.title} message={props.message} />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
};

export default Modal;
