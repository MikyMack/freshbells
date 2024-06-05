import React from 'react'
import Header from '../../../components/home/Header/Header'
import HeaderBottom from '../../../components/home/Header/HeaderBottom'
import Footer from '../../../components/home/Footer/Footer'
import FooterBottom from '../../../components/home/Footer/FooterBottom'
import Weaning from '../../../components/MealPlans/DietPlanForAge/Weaning'

export default function WeaningDiet() {
  return (
    <div>
          <Header />
      <HeaderBottom />
      <Weaning />
      <Footer />
      <FooterBottom />
    </div>
  )
}
