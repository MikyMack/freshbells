import React, { useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cat1 from "../../assets/categories/dates.webp";
import cat3 from "../../assets/categories/fotor.webp";
import cat4 from "../../assets/categories/honey.webp";
import cat5 from "../../assets/categories/millets.webp";
import cat6 from "../../assets/categories/nuts.webp";
import cat7 from "../../assets/categories/powders.webp";
import cat8 from "../../assets/categories/rices.webp";
import cat9 from "../../assets/categories/seeds.webp";
import cat10 from "../../assets/categories/special-mix.webp";
import cat11 from "../../assets/categories/spices.webp";
import cat12 from "../../assets/categories/tea-coffee.webp";
import mom from "../../assets/images/New folder/13.png"
import gym from "../../assets/images/New folder/gym.png"
import dr from "../../assets/images/New folder/dr.png"
import Heading from "../home/Products/Heading";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const data = [{
  id: 1,
  name: "Dates",
  img: cat1,
}, {
  id: 2,
  name: "Fotor",
  img: cat3,
}, {
  id: 3,
  name: "Honey",
  img: cat4
}, {
  id: 4,
  name: "Millets",
  img: cat5
}, {
  id: 5,
  name: "Nuts",
  img: cat6
}, {
  id: 6,
  name: "Powders",
  img: cat7
}, {
  id: 7,
  name: "Rices",
  img: cat8
}, {
  id: 8,
  name: "Seeds",
  img: cat9
}, {
  id: 9,
  name: "Special Mix",
  img: cat10
}, {
  id: 10,
  name: "Spices",
  img: cat11
}, {
  id: 11,
  name: "Tea & Coffee",
  img: cat12
}];
const features =[{
  id:1,
  img:mom,
 title:"Millets: Fueling Healthy Pregnancies",
 link:"/home"
},
{
  id:2,
  img:gym,
  title:"Fuel Your Fitness Journey with Nutrient-Packed Millets",
 link:"/signin"
},{
  id:3,
  img:dr,
  title:"Nutrition Consultant for your health",
  link:"/contact" 
}]

 const BannerBottom = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="mb-16">
      <section className="py-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {features.map((item, inde) => (
            <div key={item.id} className="w-full md:w-1/3 lg:w-1/3 px-4 mb-6">
              <div className=" relative bg-transparent border-none p-4 h-full">
                <div className={`relative text-center p-8 bg-white hover:bg-yellow-100 transition-transform z-40 duration-700 h-full flex flex-col justify-between`}>                 
                  <img className="mx-auto object-contain lg:h-[350px]  w-full" src={item.img} alt="bg_picture" />
                  <div className="flex flex-col items-center justify-center transition-transform duration-700 ease-in-out mb-4">
                    <h4 className=" md:text-2xl lg:text-3xl xs:text-lg font-normal font-body2 text-black mb-4 transition-transform duration-700 ease-in-out">{item.title}</h4>
                   <Link to={item.link}> 
                    <span className="text-center hover:opacity-50 cursor-pointer"><FaArrowRight  /></span> 
                    </Link>
                  </div> 
                </div>
                <div className={`absolute top-8 right-0 left-12 bottom-0 bg-[#9bad9a] z-0`} ></div>
                <div className={`absolute top-0 bottom-1/3 left-0 w-1/2 z-0 bg-[#bbe6b9] bg-repeat`}></div>
              </div>
            </div>      
          ))}
        </div>
      </div>
    </section>
        <div className="py-10">
        <Heading heading="Top Categories" />
        <Swiper
          spaceBetween={10} 
          slidesPerView={3}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 6,
              spaceBetween: 30
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 8,
              spaceBetween: 20
            },
            // when window width is >= 1536px
            1536: {
              slidesPerView: 8,
              spaceBetween: 20
            }
          }}
        >
   
          {data.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-2 h-full group" 
               data-aos="fade-up"
               data-aos-delay={`${cat.id * 100}`}
              >
                   <div
              key={index} 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className={`hover:bg-[#9bad9a] hover:text-white rounded-lg  bg-white shadow-md  text-black relative  duration-high group max-w-[300px] flex flex-col justify-center items-center`}
            >
                <img src={cat.img} alt={`absolute Category ${index + 1}`} className="object-cover w-[150px] p-2 h-[150px] cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3" />
                <p className="text-center mt-1 pb-2 text-xl font-body2 font-semibold text-primeColor" style={{ color: 'inherit' }}>{cat.name}</p>
                </div>
              </div>
            </SwiperSlide>                   
          ))}
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default BannerBottom;



