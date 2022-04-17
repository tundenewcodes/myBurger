import React from 'react'
import  styles from '../../styles/BackDrop.module.css'
const Backdrop = (props) => {
  return (
    <div className={styles.BackDrop}  onClick = {props.close}></div>
  )
}

export default Backdrop