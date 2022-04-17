import React from 'react'
import styles from '../styles/orderitems.module.css'
const OrderItems = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div>
          <p>customer name is : {props.name}</p>
          <p>customer email is : {props.email}</p>
        </div>
        <div className={styles.ingredients}>
          <p style={{ fontSize: '30px', marginTop: '-3px' }}>
            ingredients :
          </p>
          <div>
            <span>
              bacon <small>{props.baconAmt}</small>
            </span>
            <span>
              cheese <small>{props.cheeseAmt}</small>
            </span>
            <span>
              salad <small>{props.saladAmt}</small>
            </span>
            <span>
              meat <small>{props.meatAmt}</small>
            </span>
          </div>
        </div>
      </div>
      <p className={styles.containerp}>price : ₦{props.price}</p>
    </div>
  )
}

export default OrderItems