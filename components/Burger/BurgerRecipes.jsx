import React from 'react'
import styles from '../../styles/BurgerRecipes.module.css'
import PropTypes from 'prop-types';
const BurgerRecipes = (props) => {
    let ingredients = null
    switch ( props.type ) {
        case ('bread-bottom'): ingredients = <div className={styles.BreadBottom}></div>
            break
      case ('bread-top'): ingredients = <div className={styles.BreadTop}>
        <div className={styles.Seeds1}></div>
        <div className={styles.Seeds2}></div>
        </div>
        break
      case ('meat'): ingredients = <div className={styles.Meat}></div>
        break
      case ('salad'): ingredients = <div className={styles.Salad}></div>
        break
      case ('bacon'): ingredients = <div className={styles.Bacon}></div>
        break
      case ('cheese'): ingredients = <div className={styles.Cheese}></div>
        break
      default : ingredients = null
      

      
}
  return ingredients
}
BurgerRecipes.propTypes = {
  type : PropTypes.string.isRequired
}
export default BurgerRecipes