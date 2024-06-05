import React, { useState } from "react";
import Heading from "../Products/Heading";
import { BsSuitHeartFill} from "react-icons/bs";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import { FaCodeCompare } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {data} from "../../../constants/index"

const SpecialOffers = () => {
  const [quantity, setQuantity] = useState(1);


  return (
    <div className="container mx-auto pb-20 ">
      <Heading heading="Healthy Delights" />
  
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" data-aos="fade-up">
                        {data.map((product) => (
                            <div key={product._id} className="p-2 ">
                                <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-xl">
                                    <div className='flex flex-col items-center justify-center max-w-full max-h-full bg-gray-100'>
                                        <div className="relative">
                                            <Image className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] object-cover rounded-full" imgSrc={product.img} />

                                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent">
                                                <button className="text-black p-2 bg-white rounded-full">
                                                    <FaCodeCompare />
                                                </button>
                                                <button className="text-blue-600 p-2 bg-white rounded-full">
                                                    <FaShoppingCart />
                                                </button>
                                                <button className=" p-2 bg-white text-red-600 rounded-full">
                                                    <BsSuitHeartFill />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-4 bg-white">
                                        <div className="flex flex-col items-center justify-between font-titleFont ">
                                            <h2 className="md:text-xl xl:text-xl lg:text-xl xs:text-[10px] sm:text-[10px] text-primeColor font-bold">
                                                {product.productName}
                                            </h2>
                                            <p className="text-primeColor xl:text-[15px] lg:text-[15px]  md:text-[15px] sm:text-[9px] xs:text-[8px]  font-semibold flex pt-1 ">
                                                <span className="md:pt-[2px] sm:pt-[3px] xs:pt-[3px] lg:pt-[4px] xl:text-[13px] lg:text-[13px] md:text-[15px] xs:text-[10px]">
                                                    <FaRupeeSign />
                                                </span>
                                                <span className="line-through xs:text-[12px] md:text-[15px] text-gray-600">{product.price}</span>
                                                <span className="ml-1 xs:text-[12px] md:text-[15px]">{product.offerPrice}</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="md:text-xl xs:text-sm px-3 py-1   bg-gray-200 rounded-full hover:bg-gray-400" onClick={() => setQuantity(quantity - 1)}><FaMinus /></button>
                                            <span className="mx-3 md:text-[20px] xs:text-[15px]">{quantity}</span>
                                            <button className="md:text-xl xs:text-sm px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-400" onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button className="order-2 ml-2 hover:bg-primeColor bg-blue-600 text-white px-2 font-medium xs:text-[10px] md:text-[15px] lg:text-[20px] xl:text-[20px] hover:text-white rounded-2xl hover:rounded-none  hover:translate-y-1 transition-transform duration-500">
                                                Buy Now
                                            </button>
                                            <select className="order-1 mt-1 hover:bg-primeColor font-medium text-black hover:text-white rounded-xl xl:text-[20px] lg:text-[20px] md:text-[15px] xs:text-[7px] sm:text-[10px]">
                                                <option value="250g" className="text-black bg-white font-medium">250g</option>
                                                <option value="500g" className="text-black bg-white font-medium">500g</option>
                                                <option value="1kg" className="text-black bg-white font-medium">1kg</option>
                                                <option value="5kg" className="text-black bg-white font-medium">5kg</option>
                                            </select>
                                        </div>
                                        <div className={`md:text-lg xl:text-xl lg:text-xl sm:text-sm xs:text-[10px] ${product.stock === 0 || (product.stock > 0 && product.stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
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
