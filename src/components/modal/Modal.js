import React from 'react';

const Modal = (props) => {

    const Backdrop = (props) => {
        return (<div className={classes.backdrop} onClick={props.onClose} />);
    };

    const ModalOverlay = (props) => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onClose}>Okay</Button>
                </footer>
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

export default ErrorModal;
