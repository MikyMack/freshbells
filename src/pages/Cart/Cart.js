import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import Footer from "../../components/home/Footer/Footer";
import { MdCurrencyRupee } from "react-icons/md";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../../redux/cartSlice";
import imag from "../../assets/images/emptyCart.png";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { baseURL } from "../../constants/index";
import { FetchCart, AddCart, DeleteCart } from "../../actions/CartActions";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
  const [fetchedCartItems, setFetchedCartItems] = useState([]);
  // const [quantities, setQuantities] = useState({});
  const [shippingCharges, setShippingCharges] = useState(0)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
    if (isAuthenticated) {
      FetchCart().then(response => {
        if (!response.status) {
          console.error("Failed to fetch cart:", response);
          return;
        }
        setFetchedCartItems(response.carts);
        setShippingCharges(response);
      }).catch(error => console.error("Failed to fetch cart:", error));
    }
  }, [dispatch, isAuthenticated]);

  const handleRemoveFromCart = (cartItem) => {
    if (isAuthenticated) {
      DeleteCart(cartItem.id).then(() => {
        setFetchedCartItems(fetchedCartItems.filter(item => item.id !== cartItem.id));
      }).catch(error => console.error("Failed to remove cart item:", error));
    } else {
      dispatch(removeFromCart(cartItem));
    }
  }

  const handleDecrease = (cartItem) => {
    if (isAuthenticated) {
      const newQuantity = Math.max(cartItem.quantity - 1, 0);
      const updatedCartItems = fetchedCartItems.map(item =>
        item.id === cartItem.id ? { ...item, quantity: newQuantity } : item
      );
      setFetchedCartItems(updatedCartItems);
      const cartData = {
        product_id: cartItem.product_id,
        volume: cartItem.variants[0].volume,
        unit: cartItem.variants[0].unit,
        quantity: newQuantity,
        price: cartItem.variants_details[0].price
      };
      AddCart(cartData);
    } else { 
      dispatch(decreaseCart(cartItem));
    }
  };


  const handleIncrease = (cartItem) => {
    if (isAuthenticated) {
      const newQuantity = (cartItem.quantity || 0) + 1;
      const updatedCartItems = fetchedCartItems.map(item =>
        item.id === cartItem.id ? { ...item, quantity: newQuantity } : item
      );
      setFetchedCartItems(updatedCartItems);
      const cartData = {
        product_id: cartItem.product_id,
        volume: cartItem.variants[0].volume,
        unit: cartItem.variants[0].unit,
        quantity: newQuantity,
        price: cartItem.variants_details[0].price
      };
      AddCart(cartData)
    } else {
      dispatch(addToCart(cartItem));
    }
  };

  const handleClearCart = () => {
    if (!isAuthenticated) {
      dispatch(clearCart());
    }
  }

  const handleView = (id) => {
    navigate(`/productDetails`, { state: { productId: id } });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/signin');
    }
  };

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
          {isAuthenticated ? (
            fetchedCartItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center text-center px-4">
                <div className="mb-2">
                  <img className="h-auto max-w-xs md:max-w-sm lg:max-w-lg mx-auto mb-5" src={imag} alt="Empty Cart" />
                  <p className="text-lg md:text-xl xs:text-lg lg:text-2xl mt-4">Your cart is empty. Start shopping now!</p>
                </div>
                <Link to="/home" className="mt-5 mb-20 bg-blue-100 hover:bg-blue-400 hover:text-white text-primeColor font-bold py-2 px-4 rounded">
                  <button>Start Shopping</button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-start justify-center gap-4">
                <div className="w-full md:w-3/4 bg-white mb-10 rounded-lg">
                  <div className="bg-[#bbe6b9] py-4">
                    <h1 className="md:text-2xl font-bold text-center">You have<span className="text-red-500"> {fetchedCartItems.length || 0}</span> items in your cart</h1>
                  </div>
                  {fetchedCartItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <div className="flex flex-col items-center hover:bg-red-50 justify-center md:flex-row gap-4">
                        <div className="md:w-full flex md:flex-row xs:flex-col items-center">
                          <div className="flex items-center justify-center" onClick={() => handleView(item.product_id)}>
                            <img className="w-[200px] object-contain cursor-pointer" src={`${baseURL}${item.image}`} alt="Product img" />
                          </div>
                          <div className="flex flex-col items-center justify-center md:w-1/2 xs:w-full space-y-1">
                            <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500"><span className="md:text-xl xs:text-lg font-normal text-primeColor">{item.name}</span></p>
                            <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500">Category : <span className="font-normal text-xl text-primeColor">Spices</span></p>
                            <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500">Quantity : <select className="order-1 mt-1 hover:bg-gray-400 font-normal font-body2 text-black hover:text-white">
                              {item.variants_details.map((variant, index) => (
                                <option key={index} value={`${variant.volume}g`} className="text-black bg-white md:text-xl xs:text-lg font-medium">{`${variant.volume} ${variant.unit}`}</option>
                              ))}
                            </select></p>
                            <div className={`md:text-lg xs:text-base ${item.variants_details[0]?.in_stock === 0 || (item.variants_details[0]?.in_stock > 0 && item.variants_details[0]?.in_stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                              {item.variants_details[0]?.in_stock === 0 ? "Out of Stock" : item.variants_details[0]?.in_stock < 10 ? `Only ${item.variants_details[0]?.in_stock} ${item.variants_details[0]?.unit} items left` : `${item.variants_details[0]?.in_stock} ${item.variants_details[0]?.unit} items in stock`}
                            </div>
                            <button onClick={() => handleRemoveFromCart(item)} className="text-red-600 hover:text-red-500 md:text-lg xs:text-base">Remove item</button>
                          </div>
                          <div className="md:w-1/2 flex flex-col items-center justify-center xs:mt-3">   
                            <div> 
                              <button onClick={() => handleDecrease(item)} className="px-2 py-2 text-lg bg-gray-500 hover:bg-red-400 text-white "> <span><FaMinus /></span> </button>
                              <span className="px-4 text-lg bg-gray-200">{item.quantity}</span>
                              <button onClick={() => handleIncrease(item)} className="px-2 py-2 text-lg bg-gray-500 hover:bg-green-400 text-white "><span><FaPlus /></span></button>
                            </div>
                            <div className="mt-4 mb-5">
                              <p className="font-semibold flex items-center hover:text-gray-500 md:text-xl xs:text-sm">Price : <span className="mt-[2px]"><MdCurrencyRupee /></span>{item.total_price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index !== fetchedCartItems.length - 1 && <hr />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="w-full md:w-1/4 bg-white p-4 rounded-lg flex flex-col">
                  <div className="flex flex-col justify-between items-center py-2">
                    <div className="flex items-center">
                      <p className="flex items-center font-medium md:text-xl xs:text-sm">Shipping Amount : </p>
                      <p className="flex items-center text-right md:text-[20px] font-medium"><span className="md:mt-[2px] xs:mt-[3px] lg:text-xl md:text-base xs:text-sm"><MdCurrencyRupee /></span>{shippingCharges.shipping_amount}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="flex-1 font-medium md:text-xl xs:text-sm">Total Amount : </p>
                      <p className="flex items-center text-right md:text-[20px] font-medium"><span className="md:mt-[2px] xs:mt-[3px] lg:text-xl md:text-base xs:text-sm"><MdCurrencyRupee /></span>{shippingCharges.shipping_amount + shippingCharges.total_price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div onClick={handleCheckout} className="w-full">
                      <button className="bg-black hover:bg-primeColor font-medium text-white px-full py-2 rounded mt-4 w-full">Proceed to Checkout</button>
                    </div>
                    <div className="flex justify-between items-center py-3 w-full">
                      <button onClick={() => handleClearCart()} className="bg-red-600 py-1 px-2 rounded-md text-white font-medium hover:bg-red-500 ml-2">Clear Cart</button>
                      <Link to="/home" className="text-center">
                        <button className="flex items-center justify-center hover:text-blue-600 mr-2"><span className="mt-[2px] pr-1"><IoIosArrowRoundBack /></span>Continue Shopping</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            cart.cartItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center text-center px-4">
                <div className="mb-2">
                  <img className="h-auto max-w-xs md:max-w-sm lg:max-w-lg mx-auto mb-5" src={imag} alt="Empty Cart" />
                  <p className="text-lg md:text-xl xs:text-lg lg:text-2xl mt-4">Your cart is empty. Start shopping now!</p>
                </div>
                <Link to="/home" className="mt-5 mb-20 bg-blue-100 hover:bg-blue-400 hover:text-white text-primeColor font-bold py-2 px-4 rounded">
                  <button>Start Shopping</button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-start justify-center gap-4">
                <div className="w-full md:w-3/4 bg-white mb-10 rounded-lg">
                  <div className="bg-[#bbe6b9] py-4">
                    <h1 className="md:text-2xl font-bold text-center">You have<span className="text-red-500"> {cart.cartItems.length || 0}</span> items in your cart</h1>
                  </div>
                  {cart.cartItems.map((cartItem, index) => (
                    <React.Fragment key={cartItem.id}>
                      <div className="flex flex-col items-center hover:bg-red-50 justify-center md:flex-row gap-4">
                        <div className="md:w-full flex md:flex-row xs:flex-col items-center">
                          <div className="flex items-center justify-center" onClick={() => handleView(cartItem.id)}>
                            <img className="w-[200px] object-contain cursor-pointer" src={`${baseURL}${cartItem.image}`} alt="Product img" />
                          </div>
                          <div className="flex flex-col items-center justify-center md:w-1/2 xs:w-full space-y-1">
                            <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500"><span className="md:text-xl xs:text-lg font-normal text-primeColor">{cartItem.name}</span></p>
                            <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500">Category : <span className="font-normal text-xl text-primeColor">{cartItem.category[0]}</span></p>
                            <p className="hover:text-gray-500 md:text-xl xs:text-sm text-gray-500">Quantity : <select className="order-1 mt-1 hover:bg-gray-400 font-normal font-body2 text-black hover:text-white">
                              {cartItem.quantity_variants.map((variant, index) => (
                                <option key={index} value={`${variant.volume}g`} className="text-black bg-white md:text-xl xs:text-lg font-medium">{`${variant.volume} ${variant.unit}`}</option>
                              ))}
                            </select></p>
                            <div className={`md:text-lg xs:text-base ${cartItem.in_stock === 0 || (cartItem.in_stock > 0 && cartItem.in_stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                              {cartItem.in_stock === 0 ? "Out of Stock" : cartItem.in_stock < 10 ? `Only ${cartItem.in_stock} items left` : `${cartItem.in_stock} items in stock`}
                            </div>
                            <button onClick={() => handleRemoveFromCart(cartItem)} className="text-red-600 hover:text-red-500 md:text-lg xs:text-base">Remove item</button>
                          </div>
                          <div className="md:w-1/2 flex flex-col items-center justify-center xs:mt-3">
                            <div>
                              <button onClick={() => handleDecrease(cartItem)} className="px-2 py-2 text-lg bg-gray-500 hover:bg-red-400 text-white "> <span><FaMinus /></span> </button>
                              <span className="px-4 text-lg bg-gray-200">{cartItem.cartQuantity}</span>
                              <button onClick={() => handleIncrease(cartItem)} className="px-2 py-2 text-lg bg-gray-500 hover:bg-green-400 text-white "><span><FaPlus /></span></button>
                            </div>
                            <div className="mt-4 mb-5">
                              <p className="font-semibold flex items-center hover:text-gray-500 md:text-xl xs:text-sm">Price : <span className="mt-[2px]"><MdCurrencyRupee /></span>{cartItem.price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index !== cart.cartItems.length - 1 && <hr />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="w-full md:w-1/4 bg-white p-4 rounded-lg flex flex-col">
                  <div className="flex justify-between items-center py-2">
                    <p className="flex-1 font-medium md:text-xl xs:text-sm">Total amount:</p>
                    <p className="flex items-center text-right md:text-[20px] font-medium"><span className="md:mt-[2px] xs:mt-[3px] md:text-base xs:text-sm"><MdCurrencyRupee /></span>{cart.cartItems.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div onClick={handleCheckout} className="w-full">
                      <button className="bg-black hover:bg-primeColor font-medium text-white px-full py-2 rounded mt-4 w-full">Proceed to Checkout</button>
                    </div>
                    <div className="flex justify-between items-center py-3 w-full">
                      <button onClick={() => handleClearCart()} className="bg-red-600 py-1 px-2 rounded-md text-white font-medium hover:bg-red-500 ml-2">Clear Cart</button>
                      <Link to="/home" className="text-center">
                        <button className="flex items-center justify-center hover:text-blue-600 mr-2"><span className="mt-[2px] pr-1"><IoIosArrowRoundBack /></span>Continue Shopping</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Cart;
