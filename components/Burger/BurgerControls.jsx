import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/BurgerControl.module.css'
import IngredientItem from './IngredientItem'
const BurgerControls = (props) => {
 
    const ingredientPrice = useSelector(
      (state) => state.ingredients.ingredientPrices
  )
  const makeOrder = useSelector(state =>state.ingredients.purchase)
    const totalPrice = useSelector( state => state.ingredients.totalPrice)
    const controlIngredients = Object.keys( ingredientPrice ).map( (ingKey, i) => {
        return <IngredientItem  key = {ingKey + i} name = {ingKey} price = {ingredientPrice[ingKey]}/>
    } )
  
  return (
    <div className={styles.Control}>
      <p className={styles.text}>Total price  is : ₦ {totalPrice}</p>
      {controlIngredients}
      <button
        disabled={!makeOrder}
        className={styles.Order}
        onClick={props.modal}>
        Order Now
      </button>
    </div>
  )
}

export default BurgerControls
