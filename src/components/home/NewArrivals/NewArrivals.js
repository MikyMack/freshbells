import React, { useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import img1 from "../../../assets/images/products/newArrival/black berry.png"
import img2 from "../../../assets/images/products/newArrival/black cardamon.png"
import img3 from "../../../assets/images/products/newArrival/black papper.png"
import img4 from "../../../assets/images/products/newArrival/cinamon.png"
import img5 from "../../../assets/images/products/newArrival/cloves.png"
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import spfOne from "../../../assets/images/products/newArrival/garlic01.jpg"
import { BsSuitHeartFill, BsPlus, BsDash } from "react-icons/bs";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import Badge from "../Products/Badge";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const data = [{
  _id: 1001,
  img: spfOne,
  productName: "Garlic",
  price: "350.00",
  offerPrice: "300.00",
  stock: 10,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1002,
  img: img5,
  productName: "Cloves",
  price: "180.00",
  offerPrice: "130.00",
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1003,
  img: img1,
  productName: "Black berry",
  price: "250.00",
  offerPrice: "200.00",
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1004,
  img: img4,
  productName: "Cinamon",
  price: "520.00",
  offerPrice: "300.00",
  stock: 5,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1005,
  img: img3,
  productName: "Black papper",
  price: "435.00",
  stock: 30,
  offerPrice: "300.00",
  badge: false,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1006,
  img: img2,
  productName: "Black cardamon",
  price: "180.00",
  stock: 50,
  offerPrice: "300.00",
  badge: false,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},]

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const bgColors = ["bg-[#ffffff]"] ;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto pb-16 ">
    <Heading heading="Super Foods" />
    <Slider {...settings}>
      {data.map((product,index) => (
        <div key={product._id} className="p-2" data-aos="fade-up">
          <div className="relative overflow-hidden group hover:shadow-slate-500 shadow-xl"> 
            <div className={`flex flex-col items-center max-w-full max-h-full ${bgColors[index % bgColors.length]} group-hover:bg-[#bbe6b9]`}>
              <div className="relative ">
                <Image className="w-[250px] h-[250px] object-cover rounded-full" imgSrc={product.img} />
                {product.badge && (
                  <div className="absolute top-2 left-0">
                    <Badge text="30%" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent">
                <Link to="productDetails">
                  <button className="text-black p-2 bg-white rounded-full">
                    <IoEyeSharp />
                  </button>
                  </Link>
                  <button className="text-blue-600 p-2 bg-white rounded-full">
                    <FaShoppingCart />
                  </button>
                  <button className=" p-2 bg-white text-red-600 rounded-full">
                    <BsSuitHeartFill />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-4 bg-[#f5f3f3] group-hover:bg-[#ffffff]">
              <div className="flex flex-col items-center justify-between font-titleFont ">
                <h2 className="md:text-xl xl:text-2xl lg:text-xl xs:text-[15px] sm:text-[15px] font-body2 text-gray-800 font-normal">
                  {product.productName}
                </h2>
                <p className="xl:text-[18px] lg:text-[15px]  md:text-[15px] xs:text-[12px]  font-semibold flex pt-1 ">
                  <span className="md:pt-[3px] sm:pt-[2px] xs:pt-[2px] lg:pt-[5px] xl:text-[15px] lg:text-[13px] md:text-[15px] xs:text-[12px]">
                    <FaRupeeSign />
                  </span>
                  <span className="line-through text-gray-600">{product.price}</span>
                  <span className="ml-2">{product.offerPrice}</span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <select className="order-1 mt-1 hover:bg-primeColor font-medium font-body2 text-black hover:text-white rounded-xl xl:text-[25px] lg:text-[20px] md:text-[15px] xs:text-[15px] sm:text-[15px]">
                  <option value="250g" className="text-black bg-white font-medium">250g</option>
                  <option value="500g" className="text-black bg-white font-medium">500g</option>
                  <option value="1kg" className="text-black bg-white font-medium">1kg</option>
                  <option value="5kg" className="text-black bg-white font-medium">5kg</option>
                </select>
                <div className="flex items-center order-2">
                  <button onClick={() => handleQuantityChange("decrease")} className="text-xl p-1 hover:bg-primeColor hover:text-white border rounded-l-md border-gray-300">
                    <BsDash/>
                  </button>
                  <span className="px-2">{quantity}</span>
                  <button onClick={() => handleQuantityChange("increase")} className="text-xl p-1 border rounded-r-md hover:bg-primeColor hover:text-white border-gray-300">
                    <BsPlus/>
                  </button>
                </div>
                <button className="order-3 ml-2 font-body2 hover:bg-primeColor px-2 font-medium xs:text-[15px] md:text-[15px] lg:text-[20px] xl:text-[25px] text-black hover:text-white rounded-2xl hover:rounded-none  hover:translate-y-1 transition-transform duration-500">
                  Buy Now
                </button>
              </div>
              <div className={`md:text-lg lg:text-xl sm:text-sm font-semibold xs:text-sm ${product.stock === 0 || (product.stock > 0 && product.stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                {product.stock === 0 ? "Out of Stock" : product.stock < 10 ? `Only ${product.stock} items left` : `${product.stock} items in stock`}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default NewArrivals;
