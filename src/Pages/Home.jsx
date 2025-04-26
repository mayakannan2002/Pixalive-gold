import React from 'react'
import Headermain from './../Components/Header/Header'
import Hero from '../Components/Home/Hero'
import Network from '../Components/Home/Network'
import TrendingProducts from '../Components/Home/Trending'
import SecuredBy from '../Components/Home/Secured'
import Divisions from '../Components/Home/Division'
import CustomerReview from '../Components/Home/Review'
import Contact from '../Components/Home/Contact'

const Home = () => {
  return (
    <div>
       <Headermain />
       <Hero/>
       <Network/>
       <Divisions/>
       <TrendingProducts/>
       
       <SecuredBy/>
       <CustomerReview/>
       <Contact/>
    </div>
  )
}

export default Home
