import React from "react";
import Heading from "../Products/Heading";
import { BsPlus, BsDash } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import SampleNextArrow from "../NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../NewArrivals/SamplePrevArrow";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart } from "../../../redux/cartSlice";
import { GiShoppingCart } from "react-icons/gi";
import {baseURL} from "../../../constants/index"



const BestSellers = () => {
  const dispatch = useDispatch()
  const homeDetails = useSelector(state => state.auth.homeDetails);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
  const navigate = useNavigate()
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }
  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  }
  const handleBuy = (product) => {
    dispatch(addToCart(product));
    navigate("/cart")
  }
  const getCartQuantity = (productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return cartItem ? cartItem.cartQuantity : 0;
  };
  return (
    <div className="w-full mt-6 pb-20">
      <Heading heading="Premium Products" />
      <Slider {...settings}>
        {homeDetails ? homeDetails.Super.map((product, index) => (
          
          <div key={product.id} className="p-2" data-aos="fade-up">
            <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-md">
              <div className="flex flex-col items-center justify-center max-w-full max-h-full bg-white ">
                <div className="relative">
                  <Link to="/productDetails"> <Image className="w-[250px] h-[250px] object-contain" imgSrc={`${baseURL}${product.image}`} />  </Link>
                </div>
              </div>
              <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-2 bg-white group-hover:bg-yellow-100">
                <div className="flex flex-col items-center justify-between font-titleFont ">
                  <h2 className="md:text-lg xl:text-xl lg:text-xl xs:text-[15px] sm:text-[15px] font-body2 text-primeColor font-bold">
                    {product.name}
                  </h2>
                  <p className="text-primeColor xl:text-[15px] lg:text-[15px]  md:text-[15px] xs:text-[12px]  font-semibold flex pt-1 ">
                    <span className="md:pt-[4px] sm:pt-[2px] xs:pt-[3px] lg:pt-[3px] xl:text-[13px] lg:text-[13px] md:text-[15px] xs:text-[11px]">
                      <FaRupeeSign />
                    </span>
                    <span className="line-through text-gray-600">{product.price+100}</span>
                    <span className="ml-2">{product.price}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                <select
                    key={index}
                    name="quantity"
                    className="order-1 mt-1 hover:bg-primeColor font-medium font-body2 text-black hover:text-white xl:text-[25px] lg:text-[20px] md:text-[15px] xs:text-[15px] sm:text-[15px]"
                  >
                    {product.quantity_variants.map((ite, variantIndex) => (
                      <option
                        key={`${product.id}_${variantIndex}`}
                        value={ite.volume}
                        className="text-black bg-white font-medium"
                      >
                        {ite.volume}{ite.unit}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center order-2">
                    <button onClick={() => handleDecrease(product)} className="px-2 py-2 text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white">
                      <BsDash />
                    </button>
                    <span className="px-3 text-lg  bg-gray-100">{getCartQuantity(product.id)}</span>
                    <button onClick={() => handleIncrease(product)} className="px-2 py-2 text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white">
                      <BsPlus />
                    </button>
                  </div>
                  <button onClick={() => handleBuy(product)} className="flex items-center order-3 font-body2 hover:bg-primeColor px-2 font-medium xs:text-[20px] md:text-[15px] lg:text-[20px] xl:text-[20px] text-black hover:text-white bg-white  hover:translate-y-1 transition-transform duration-500">
                    Add <span className="pl-1"><GiShoppingCart /></span>
                  </button>
                </div>
                <div className={`md:text-lg xl:text-xl lg:text-xl sm:text-lg font-normal text-center xs:text-sm ${product.in_stock === 0 || (product.in_stock > 0 && product.stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                  {product.in_stock === 0 ? "Out of Stock" : product.in_stock < 10 ? `Only ${product.in_stock} items left` : `${product.in_stock} items in stock`}
                </div>
              </div>
            </div>
          </div>
        
        )):(
          <h1 className="text-center">Loading products...</h1>
          )}
        </Slider>
    </div>
  );
};

export default BestSellers;
