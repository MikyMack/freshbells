import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import img1 from "../../assets/images/products/specialOffer/dates.webp"
import img2 from "../../assets/images/products/specialOffer/dryfruits.jpg"
import img3 from "../../assets/images/products/specialOffer/fotor.webp"
import img4 from "../../assets/images/products/specialOffer/millets.webp"
import Heading from "../../components/home/Products/Heading";
import Image from "../../components/designLayouts/Image";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { data } from "../../constants/index"
import { addToCart, decreaseCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPlus, BsDash } from "react-icons/bs";


const products = [{
  id: 1,
  img: img1
},
{
  id: 2,
  img: img2
},
{
  id: 3,
  img: img3
},
{
  id: 4,
  img: img4
}]
const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const product = state?.product;
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
    <>
      <Header />
      <HeaderBottom />
      <ToastContainer />
      <div className="bg-[#EFFDEC]">
        <div className="w-full mx-auto overflow-h">
          <div className="max-w-container mx-auto px-4 py-7">
            <div className="xl:-mt-10 mb-4 -mt-7">
              <Breadcrumbs title="Product Details" />
            </div>
            <div className="max-w-full mx-auto my-10 ">
              <div className="bg-white rounded-lg shadow-lg">
                <button className="icofont-close absolute top-2 right-2 text-gray-500 hover:text-gray-700" data-bs-dismiss="modal"></button>
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row items-center justify-center">
                    {/* Product Images */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative">
                        <div className="-group absolute md:top-2 md:left-2 xs:top-0 z-30 flex space-x-2">
                          <span className="bg-red-500 text-white px-2 py-1 rounded">-10%</span>
                        </div>
                        <div>

                          <div>
                            <img className="md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xs:w-[230px] xs:h-[230px] lg:ml-[40px] xl:ml-[140px] md:ml-[145px] xs:ml-7 sm:ml-14 object-cover rounded-full" src={product.img} alt="product" />
                          </div>

                        </div>
                        <ul className="flex items-center justify-center mt-4 space-x-2">
                          {products.map((data, index) => (
                            <li key={index}>
                              <img className="w-16 h-16 rounded-full object-cover" src={data.img} alt="product thumbnail" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0 bg-yellow-50 p-5">
                      <div className="flex flex-col items-start ">
                        <h3 className=" text-xl font-bold mb-2"><a href="product-video.html">{product.productName}</a></h3>
                        <div className=" text-gray-500 mb-2">
                          <p>SKU: <span>1234567</span></p>
                        </div>
                        <h3 className=" text-2xl font-bold mb-2 flex flex-row">
                          <del className="text-gray-500 flex items-center"><span><FaRupeeSign /></span>{product.offerPrice}</del>
                          <span className="text-red-500 ml-2 flex items-center">{product.price}<small className="text-sm text-gray-500">/per g</small></span>
                        </h3>
                        <p className=" text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga</p>
                        <div className=" mb-4">
                          <label className=" font-bold flex items-center gap-2">Category :<span className="text-blue-500 hover:underline">millets</span></label>
                        </div>
                        <div className=" flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            <button onClick={() => handleDecrease(product)} className="px-2 py-2 text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white">
                              <BsDash />
                            </button>
                            <span className="px-3 text-lg  bg-gray-100">{getCartQuantity(product._id)}</span>
                            <button onClick={() => handleIncrease(product)} className="px-2 py-2 text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white">
                              <BsPlus />
                            </button>
                          </div>                      
                        </div>
                        <button onClick={()=>handleBuy(product)} className="bg-primeColor w-full justify-center font-medium text-white px-4 py-2 rounded flex items-center hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500" title="Add to Cart">
                            <span>Add to Cart</span>
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto pb-20 ">
              <Heading heading="Related Products" />
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
                          <button onClick={() => handleDecrease(product)} className="md:text-xl xs:text-sm px-3 py-1   bg-gray-200 rounded-full hover:bg-gray-400" ><FaMinus /></button>
                          <span className="mx-3 md:text-[20px] xs:text-[15px]">{getCartQuantity(product._id)}</span>
                          <button onClick={() => handleIncrease(product)} className="md:text-xl xs:text-sm px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-400" ><FaPlus /></button>
                        </div>
                        <div className="flex items-center justify-between">
                          <button onClick={() => handleBuy(product)} className="order-2 ml-2 hover:bg-primeColor bg-blue-600 text-white px-2 font-medium xs:text-[10px] md:text-[15px] lg:text-[20px] xl:text-[20px] hover:text-white rounded-2xl hover:rounded-none  hover:translate-y-1 transition-transform duration-500">
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
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default ProductDetails;
