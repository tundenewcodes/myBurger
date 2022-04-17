import React, { useEffect, useState } from 'react'
import  styles from '../../../styles/header.module.css'
import Logo from '../../logo/Logo'
import Link from 'next/link'
import { useSelector } from 'react-redux'
const Header = (props) => {
  const [bump, setBump] = useState(false)
  const orders = useSelector( state => state.ingredients.order )
  const orderLength = orders.length

  useEffect( () => {
    if ( orderLength === 0 ) {
      return
    }
    setBump(true)
    const timer = setTimeout( () => { setBump( false ) }, 300 )
    return ()=>{clearTimeout(timer)}
  },[orderLength])

  const bumpClass = bump ? `${styles.bump}` : ''
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Logo />
        </div>
        <ul>
          
          <li>
            <Link href={'/'}>burger page</Link>
          </li>
          <li>
            <Link href={'checkout'}>checkout page</Link>{' '}
          </li>
          <li className={bumpClass}>
            <Link href={'Order'}>Orders </Link>{' '}
            <span className={styles.badge}>+{orderLength}</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header