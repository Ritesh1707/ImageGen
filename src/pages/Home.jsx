import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
