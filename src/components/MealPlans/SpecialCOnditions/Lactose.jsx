import React, { useState } from 'react'
import Breadcrumbs from '../../pageProps/Breadcrumbs'
import southIndianDiet from "../../../assets/images/diets/diet1.jpg"
import northIndianDiet from "../../../assets/images/banner/back1.jpg"
import lactose from "../../../assets/images/specialconditions/lactose.png"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { data } from "../../../constants/index"
import ReactPaginate from 'react-paginate'
import Image from '../../designLayouts/Image'
import Heading from '../../home/Products/Heading'

export default function Lactose() {
    const [dietType, setDietType] = useState('southIndian');
    const itemsPerPage = 12
    const [quantity, setQuantity] = useState(1);
    const [currentPage, setCurrentPage] = useState(0)
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    const handleDownload = () => {
      const image = dietType === 'southIndian' ? southIndianDiet : northIndianDiet;
      const link = document.createElement('a');
      link.href = image;
      link.download = `${dietType}-diet.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
    return (
        <div className='bg-[#EFFDEC]'>
        <div className="max-w-container mx-auto px-4 pb-12">
            <Breadcrumbs title="Diet Plan For Lactose Introlerent" />
            <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-full px-4 mb-6 lg:mb-0"> 
            <h3 className="text-2xl font-semibold font-body2 mb-4"> DIET PLAN FOR LACTOSE INTROLERENT</h3>
            <p className='font-body2 text-xl'>Polycystic ovarian syndrome is a hormonal disorder causing enlarged ovaries with small cysts . This condition will cause irregular periods and difficulty to get pregnant. The women who are diagnosed with pcos are either obese or overweight. So diet plays a vital role in maintaining healthy weight and hormonal balance.</p>
          </div>
        </div>
        <div className="border-b my-10"></div>
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2 px-4 mb-6 xl:mb-0">
            <img className="w-full h-auto object-cover" src={lactose} alt="single-img-10" />
          </div>
          <div className="w-full xl:w-1/2 px-4 bg-white py-5">
            <h3 className="text-2xl font-semibold font-body2 mb-4">Things to remember</h3>
            <ul className="list-disc pl-5 space-y-2 text-lg font-body2">
              <li>Drink plenty of water</li>
              <li>Eat high fibre foods</li>
              <li>Eat plenty of fruits and vegetables</li>
              <li>Introduce variety in your diet</li>
              <li>Avoid excess sugar and excess salt</li>
              <li>If you are craving in between meals you can have seasonal fruits.</li>
              <li>Do not skip breakfast</li>
              <li>Eat regular meals</li>
              <li>Use  a smaller plate</li>
              <li>Get more active</li>
              <li>Chew your food well.</li>
              <li>Maintain a 2hr gap between each meal and don't exceed 3hrs</li>
              <li>Have your last meal 4 hours before going to bed.</li>
              <li>Quality sleep</li>
            </ul>
          </div>
          <p className='text-red-400 font-body2 xs:text-sm md:text-xl mt-5'>Remember and Please note:This is a sample menu for PCOS.Individual needs will vary based on age, sex, height, weight, activity level, and any chronic health conditions or diseases. Consult your physician or health care provider before starting any diet plan.</p>
        </div>
        <div className="border-b my-10"></div>     
      </div> 
    </section>
    <div className="container mx-auto pb-20 ">
                    <Heading heading="Related Products" />
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" data-aos="fade-up">
                        {data.slice(offset, offset + itemsPerPage).map((product) => (
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
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination flex justify-center gap-3 items-center mt-5"
                        activeClassName="bg-black text-white px-4 py-2 rounded-full"
                        pageLinkClassName="px-3 py-2 hover:bg-lightGray rounded"
                    />
                </div>
            <div className='w-full mb-8'>
                <div className='flex justify-center space-x-4 mb-4'>
                    <button className={`py-2 px-4 rounded-lg ${dietType === 'southIndian' ? 'bg-primeColor hover:bg-black text-white font-semibold' : 'bg-gray-200'}`} onClick={() => setDietType('southIndian')}>South Indian Diet</button>
                    <button className={`py-2 px-4 rounded-lg ${dietType === 'northIndian' ? 'bg-primeColor hover:bg-black text-white font-semibold' : 'bg-gray-200'}`} onClick={() => setDietType('northIndian')}>North Indian Diet</button>
                </div>
                <div className="relative">
                    <img className='object-contain' src={dietType === 'southIndian' ? southIndianDiet : northIndianDiet} alt={`${dietType} diet`} />
                    <button className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-400 font-medium text-white rounded-lg  mt-4" onClick={handleDownload}><span className='mr-2'><FaCloudDownloadAlt /></span> Download Diet Image</button>
                </div>
            </div>
        </div>
        </div>
    )
}
