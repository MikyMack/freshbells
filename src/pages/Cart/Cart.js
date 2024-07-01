import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import Footer from "../../components/home/Footer/Footer";
import { data } from "../../constants/index"
import { MdCurrencyRupee } from "react-icons/md";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../../redux/cartSlice";
import imag from "../../assets/images/emptyCart.png" 
import { FaPlus, FaMinus } from "react-icons/fa6";
import { baseURL } from "../../constants/index";
import { FetchCart, AddCart } from "../../actions/CartActions";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
    FetchCart().then(response => {
      if (!response.status) {
        console.error("Failed to fetch cart:", response);
        return;
      }
      setCartItems(response);
      const localCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const localCartItemIds = localCartItems.map(item => item.id);
      response.carts.forEach(item => {
        if (item.quantity_variants && item.quantity_variants.length > 0) {
          item.quantity_variants.forEach(variant => {
            if (!localCartItemIds.includes(item.id)) {
              AddCart({
                product_id: item.id,
                volume: variant.volume,
                unit: variant.unit,
                quantity: item.cartQuantity
              });
            }
          });
        }
      });
    }).catch(error => console.error("Failed to fetch cart:", error));
  }, [dispatch]);
  console.log(cartItems);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem)); 
  }
  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <Header />
      <HeaderBottom />
      <ToastContainer />
      <div className="bg-[#EFFDEC]">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <Breadcrumbs title="My Cart" />
          </div>
          {cart.cartItems.length === 0 ? (
            <div className="flex flex-col justify-center items-center  text-center px-4">
              <div className="mb-2">
                <img className="h-auto max-w-xs md:max-w-sm lg:max-w-lg mx-auto mb-5" src={imag} alt="Empty Cart" />
                <p className="text-lg md:text-xl xs:text-lg lg:text-2xl mt-4">Your cart is empty. Start shopping now!</p>
              </div>
              <Link to="/home" className="mt-5 mb-20 bg-blue-100 hover:bg-blue-400 hover:text-white text-primeColor font-bold py-2 px-4 rounded">
                <button>Start Shopping</button>
              </Link>
            </div>
          ) :
            <div className="flex flex-col md:flex-row items-start justify-center gap-4">
              <div className="w-full md:w-3/4 bg-white mb-10 rounded-lg">
                <div className="bg-[#bbe6b9] py-4">
                  <h1 className="md:text-2xl  font-bold text-center">You have<span className="text-red-500"> {cart.cartTotalQuantity}</span> items in your cart</h1>
                </div>
                {cart.cartItems?.map((items, index) => (
                  <React.Fragment key={items.id}>
                    <div className="flex flex-col  items-center hover:bg-red-50 justify-center md:flex-row gap-4">
                      <div className="md:w-full flex md:flex-row xs:flex-col items-center">
                        <div className="flex items-center justify-center">
                          <img className="w-[200px] object-contain" src={`${baseURL}${items.image}`} alt="Product img" />
                        </div>
                        <div className="flex flex-col items-center justify-center md:w-1/2 xs:w-full space-y-1">
                          <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500"><span className="md:text-xl xs:text-lg font-normal text-primeColor">{items.name}</span></p>
                          <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500">Category : <span className="font-normal text-xl text-primeColor">Spices</span></p>
                          <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500">Quantity :   <select className="order-1 mt-1 hover:bg-gray-400 font-normal font-body2 text-black hover:text-white">
                            {
                              items.quantity_variants
                               ? items.quantity_variants.map((quantity, index) => (
                                <option key={index} value={`${quantity.volume}g`} className="text-black bg-white md:text-xl xs:text-lg font-medium">{`${quantity.volume} ${quantity.unit}`}</option>
                              )) : null
                            }
                          </select></p>
                          <div className={`md:text-lg xs:text-base ${items.in_stock === 0 || (items.in_stock > 0 && items.in_stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                            {items.in_stock === 0 ? "Out of Stock" : items.in_stock < 10 ? `Only ${items.in_stock} items left` : `${items.in_stock} items in stock`}
                          </div>
                          <button onClick={() => handleRemoveFromCart(items)} className="text-red-600 hover:text-red-500 md:text-lg xs:text-base">Remove item</button>
                        </div>
                        <div className="md:w-1/2 flex flex-col items-center justify-center xs:mt-3">
                          <div>
                            <button onClick={() => handleDecrease(items)} className="px-2 py-2 text-lg bg-gray-500 hover:bg-red-400 text-white "> <span><FaMinus /></span> </button>
                            <span className="px-4 text-lg  bg-gray-200">{items.cartQuantity}</span>
                            <button onClick={() => handleIncrease(items)} className="px-2 py-2 text-lg bg-gray-500 hover:bg-green-400 text-white "><span><FaPlus /></span></button>
                          </div>
                          <div className="mt-4 mb-5">
                            <p className="font-semibold flex items-center hover:text-gray-500 md:text-xl xs:text-sm">Price : <span className="mt-[2px]"><MdCurrencyRupee /></span>{items.price * items.cartQuantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index !== data.length - 1 && <hr />}
                  </React.Fragment>
                ))
                }
              </div>
              <div className="flex flex-col w-full md:w-1/2 bg-white rounded-lg mb-10">
                <div className="bg-[#bbe6b9] py-4">
                  <h1 className="text-2xl font-bold text-center">Summary</h1>
                </div>
                <div className="flex justify-between p-3">
                  <p className="flex-1 font-medium xs:text-sm md:text-xl">Products Quantity:</p>
                  <p className="flex-1 text-right font-medium">{cart.cartTotalQuantity}</p>
                </div>
                <div className="flex justify-between p-3">
                  <p className="flex-1 font-medium xs:text-sm md:text-xl">Shipping Fee:</p>
                  <p className="flex-1 text-right font-medium">{ cartItems.shipping_amount }</p>
                </div>
                <div className="flex justify-between p-3">
                  <p className="flex-1 font-medium md:text-xl xs:text-sm">Total amount:</p>
                  <p className="flex items-center text-right md:text-[20px] font-medium"><span className="md:mt-[2px] xs:mt-[3px] md:text-base xs:text-sm"><MdCurrencyRupee /></span>{cart.cartTotalAmount}</p>
                </div>
                <div className="flex flex-col items-center">
                  {isAuthenticated ? (
                    <Link to="/checkout" className="w-full">
                      <button className="bg-black hover:bg-primeColor font-medium text-white px-full py-2 rounded mt-4 w-full ">Proceed to Checkout</button>
                    </Link>

                  ) : (
                    <Link to="/signin" className="w-full">
                      <button className="bg-black hover:bg-primeColor font-medium text-white px-full py-2 rounded mt-4 w-full">Sign in to Checkout</button>
                    </Link>
                  )}
                  <div className="flex justify-between items-center py-3 w-full">
                    <button onClick={() => handleClearCart()} className="bg-red-600 py-1 px-2 rounded-md text-white font-medium hover:bg-red-500 ml-2">Clear Cart</button>
                    <Link to="/home" className="text-center">
                      <button className="flex items-center justify-center hover:text-blue-600 mr-2"><span className="mt-[2px] pr-1"><IoIosArrowRoundBack /></span>Continue Shopping</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Cart;


