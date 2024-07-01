import React from 'react'
import { IoNutrition } from "react-icons/io5";
import { GiPoisonBottle } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import bgi from "../../assets/animation/butterfly.json"
import Lottie from 'lottie-react';


export default function AboutUs() {
    return (
        <div>
            <div className='container mx-auto px-4 '>
                <div className='flex flex-col items-center justify-center mt-8'>
                    <h1 className='text-3xl font-semibold mb-5 text-primeColor'>Why Us ?</h1>
                    <p className='text-lg text-primeColor'>
                        We provide you with natural and organically grown products cultivated under our surveillance and supervision. From farming to packaging, we perform every function with utmost care and as per our principles of authenticity and purity. We also develop need-based processed natural food. We help you achieve your goal of consuming healthy and natural products with fresh and poison free qualities at a competitive cost and zero hassle of delivering at consumer door steps.
                        You may verify the quality of produces available with us on both of our website and outlet. Customers have the option to order from our website as per their requirements or buy directly from outlet.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10 ' data-aos="fade-down">
                    <div className='flex flex-col items-center justify-center bg-blue-100 rounded-[40px] mb-2 p-4 hover:transform hover:scale-105 transition-all duration-300'>
                        <IoNutrition className='text-[50px] mt-3 mb-4 text-black' />
                        <p className='text-gray-600 text-center font-bold text-2xl'>
                            High Nutritional Value
                        </p>
                        <p className='text-black text-center p-3 font-medium'>Highly nutritious and healthier produce at an affordable price.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-yellow-200 rounded-[40px] mb-2 p-4 hover:transform hover:scale-105 transition-all duration-300'>
                        <GiPoisonBottle className='text-[50px] mt-3 mb-4 text-black' />
                        <p className='text-gray-600 text-center font-bold text-2xl'>
                            No Chemicals & Pesticides
                        </p>
                        <p className='text-black text-center p-3 font-medium'>Pesticide/Chemical free produce: 100% Natural/Organic.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-pink-200 rounded-[40px] mb-2 p-4 hover:transform hover:scale-105 transition-all duration-300'>
                        <AiFillSafetyCertificate className='text-[50px] mt-3 mb-4 text-black' />
                        <p className='text-gray-600 text-center font-bold text-2xl'>
                            Certified Organic Sources
                        </p>
                        <p className='text-black text-center p-3 font-medium'>Sourced from certified farms and known sources</p>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-red-200 rounded-[40px] mb-2 p-4 hover:transform hover:scale-105 transition-all duration-300'>
                        <RiSecurePaymentLine className='text-[50px] mt-3 mb-4 text-black' />
                        <p className='text-gray-600 text-center font-bold text-2xl'>
                            Secure and Hygenic
                        </p>
                        <p className='text-black text-center p-3 font-medium'>Secure and Hygenic delivery at your doorstep.</p>
                    </div>
                </div>
            </div>
            <section className='w-full mb-5'>
                <div className='flex items-center justify-center mt-8'>
                    <h1 className='text-3xl  font-semibold mb-5 text-primeColor'>Our Process</h1>
                </div>
                <div className='flex flex-col items-center justify-center w-full bg-prim rounded-3xl relative p-4'>
                    <Lottie animationData={bgi} className='absolute inset-0 w-full h-full object-cover rounded-3xl' />
                    <div className='flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 gap-2 z-10'>
                        <div className='md:w-1/3'>
                            <p className='font-bold text-2xl text-center bg-primeColor hover:bg-green-600  text-white rounded-3xl p-2'>Identifying Genuine Sources</p>
                        </div>
                        <div className='md:w-2/3 bg-primeColor rounded-3xl p-2 text-start font-semibold text-white hover:bg-green-600'>
                            <p>We identify farmer groups who are closely following organic or natural farm practice. We make sure to visit and verify their produces carefully.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 gap-2 z-10'>
                        <div className='md:w-1/3 '>
                            <p className='font-bold text-2xl bg-primeColor hover:bg-green-600 text-center text-white rounded-3xl p-2'>Procuring And Handpicking Produces</p>
                        </div>
                        <div className='md:w-2/3 bg-primeColor hover:bg-green-600 rounded-3xl text-start p-2 font-semibold text-white'>
                            <p>We carefully handpick the best of farmers produce in a completely hygienic environment.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 gap-2 z-10'>
                        <div className='md:w-1/3'>
                            <p className='font-bold text-2xl bg-primeColor hover:bg-green-600 text-center text-white rounded-3xl p-2'>Addressing Customer Pain Points</p>
                        </div>
                        <div className='md:w-2/3 bg-primeColor hover:bg-green-600 rounded-3xl text-start p-2 font-semibold text-white'>
                            <p>As customers shop with their different kinds of health-oriented food requirements, we make shopping easy for you by providing a unique shopping experience based on your Diet Menu, Life Style Diseases, Wellness & Weight Loss Requirements.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 gap-2 z-10'>
                        <div className='md:w-1/3'>
                            <p className='font-bold text-2xl bg-primeColor hover:bg-green-600 text-center text-white rounded-3xl p-2'>Receiving Online Customer Orders</p>
                        </div>
                        <div className='md:w-2/3 bg-primeColor hover:bg-green-600 rounded-3xl p-2 text-start font-semibold text-white'>
                            <p>We display the produces available with us on our website with all of their Health Benefits, Description and How to Use details. Customers can conveniently order as per their requirements at the comfort of your home.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 gap-2 z-10'>
                        <div className='md:w-1/3'>
                            <p className='font-bold text-2xl bg-primeColor hover:bg-green-600 text-center text-white rounded-3xl p-2'>Packing And Delivery</p>
                        </div>
                        <div className='md:w-2/3 bg-primeColor hover:bg-green-600 rounded-3xl p-2 text-start font-semibold text-white'>
                            <p>We pack your order with most care in food grade or eco-friendly package and make sure to deliver to your doorstep on time, for your convenience.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
}
