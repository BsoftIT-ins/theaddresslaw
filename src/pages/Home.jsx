import React from 'react'

import Header from '../Components/Header';
import TopHeader from '../Components/TopHeader';
import SliderArea from '../Components/SliderArea';
import Footer from '../Components/Footer';
import Consultation from '../Components/Consultation';
import AboutUs from '../Components/AboutUs';
import Experience from '../Components/Experience';
import LegalTeam from '../Components/LegalTeam';

import Blog from '../Components/BlogContent';
import PracticeAreaContent from '../Components/PracticeAreaContent';


const Home = () => {
  return (
    <div>

        <TopHeader />
        <Header />
        <SliderArea/> 
        <Consultation />
        <AboutUs />
        <Experience />
        <PracticeAreaContent /> 
        <LegalTeam />
       
        <Blog />
        

        <Footer /> 
    </div>
  

  )
}

export default Home