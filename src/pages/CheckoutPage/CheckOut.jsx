import React from 'react'
import Header from '../../components/home/Header/Header'
import HeaderBottom from '../../components/home/Header/HeaderBottom'
import Footer from '../../components/home/Footer/Footer'
import FooterBottom from '../../components/home/Footer/FooterBottom'
import CheckoutForm from '../../components/Checkout/Checkout'

export default function CheckOut() {
  return (
    <div className='bg-[#EFFDEC]'>
        <Header />
        <HeaderBottom />
         <CheckoutForm />
        <Footer />
        <FooterBottom />
    </div>
  )
}
