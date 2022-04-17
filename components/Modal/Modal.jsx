import React from 'react'
import Backdrop from './Backdrop'
import CheckoutSummary from './CheckoutSummary'
import styles from '../../styles/Modal.module.css'
const Modal = (props) => {
  return (
    <React.Fragment>
      {' '}
      <Backdrop close = {props.close} />
      <div className={styles.Modal}>
        <div className={styles.CheckoutDiv}>
          <CheckoutSummary close = {props.close} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal