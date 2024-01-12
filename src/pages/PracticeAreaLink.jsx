import React from 'react'
import Header from '../Components/Header'
import TopHeader from '../Components/TopHeader'
import PracticeAreas from '../Components/Practice-Areas'
import Consultation from '../Components/Consultation'

import Footer from '../Components/Footer'


const PracticeAreaLink = () => {
  return (
    <>
    <TopHeader />
    <Header />
   <PracticeAreas />
   <Consultation />
    <Footer />
    </>
  )
}

export default PracticeAreaLink