import React from 'react'
import Header from '../../../components/home/Header/Header'
import HeaderBottom from '../../../components/home/Header/HeaderBottom'
import Footer from '../../../components/home/Footer/Footer'
import FooterBottom from '../../../components/home/Footer/FooterBottom'
import Schoolgoing from '../../../components/MealPlans/DietPlanForAge/SchoolGoing'

export default function SchoolKids() {
  return (
    <div>
        <Header />
        <HeaderBottom />
        <Schoolgoing />
        <Footer />
        <FooterBottom />
    </div>
  )
}
