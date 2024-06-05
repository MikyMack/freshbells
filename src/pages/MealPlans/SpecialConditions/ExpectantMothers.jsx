import React from 'react'
import ExpectantMothers from "../../../components/MealPlans/SpecialCOnditions/ExpectantMothers"
import Header from '../../../components/home/Header/Header'
import HeaderBottom from '../../../components/home/Header/HeaderBottom'
import Footer from '../../../components/home/Footer/Footer'
import FooterBottom from '../../../components/home/Footer/FooterBottom'

export default function ExpectantMothersDiet() {
  return (
    <div>
      <Header />
      <HeaderBottom />
     <ExpectantMothers />
     <Footer />
     <FooterBottom />
    </div>
  )
}
