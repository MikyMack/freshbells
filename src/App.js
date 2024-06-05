// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
//   createRoutesFromElements,
//   Route,
//   ScrollRestoration,
// } from "react-router-dom";
// import SpecialCase from "./components/SpecialCase/SpecialCase";
// import About from "./pages/About/About";
// import SignIn from "./pages/Account/SignIn";
// import SignUp from "./pages/Account/SignUp";
// import Cart from "./pages/Cart/Cart";
// import Contact from "./pages/Contact/Contact";
// import Home from "./pages/Home/Home";
// import Offer from "./pages/Offer/Offer";
// import Payment from "./pages/payment/Payment";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
// import Shop from "./pages/Shop/Shop";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState } from "react";
// import Loader from "./components/Loader/Loader";
// import Profile from "./pages/Profile/Profile";
// import ComboStore from "./pages/ComboStore/ComboStore";
// import PremiumProducts from "./pages/ComboStore/PremiumProducts";
// import HealthyDelights from "./pages/ComboStore/HealthyDeli";
// import WeightsLoss from "./pages/MealPlans/HealthyDiets/WeightsLoss";

// const Layout = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 100, 
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <>
   
//       <SpecialCase />
//       <ScrollRestoration />
//       <Outlet />
 
//     </>
//   );
// };

// const HomeLayout = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Loader loading="lazy" />;
//   }

//   return (
//     <Layout>
//       <Outlet />
//     </Layout>
//   );
// };

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<HomeLayout />}>
//       <Route index element={<Home />} />
//       <Route path="home" element={<Home />} />
//       <Route path="shop" element={<Shop />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="superfoods" element={<ComboStore />} />
//       <Route path="offer" element={<Offer />} />
//       <Route path="productDetails" element={<ProductDetails />} />
//       <Route path="cart" element={<Cart />} />
//       <Route path="paymentgateway" element={<Payment />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="signup" element={<SignUp />} />
//       <Route path="signin" element={<SignIn />} />
//       <Route path="premiumproducts" element={<PremiumProducts/>} />
//       <Route path="healthydelights" element={<HealthyDelights/>} />
//       <Route path="WeightsLoss" element={<WeightsLoss/>} />
//     </Route>
//   )
// );

// function App() {
//   return (
//     <div className="font-body2 bg-white">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
// App.js

// App.js
import React from 'react';
import MainRoutes from './Routes/MainRoutes';

export default function App() {
    return (
        <React.StrictMode>
            <MainRoutes />
        </React.StrictMode>
    );
}



