import React from 'react'
import HomeBanner from '../../../Component/Home/HomeBanner'
import AnalyticBox from '../../../Component/Home/AnalyticBox'
import HomeBusiness from '../../../Component/Home/HomeBusiness'
import HomeWork from '../../../Component/Home/HomeWork'
import HomeSocial from '../../../Component/Home/HomeSocial'
import HomePlan from '../../../Component/Home/HomePlan'
import HomeTestimonial from '../../../Component/Home/HomeTestimonial'

import './Home.css'

interface AuxProps {
  
}

const HomeFont: React.FC<AuxProps> = () => {
  return (
    <>

      <HomeBanner />


      <AnalyticBox />

      <HomeBusiness />


      <HomeWork />

      <HomeSocial />


      <HomePlan />


      <HomeTestimonial />

    </>
  )
}

export default HomeFont
