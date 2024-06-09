
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import PublicRoutes from '../utils/PublicRoutes';
import SignIn from '../pages/Account/SignIn';
import SignUp from '../pages/Account/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProtectedRoutes from '../utils/ProtectedRoutes';
import Shop from '../pages/Shop/Shop';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import ComboStore from '../pages/ComboStore/ComboStore';
import Offer from '../pages/Offer/Offer';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';
import Payment from '../pages/payment/Payment';
import Profile from '../pages/Profile/Profile';
import PremiumProducts from '../pages/ComboStore/PremiumProducts';
import HealthyDelights from '../pages/ComboStore/HealthyDeli';
import WeightsLoss from '../pages/MealPlans/HealthyDiets/WeightsLoss';
import Weightsgain from '../pages/MealPlans/HealthyDiets/WeightGain';
import WeaningDiet from '../pages/MealPlans/DietPlanForAge/WeaningDiet';
import SchoolKids from '../pages/MealPlans/DietPlanForAge/SchoolKids';
import AdultsDiet from '../pages/MealPlans/DietPlanForAge/AdultsDiet';
import GeriatricDiet from '../pages/MealPlans/DietPlanForAge/GeriatricDiet';
import ExpectantMothersDiet from '../pages/MealPlans/SpecialConditions/ExpectantMothers';
import LactatingMothersDiet from '../pages/MealPlans/SpecialConditions/LactatingMothers';
import PCODdiet from '../pages/MealPlans/SpecialConditions/PCOD';
import DiabetesMellitus from '../pages/MealPlans/SpecialConditions/DiabetesMellitus';
import GlutenFreeDiet from '../pages/MealPlans/SpecialConditions/GlutenFreeDiet';
import LactoseIntrolerent from '../pages/MealPlans/SpecialConditions/LactoseIntrolerent';
import OtpPage from '../pages/Account/Otp';

export default function MainRoutes() {
    const [showRoutes, setShowRoutes] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRoutes(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1200,
            easing: "ease-in",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return showRoutes ? (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/otppage" element={<OtpPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/productDetails" element={<ProductDetails />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/superfoods" element={<ComboStore />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/premiumproducts" element={<PremiumProducts />} />
                <Route path="/healthydelights" element={<HealthyDelights />} />
                <Route path="/WeightsLoss" element={<WeightsLoss />} />
                <Route path="/weightsGain" element={<Weightsgain />} />
                <Route path="/weaning" element={<WeaningDiet />} />
                <Route path="/schoolgoing" element={<SchoolKids />} />
                <Route path="/adults" element={<AdultsDiet />} />
                <Route path="/geriatric" element={<GeriatricDiet />} />
                <Route path="/expectantmothers" element={<ExpectantMothersDiet />} />
                <Route path="/lactatingmothers" element={<LactatingMothersDiet />} />
                <Route path="/pcod" element={<PCODdiet />} />
                <Route path="/diabetes-millets-diet" element={<DiabetesMellitus />} />
                <Route path="/gluten-free-diet" element={<GlutenFreeDiet />} />
                <Route path="/lactose-introlerent" element={<LactoseIntrolerent />} />
               
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />


            <Route element={<ProtectedRoutes />}>          
                <Route path="/paymentgateway" element={<Payment />} />
                <Route path="/profile" element={<Profile />} />          
            </Route>
        </Routes>
    ) : null;
}

