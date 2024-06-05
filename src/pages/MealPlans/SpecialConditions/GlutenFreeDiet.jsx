import React from 'react'
import GlutenFree from '../../../components/MealPlans/SpecialCOnditions/GlutenFree'
import Header from '../../../components/home/Header/Header'
import HeaderBottom from '../../../components/home/Header/HeaderBottom'
import Footer from '../../../components/home/Footer/Footer'
import FooterBottom from '../../../components/home/Footer/FooterBottom'

export default function GlutenFreeDiet() {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <GlutenFree />
      <Footer />
      <FooterBottom />
    </div>
  )
}
