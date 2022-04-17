import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/navigation/Header'
import OrderItems from '../orders/OrderItems'
import { useDispatch } from 'react-redux'
import { ingredientsActions } from '../store/ingredient-slice'
import Spinner from '../components/Modal/Spinner'
import Head from 'next/head'

const Order = () => {
  //const price = useSelector(state =>state.ingredients.totalPrice)
  const [ allData, getAllData ] = useState( [] )
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect( () => {
    setIsLoading(true)
    const getOrders = async () => {
      const response = await fetch(
        'https://my-burger-app-a4b10-default-rtdb.firebaseio.com/burgers.json'
      )
      if ( !response.ok ) {
        throw new Error( 'something went wrong check network' )
      }
      const responseData = await response.json()
      //getAllData(responseData)
      
      let orderList = []

      for ( let key in responseData ) {
        orderList.push( {
          id: key,
          name: responseData[ key ].formData.name,
          email: responseData[ key ].formData.email,
          baconAmt: responseData[ key ].ingredients.bacon,
          cheeseAmt: responseData[ key ].ingredients.cheese,
          saladAmt: responseData[ key ].ingredients.salad,
          meatAmt: responseData[ key ].ingredients.meat,
          price: responseData[ key ].totalPrice,
        } )

      }
      getAllData( orderList )
      setIsLoading( false )
      
    }
    getOrders().catch( ( error ) => {
      error.message
    } )
  }, [])

console.log(allData)
  
  const myOrderList = allData.map((mydata) => {
    return (
     
      <OrderItems
        key={mydata.id}
        name={mydata.name}
        email={mydata.email}
        baconAmt={mydata.baconAmt}
        cheeseAmt={mydata.cheeseAmt}
        saladAmt={mydata.saladAmt}
        meatAmt={mydata.meatAmt}
        price={mydata.price}
      />
    )
  })
 
  return (
    <div>
      <Head>
        <title> order summary </title>{' '}
        <meta
          name='description'
          content='list of all orders made so far'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main
        style={{ marginTop: '80px', backgroundColor: 'aliceblue' }}>
        {isLoading && <Spinner />}
        {myOrderList}
      </main>
    </div>
  )
}

export default Order
