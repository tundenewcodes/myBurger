import React, { useState, useRef } from 'react'
import Burger from '../components/Burger/Burger'
import Header from '../components/Layout/navigation/Header'
import styles from '../styles/checkoutPage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Spinner from '../components/Modal/Spinner'
import { ingredientsActions } from '../store/ingredient-slice'
import Head from 'next/head'
// const validInput = (value) => value.trim() !== ''
// const emailValid = (value) => value.includes('@')
// const isFiveChars = (value) => value.trim().length >= 5
const isEmpty  = value => value.trim() === ''
const isValid = value => value.trim().includes( '@' )
const isFiveChars = value => value.trim().length >= 5
const Checkout = () => {
  const dispatch = useDispatch()
  const [formInputValidity, setformInputValidity] = useState({
    name: true,
    city: true,
    postal: true,
    email: true,
  })
  const [isTouched, setIsTouched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const nameRef = useRef()
  const cityRef = useRef()
  const emailRef = useRef()
  const postalRef = useRef()
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  
  const totalPrice = useSelector(
    (state) => state.ingredients.totalPrice
  )
  const ingredients = useSelector( state => state.ingredients.ingredients)
  const showFormHandler = () => {
    setShowForm(true)
  }
  const touchHandler = () => {
  setIsTouched(true)
}

  const getOrders = async() => {
    const resp = await fetch( 'https://my-burger-app-a4b10-default-rtdb.firebaseio.com/burgers.json' )
    
    const data = await resp.json()
    console.log(data.length)
     dispatch(ingredientsActions.orderItems(data))
  }
  const submitFormHandler = async ( e ) => {
    setIsLoading(true)
    e.preventDefault()
    const enteredName = nameRef.current.value
    const enteredCity = cityRef.current.value
    const enteredEmail = emailRef.current.value
    const enteredPostal = postalRef.current.value
   

    const nameIsValid = !isEmpty(enteredName)
    const cityIsValid = !isEmpty(enteredCity)
    const emailIsValid = isValid(enteredEmail)
    const postalIsValid = isFiveChars(enteredPostal)

   

    setformInputValidity({
      name: nameIsValid,
      city: cityIsValid,
      email: emailIsValid,
      postal: postalIsValid,
    })

    console.log(formInputValidity.name, formInputValidity.city, formInputValidity.email, formInputValidity.postal)

    const formisValid =
      nameIsValid && cityIsValid && emailIsValid && postalIsValid
const formData = {
  name: enteredName,
  city: enteredCity,
  email: enteredEmail,
  postal: enteredPostal,
}
    if (!formisValid) {
      return
    } 
  await  fetch( 'https://my-burger-app-a4b10-default-rtdb.firebaseio.com/burgers.json', {
      method: 'POST',
      body: JSON.stringify( {formData,ingredients,totalPrice} ),
      headers: {
        'content-type':'application/json' 
      }
  } )
    setIsLoading(false)
    router.push( '/' )
  getOrders()
  
    
  }

  const nameClass = `${styles.formEl} ${isTouched && formInputValidity.name ? '' : styles.invalid}`
  const cityClass = `${styles.formEl} ${isTouched && formInputValidity.city ? '' : styles.invalid}`
  const emailClass = `${styles.formEl} ${isTouched && formInputValidity.email ? '' : styles.invalid}`
  const postalClass = `${styles.formEl} ${isTouched && formInputValidity.postal ? '' : styles.invalid}`
  return (
    <React.Fragment>
      <Head>
        <title> checkout page </title>{' '}
        <meta
          name='description'
          content='confirm and make order here'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.checkout}>
        <Header />
        <h2 style={{ marginTop: '60px', marginLeft: '550px' }}>
          we hope it tastes well!
        </h2>
        <Burger />

        <p style={{ textAlign: 'center', fontSize: '25px' }}>
          total price is : ₦ {totalPrice}
        </p>
        {!showForm && (
          <div className={styles.btnDiv}>
            <button
              className={styles.button}
              onClick={() => router.back()}>
              cancel
            </button>
            <button onClick={showFormHandler}>continue</button>
          </div>
        )}
        {isLoading && <Spinner />}
        {showForm && (
          <div className={styles.form}>
            <p> enter your contact data</p>
            <form onSubmit={submitFormHandler}>
              <div className={nameClass}>
                {' '}
                <label htmlFor='name'>name</label>
                <input
                  type='text'
                  ref={nameRef}
                  onChange={touchHandler}
                />
                {!formInputValidity.name && !isTouched && (
                  <p> enter correct name</p>
                )}
              </div>
              <div className={cityClass}>
                {' '}
                <label htmlFor='city'>city</label>
                <input type='text' ref={cityRef} />
                {!formInputValidity.city && !isTouched && (
                  <p> enter correct a city name</p>
                )}
              </div>
              <div className={emailClass}>
                {' '}
                <label htmlFor='email'>email</label>
                <input type='text' ref={emailRef} />
                {!formInputValidity.email && !isTouched && (
                  <p>please enter valid email must include @</p>
                )}
              </div>

              <div className={postalClass}>
                {' '}
                <label htmlFor='postalCode'>postalCode</label>
                <input type='text' ref={postalRef} />
                {!formInputValidity.postal && !isTouched && (
                  <p>
                    please enter valid postal code at least 5 chars
                  </p>
                )}
              </div>

              <div className={styles.btnDiv1}>
                <button
                  className={styles.button}
                  onClick={() => router.back()}>
                  cancel
                </button>
                <button onClick={submitFormHandler}>continue</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default Checkout
