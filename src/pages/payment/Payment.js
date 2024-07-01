import React from "react";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import PaymentDO from "../../components/Payment/Payment";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
       <Header />
       <HeaderBottom />
       <PaymentDO />
       <Footer />
       <FooterBottom />
    </div>
  );
};

export default Payment;
