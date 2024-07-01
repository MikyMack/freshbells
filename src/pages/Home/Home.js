import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import Features from "../../components/features/Features";
import Offer from "../../components/home/OfferCard/Offer";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import HomeNutritionForm from "../../components/SpecialCase/HomeNutritionForm";
import { fetchHomeDetails } from "../../actions/HomeActions";
import Loader from "../../components/Loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpecialCase from "../../components/SpecialCase/SpecialCase";
import "./Home.css"

const Home = () => {
  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();
  const [showNutritionForm, setShowNutritionForm] = useState(false);

  const closeNutritionForm = () => {
    setShowNutritionForm(false);
    localStorage.setItem('nutritionFormClosed', 'true'); 
  };

  useEffect(() => {
    const isFormClosed = localStorage.getItem('nutritionFormClosed') === 'true';
    if (!isFormClosed) {
      const timer = setTimeout(() => {
        setShowNutritionForm(true);
      }, 4000); 
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchHomeDetails());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="parent-div">
      {showNutritionForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <HomeNutritionForm onClose={closeNutritionForm}/>
          <button onClick={closeNutritionForm} className="absolute top-5 right-5 text-white text-2xl">&times;</button>
        </div>
      )}
      <Header />
      <HeaderBottom />
      <ToastContainer />
      <div className="w-full mx-auto overflow-x-hidden scroll-smooth bg-[#EFFDEC]">
        <Banner />
        <SpecialCase />
        <BannerBottom />
        <div className="mx-auto px-4 mt-10">
          <NewArrivals />
        </div>
        <Features />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
        <div className="overflow-hidden mb-8 shadow-lg">
          <Sale />
        </div>
        <Offer />
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Home;
