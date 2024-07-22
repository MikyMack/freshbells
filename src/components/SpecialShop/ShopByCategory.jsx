import React, { useState } from 'react'
import Header from '../home/Header/Header'
import HeaderBottom from '../home/Header/HeaderBottom'
import Footer from '../home/Footer/Footer'
import FooterBottom from '../home/Footer/FooterBottom'
import Image from '../designLayouts/Image'
import { baseURL } from '../../constants'
import { ToastContainer } from 'react-toastify'
import Breadcrumbs from '../pageProps/Breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, decreaseCart } from '../../redux/cartSlice'
import ReactPaginate from 'react-paginate'
import { BsPlus, BsDash } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

function ShopByCategory() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);
    const products = useSelector((state) => state.auth.products);

    const itemsPerPage = 12
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = products ? Math.ceil(products.length / itemsPerPage) : 0;
    const offset = currentPage * itemsPerPage;

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
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    const getCartQuantity = (productId) => {
        const cartItem = cartItems.find((item) => item.id === productId);
        return cartItem ? cartItem.cartQuantity : 0;
    };
    return (
        <div>
            <Header />
            <HeaderBottom />
            <ToastContainer /> 
            <div className='bg-[#EFFDEC]'>
                <div className="max-w-container mx-auto pb-8 px-5">
                    <Breadcrumbs title="Category Based Products" />
                    <div className="w-full h-full flex items-center justify-center gap-5">
                        <div className="grid  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4" data-aos="fade-up">
                            {products && products.slice(offset, offset + itemsPerPage).map((product, index) => (
                                <div key={product.id} className="p-2">
                                    <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-md">
                                        <div className={`flex flex-col items-center justify-center bg-green-200 group-hover:bg-white max-w-full max-h-full`}>
                                            <div className="relative">
                                                <Image className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] object-contain" imgSrc={`${baseURL}${product.image}`} />
                                            </div>
                                        </div>
                                        <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-4 bg-white">
                                            <div className="flex flex-col items-center justify-between font-titleFont ">
                                                <h2 className="md:text-xl xl:text-xl lg:text-xl xs:text-[10px] text-center sm:text-[10px] text-primeColor font-medium">
                                                    {product.name}
                                                </h2>
                                                <p className="text-primeColor xl:text-[15px] lg:text-[15px]  md:text-[15px] sm:text-[9px] xs:text-[8px]  font-semibold flex pt-1 ">
                                                    <span className="md:pt-[2px] sm:pt-[3px] xs:pt-[3px] lg:pt-[4px] xl:text-[13px] lg:text-[13px] md:text-[15px] xs:text-[6px]">
                                                        <FaRupeeSign />
                                                    </span>
                                                    <span className="line-through text-gray-600">{product.price + 100}</span>
                                                    <span className="ml-1">{product.price}</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <button onClick={() => handleDecrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white">
                                                    <BsDash />
                                                </button>
                                                <span className="px-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-100">{getCartQuantity(product.id)}</span>
                                                <button onClick={() => handleIncrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white">
                                                    <BsPlus />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button onClick={() => handleBuy(product)} className="order-2 ml-2 py-1 hover:bg-primeColor text-black px-2 font-medium xs:text-[7px] md:text-[15px] lg:text-[15px] xl:text-[17px] hover:text-white rounded-2xl hover:rounded-none  hover:translate-y-1 transition-transform duration-500">
                                                    Add to cart
                                                </button>
                                                <select className="order-1 mt-1 hover:bg-primeColor font-medium font-body2 text-black hover:text-white xl:text-[20px] lg:text-[15px] md:text-[15px] xs:text-[15px] sm:text-[15px]">
                                                    <option key={index} value="250g" className="text-black bg-white font-medium">{product.volume}{product.unit}</option>

                                                </select>
                                            </div>
                                            <div className={`md:text-lg xl:text-xl text-center lg:text-xl sm:text-sm xs:text-[10px] ${product.in_stock === 0 || (product.in_stock > 0 && product.in_stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                                                {product.in_stock === 0 ? "Out of Stock" : product.in_stock < 10 ? `Only ${product.in_stock} items left` : `${product.in_stock} items in stock`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
            </div>
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default ShopByCategory