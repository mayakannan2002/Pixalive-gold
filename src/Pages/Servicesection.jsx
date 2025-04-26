import React from 'react'
import Header from '../Components/Division/Header'
import Servicehero from '../Components/Services/Servicehero'
import Servicestartegic from '../Components/Services/Servicestartegic'
import Servicecards from '../Components/Services/Servicecards'
import Benefits from '../Components/Services/Benefits'

const Servicesection = () => {
  return (
    <div>
      <Header/>
      <Servicehero/>
      <Servicecards/>
      <Benefits/>
      <Servicestartegic/>

    </div>
  )
}

export default Servicesection
