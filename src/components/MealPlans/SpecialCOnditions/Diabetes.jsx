import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../pageProps/Breadcrumbs'
import southIndianDiet from "../../../assets/images/specialconditions/dit_s.jpg"
import northIndianDiet from "../../../assets/images/specialconditions/dit_n.jpg"
import diabetes from "../../../assets/images/specialconditions/diabetes.png"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { data } from "../../../constants/index"
import ReactPaginate from 'react-paginate'
import Image from '../../designLayouts/Image'
import Heading from '../../home/Products/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { SpecialCategDiabeties } from '../../../actions/MealPlansActions'
import { useNavigate } from 'react-router-dom'
import { addToCart, decreaseCart } from '../../../redux/cartSlice'
import { baseURL } from '../../../constants/index'
import { ToastContainer } from 'react-toastify';

export default function Diabetes() {
  const [dietType, setDietType] = useState('southIndian');
  const itemsPerPage = 10
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0)
  const offset = currentPage * itemsPerPage;
  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const data = await SpecialCategDiabeties(); 
                  setProducts(data.products || []);
                  console.log(products,"fetch proddd");
          } catch (error) {
              console.error("Error fetching products", error);
          }
      };
      fetchProducts();
  }, []);

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
        <Breadcrumbs title="Diet Plan For Diabetes" />
        <ToastContainer />
        <section>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap mt-10">
              <div className="w-full lg:w-full px-4 mb-6 lg:mb-0">
                <h3 className="text-2xl font-semibold font-body2 mb-4"> DIET PLAN FOR DIABETES</h3>
                <p className='font-body2 text-xl'>Managing diabetes through nutrition involves careful planning to maintain blood sugar levels within a target range. Here is a template tailored for individuals with diabetes, focusing on balanced meals, portion control, and selecting foods with a low glycemic index</p>
              </div>
            </div>
            <div className="border-b my-10"></div>
            <div className="flex flex-wrap items-center">
              <div className="w-full xl:w-1/2 px-4 mb-6 xl:mb-0">
                <img loading='lazy' className="w-full h-auto object-cover" src={diabetes} alt="single-img-10" />
              </div>
              <div className="w-full xl:w-1/2 px-4 bg-white py-5">
                <h3 className="text-2xl font-semibold font-body2 mb-4">Things to remember</h3>
                <ul className="list-disc pl-5 space-y-2 text-lg font-body2">
                  <li>Drink plenty of water</li>
                  <li>Having protein smoothies/shakes</li>
                  <li>Eat plenty of fruits and vegetables</li>
                  <li>Introduce variety in your diet</li>
                  <li>Having milk and milk products will provide good quality fat and protein</li>
                  <li>Avoid excess sugar and excess salt</li>
                  <li>Enjoy each meal by adding flavours of Fenugreek Powder cumin powder Himalayan pink salt garlic powder</li>
                  <li>If you are craving in between meals you can have seasonal fruits</li>
                  <li>Don't skip breakfast</li>
                  <li>Eat regular meals</li>
                  <li>Get more active</li>
                  <li>Chew your food well</li>
                  <li>Maintain a 2hr gap between each meal and don't exceed 3hrs</li>
                  <li>Have your last meal 4 hours before going to bed</li>
                  <li>Quality sleep</li>
                </ul>
              </div>
              <p className='text-red-400 font-body2 xs:text-sm md:text-xl mt-5'>Remember and Please note:This is a sample menu for Diabetes.Individual needs will vary based on age, sex, height, weight, activity level, and any chronic health conditions or diseases. Consult your physician or health care provider before starting any diet plan.</p>
            </div>
            <div className="border-b my-10"></div>
          </div>
        </section>
        <div className="container mx-auto pb-20 ">
                    <Heading heading="Related Products" />
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" data-aos="fade-up">
                        {products.slice(offset, offset + itemsPerPage).map((product) => (
                            <div key={product.id} className="p-2 ">
                                <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-xl">
                                    <div className='flex flex-col items-center justify-center max-w-full max-h-full bg-gray-100'>
                                        <div className="relative">
                                            <Image className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] object-contain rounded-full" imgSrc={`${baseURL}${product.image}`} />
                                        </div>
                                    </div>
                                    <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-4 bg-white">
                                        <div className="flex flex-col items-center justify-between font-titleFont ">
                                            <h2 className="md:text-xl xl:text-xl lg:text-xl xs:text-[10px] sm:text-[10px] text-primeColor font-bold font-body2">
                                                {product.name}
                                            </h2>
                                            <p className="text-primeColor xl:text-[15px] lg:text-[15px]  md:text-[15px] sm:text-[9px] xs:text-[8px]  font-semibold flex pt-1 ">
                                                <span className="md:pt-[2px] sm:pt-[3px] xs:pt-[3px] lg:pt-[4px] xl:text-[13px] lg:text-[13px] md:text-[15px] xs:text-[10px]">
                                                    <FaRupeeSign />
                                                </span>
                                                <span className="line-through xs:text-[12px] md:text-[15px] text-gray-600">{product.price+100}</span>
                                                <span className="ml-1 xs:text-[12px] md:text-[15px]">{product.price}</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="md:text-xl xs:text-sm px-3 py-1   bg-gray-200 rounded-full hover:bg-gray-400" onClick={() => handleDecrease(product)}><FaMinus /></button>
                                            <span className="mx-3 md:text-[20px] xs:text-[15px]">{getCartQuantity(product.id)}</span>
                                            <button  className="md:text-xl xs:text-sm px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-400" onClick={() => handleIncrease(product)}><FaPlus /></button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button onClick={() => handleBuy(product)} className="order-2 ml-2 hover:bg-primeColor bg-blue-600 text-white px-2 font-medium xs:text-[10px] md:text-[15px] lg:text-[20px] xl:text-[20px] hover:text-white rounded-2xl hover:rounded-none  hover:translate-y-1 transition-transform duration-500">
                                                Buy Now
                                            </button>
                                            {product.quantity_variants.length > 0 ? (
                                                <select className="order-1 mt-1 hover:bg-primeColor font-medium text-black hover:text-white rounded-xl xl:text-[20px] lg:text-[20px] md:text-[15px] xs:text-[7px] sm:text-[10px]">
                                                    {product.quantity_variants.map((variant) => (
                                                        <option key={variant.id} value={variant.volume} className="text-black bg-white font-medium">
                                                            {variant.volume} {variant.unit}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <p className='text-sm font-body2'>no variants</p>
                                            )}
                                        </div>
                                        <div className={`md:text-lg xl:text-xl lg:text-xl text-center sm:text-sm xs:text-[10px] ${product.in_stock === 0 || (product.in_stock > 0 && product.in_stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                                            {product.in_stock === 0 ? "Out of Stock" : product.in_stock < 10 ? `Only ${product.in_stock} items left` : `${product.in_stock} items in stock`}
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
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination flex justify-center gap-1 items-center mt-5"
                        activeClassName="bg-black text-white px-2 py-2 rounded-full"
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
