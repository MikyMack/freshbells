import React from "react";
import Heading from "../Products/Heading";
import { FaRupeeSign } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import { BsPlus, BsDash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseCart } from "../../../redux/cartSlice";
import { GiShoppingCart } from "react-icons/gi";
import { baseURL } from "../../../constants/index";
import { AddCart } from "../../../actions/CartActions";

const SpecialOffers = () => {
    const homeDetails = useSelector(state => state.auth.homeDetails);
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const navigate = useNavigate()
    const handleDecrease = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }
    const handleIncrease = (cartItem) => {
        dispatch(addToCart(cartItem));
    }
    const handleBuy = (product) => {
        const cartData = {
            product_id: product.id,
            volume: product.volume,
            unit: product.unit,
            quantity: product.cartQuantity,
            price: product.price
          };
        if(isAuthenticated){
       AddCart(cartData);
        }else{
            dispatch(addToCart(product));
        }
        navigate("/cart")
    }

    const getCartQuantity = (productId) => {
        const cartItem = cartItems.find((item) => item.id === productId);
        return cartItem ? cartItem.cartQuantity : 0;
    };

    if (!homeDetails || !homeDetails.healthy || homeDetails.healthy.length === 0) {
        return null;
    }
    const handleView = (id) => {
        navigate(`/productDetails`, { state: { productId: id } });
      };

    return (
        <div className=" pb-20 ">
            <Heading heading="Healthy Delights" />
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1" data-aos="fade-up">
                {homeDetails.healthy.slice(0, 10).map((product, index) => (
                    <div key={product.id} className="p-2 ">
                        <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-xl">
                            <div className='flex flex-col items-center justify-center max-w-full max-h-full bg-gray-100'>
                                <div className="relative" onClick={() => handleView(product.id)}>
                                    <Image className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] cursor-pointer object-contain" imgSrc={`${baseURL}${product.image}`} />
                                </div>
                            </div>
                            <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-2 bg-white group-hover:bg-yellow-100">
                                <div className="flex flex-col items-center justify-between font-titleFont ">
                                    <h2 className="text-base xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-body2 text-primeColor font-bold">
                                        {product.name}
                                    </h2>
                                    <p className="xl:text-[18px] lg:text-[15px]  md:text-[15px] xs:text-[12px]  font-semibold flex pt-1 ">
                                        <span className="md:pt-[3px] sm:pt-[2px] xs:pt-[2px] lg:pt-[5px] xl:text-[15px] lg:text-[13px] md:text-[15px] xs:text-[12px]">
                                            <FaRupeeSign />
                                        </span>
                                        <span className="line-through text-gray-600">{product.price + 100}</span>
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
                                        <button onClick={() => handleDecrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white">
                                            <BsDash />
                                        </button>
                                        <span className="px-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-100">{getCartQuantity(product.id)}</span>
                                        <button onClick={() => handleIncrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white">
                                            <BsPlus />
                                        </button>
                                    </div>
                                    <button onClick={() => handleBuy(product)} className="flex items-center order-3 font-body2 hover:bg-primeColor px-1 font-medium text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black hover:text-white bg-white hover:translate-y-1 transition-transform duration-500">
                                        Add <span className="pl-1"><GiShoppingCart /></span>
                                    </button>
                                </div>
                                <div className={`text-center font-normal ${product.in_stock === 0 || (product.in_stock > 0 && product.in_stock < 10) ? 'text-red-500' : 'text-green-500'} text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl`}>
                                    {product.in_stock === 0 ? "Out of Stock" : product.in_stock < 10 ? `Only ${product.in_stock} items left` : `${product.in_stock} items in stock`}
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

