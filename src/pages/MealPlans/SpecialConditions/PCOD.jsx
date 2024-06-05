import React from 'react'
import Header from '../../../components/home/Header/Header'
import HeaderBottom from '../../../components/home/Header/HeaderBottom'
import Footer from '../../../components/home/Footer/Footer'
import FooterBottom from '../../../components/home/Footer/FooterBottom'
import Pcod from '../../../components/MealPlans/SpecialCOnditions/Pcod'

export default function PCODdiet() {
  return (
    <div>
   <Header />
      <HeaderBottom />
     <Pcod />
     <Footer />
     <FooterBottom />
    </div>
  )
}
