import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BurgerRecipes from './BurgerRecipes'
import styles from '../../styles/Burger.module.css'

const Burger = () => {
  const ingredients = useSelector(
    (state) => state.ingredients.ingredients
  )
  const factorIngredients = Object.keys(ingredients).map(
    (ingKeys) => {
      return [...Array(ingredients[ingKeys])].map((_, i) => {
        return <BurgerRecipes key={ingKeys + i} type={ingKeys} />
      })
    }
  )
  const checkBurgerQty = Object.keys( ingredients ).map( ingKey => {
    return ingredients[ingKey]
  })
    .reduce(
    (prev, currEl) => {
      return prev + currEl
    },
    []
  )
  let burgerIngredients
  if ( checkBurgerQty > 0 ) {
    burgerIngredients = factorIngredients
  } else {
    burgerIngredients = <p>please add ingredients</p>
  }
  return (
    <div className={styles.Burger}>
      <BurgerRecipes type='bread-top' />
     {burgerIngredients}
      <BurgerRecipes type='bread-bottom' />
    </div>
  )
}

export default Burger
