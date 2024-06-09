import React from "react";
import Heading from "../Products/Heading";
import { FaRupeeSign } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import { data } from "../../../constants/index"
import { BsPlus, BsDash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseCart } from "../../../redux/cartSlice";
import { GiShoppingCart } from "react-icons/gi";

const SpecialOffers = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);

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
        const cartItem = cartItems.find((item) => item._id === productId);
        return cartItem ? cartItem.cartQuantity : 0;
    };
    return (
        <div className=" pb-20 ">
            <Heading heading="Healthy Delights" />

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1" data-aos="fade-up">
                {data.map((product) => (
                    <div key={product._id} className="p-2 ">
                        <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-xl">
                            <div className='flex flex-col items-center justify-center max-w-full max-h-full bg-gray-100'>
                                <div className="relative">
                                    <Image className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] object-cover rounded-full" imgSrc={product.img} />
                                </div>
                            </div>
                            <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-2 bg-white group-hover:bg-yellow-100">
                                <div className="flex flex-col items-center justify-between font-titleFont ">
                                    <h2 className="text-base xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-body2 text-primeColor font-bold">
                                        {product.productName}
                                    </h2>
                                    <p className="text-primeColor text-sm xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-semibold flex pt-1 ">
                                        <span className=" xs:pt-[1px] sm:pt-[2px] md:pt-[2px] lg:pt-[3px] xl:pt-[3px]">
                                            <FaRupeeSign />
                                        </span>
                                        <span className="line-through text-gray-600">{product.price}</span>
                                        <span className="ml-2">{product.offerPrice}</span>
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <select className="order-1 mt-1 hover:bg-primeColor font-medium font-body2 text-black hover:text-white text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                        {
                                            product.quantity.map((items, index) => (
                                                <option key={index} value={`${items}g`} className="text-black bg-white font-medium">{items}g</option>
                                            ))
                                        }
                                    </select>
                                    <div className="flex items-center order-2">
                                        <button onClick={() => handleDecrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white">
                                            <BsDash />
                                        </button>
                                        <span className="px-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-100">{getCartQuantity(product._id)}</span>
                                        <button onClick={() => handleIncrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white">
                                            <BsPlus />
                                        </button>
                                    </div>
                                    <button onClick={() => handleBuy(product)} className="flex items-center order-3 font-body2 hover:bg-primeColor px-1 font-medium text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black hover:text-white bg-white hover:translate-y-1 transition-transform duration-500">
                                        Add <span className="pl-1"><GiShoppingCart /></span>
                                    </button>
                                </div>
                                <div className={`text-center font-normal ${product.stock === 0 || (product.stock > 0 && product.stock < 10) ? 'text-red-500' : 'text-green-500'} text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl`}>
                                    {product.stock === 0 ? "Out of Stock" : product.stock < 10 ? `Only ${product.stock} items left` : `${product.stock} items in stock`}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default SpecialOffers; 
