import { Fragment } from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css';
const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {/* {(ReactDom.createPortal(<Backdrop />), portalElement)}
      {
        (ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>),
        portalElement)
      } */}
    </Fragment>
  );
};

export default Modal;
