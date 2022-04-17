import React from 'react'
import  Header from './navigation/Header'
import styles from '../../styles/Layout.module.css'
// import Burger from '../Burger/Burger'
// import BurgerRecipes from '../Burger/BurgerControls'
const Layout = (props) => {
  return (
      <section className={styles.Layout}>
          <header ><Header/></header>
          <main>
              {props.children}
          </main>
   </section>
  )
}

export default Layout