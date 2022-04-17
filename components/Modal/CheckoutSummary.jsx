import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/checkout.module.css'
import { useRouter } from 'next/router'

const CheckoutSummary = ( props ) => {
 
  const ingredients = useSelector( state => state.ingredients.ingredients )
   const router = useRouter()
    const summary = Object.keys( ingredients ).map( ingKey => {
        return (
          <li key={ingKey}  style ={{listStyleType : 'none'}}>
            <span>{ingKey}</span> : {ingredients[ingKey]}
          </li>
        )
    } )
    const totalPrice = useSelector( state =>state.ingredients.totalPrice)
  const makePurchaseHandler = () => {
      router.push('checkout')
    }
  return (
    <div className={styles.CheckOutSummary}>
      <h1>please see the summary of your order below</h1>
      <p>
        your orders are listed below with total price. you can choose
        to continue with the order or cancel
      </p>
      {summary}
      <p>total price is : {totalPrice} </p>
      <button className={styles.Close}  onClick={props.close}>cancel order</button>
      <button className={styles.Button} onClick = {makePurchaseHandler}>make purchase</button>
    </div>
  )
}

export default CheckoutSummary
