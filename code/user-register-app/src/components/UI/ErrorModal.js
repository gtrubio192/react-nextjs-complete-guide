import React from 'react'
import classes from './ErrorModal.module.css';

const ErrorModal = ({onClose, message, title, isOpen}) => {
    return (
      <div className={classes.backdrop} onClick={onClose}>
        <div className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>
            <p>{message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={onClose}>Okay</button>
          </footer>
        </div>
      </div>
    );
}

export default ErrorModal;
