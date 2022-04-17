import Head from 'next/head'
//import Header from '../components/Layout/navigation/Header'
import Burger from '../components/Burger/Burger'
import BurgerControls from '../components/Burger/BurgerControls'
import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Layout from '../components/Layout/Layout'
function Home() {
  const [ showModal, setShowModal ] = useState( false )
  
  const showModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }
  return (
    <div>
      <Head>
        <title> my burgerPage </title>{' '}
        <meta
          name='description'
          content='home page to homecooked burger'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>{' '}
      <Layout>
        <div>
          <section style={{maxHeight : '40vh'}}>
            <Burger />
          </section>
          <section style={{maxHeight : '30vh'}}>
            <BurgerControls modal={showModalHandler} />
          </section>
        </div>

        {showModal && <Modal close={closeModalHandler} />}
      </Layout>
    </div>
  )
}
export default Home
