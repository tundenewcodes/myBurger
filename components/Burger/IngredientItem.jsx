import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ingredientsActions} from '../../store/ingredient-slice'
import styles  from '../../styles/BurgerControl.module.css'
const IngredientItem = ( { name, price } ) => {
  const ingredients = useSelector(state => state.ingredients.ingredients)
    const dispatch = useDispatch()
  const addIngredients = () => {
       //dispatch(ingredientsActions.makeOrder)
      dispatch( ingredientsActions.addIngredient( name ) )
     
    }
  const removeIngredients = () => {
    
   // dispatch( ingredientsActions.makeOrder )
    dispatch( ingredientsActions.removeIngredients( name ) )
    }
    const disableButton = ingredients[name] === 0
  return (
    <div >
      <div className={styles.Items}>
        <p>{name}</p>
        <p>`₦{price}`</p>
        <button className={styles.Remove} disabled = {disableButton}  onClick = {removeIngredients}>remove item</button>
        <button className={styles.Button}  onClick ={addIngredients}>add item</button>
      </div>
    </div>
  )
}

export default IngredientItem