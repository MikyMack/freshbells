import React from 'react'
import Header from '../../../components/home/Header/Header'
import HeaderBottom from '../../../components/home/Header/HeaderBottom'
import Footer from '../../../components/home/Footer/Footer'
import FooterBottom from '../../../components/home/Footer/FooterBottom'
import Geriatric from "../../../components/MealPlans/DietPlanForAge/Geriatric" 

export default function GeriatricDiet() {
  return (
    <div>
          <Header />
            <HeaderBottom />
            <Geriatric />
            <Footer />
            <FooterBottom />
    </div>
  )
}
