import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import { FaRupeeSign } from "react-icons/fa";
import { addToCart, decreaseCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPlus, BsDash } from "react-icons/bs";
import { baseURL } from "../../constants";
import { ProductDetails as fetchProductDetails } from "../../actions/ShopActions";
import ReactPaginate from "react-paginate";
import Image from "../../components/designLayouts/Image";
import Heading from "../../components/home/Products/Heading";
import Loader from "../../components/Loader/Loader";

const ProductDetails = () => {
  const location = useLocation();
  const { productId } = location.state || {};
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0)
  const [products, setProducts] = useState([]);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [extraImages, setExtraImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      setIsLoading(true);
      fetchProductDetails(productId).then((response) => {
        setData(response);
        setProducts(response.related_products)
        setMainImage(response.product?.image);
        setExtraImages(response.product?.extra_images || []);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    }
  }, [productId]);

  const handleImageClick = (selectedImage) => {
    setExtraImages((prevImages) => [
      { image: mainImage },
      ...prevImages.filter((img) => img.image !== selectedImage),
    ]);
    setMainImage(selectedImage);
  };
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleBuy = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const getCartQuantity = (productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return cartItem ? cartItem.cartQuantity : 0;
  };

  const handleView = (id) => {
    navigate(`/productDetails`, { state: { productId: id } });
  };

  if (isLoading) return <div><Loader /></div>;

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
                        <div>
                          <div>
                            <img className="md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xs:w-[230px] xs:h-[230px] lg:ml-[40px] xl:ml-[140px] md:ml-[145px] xs:ml-7 sm:ml-14 object-contain rounded-full" src={`${baseURL}${mainImage}`} alt="product" />
                          </div>
                        </div>
                        <ul className="flex items-center justify-center mt-4 space-x-2">
                          {extraImages.map((extraImage, index) => (
                            <li key={index}>
                              <img className="w-28 h-28  object-contain cursor-pointer" src={`${baseURL}${extraImage.image}`} alt="product thumbnail" onClick={() => handleImageClick(extraImage.image)} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Product Details */}
                    <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0 bg-yellow-50  p-5 font-body2">
                      <div className="flex flex-col items-start ">
                        <h3 className=" text-2xl font-bold mb-2">{data.product?.name}</h3>
                        <h3 className=" text-2xl font-bold mb-2 flex flex-row">
                          <del className="text-gray-500 flex items-center"><span className="text-lg"><FaRupeeSign /></span>{data.product?.price + 100}</del>
                          <span className="text-red-500 ml-2 flex items-center">{data.product?.price} <small className="text-sm text-gray-500"> /per {data.product?.unit}</small></span>
                        </h3>
                        <p className=" text-gray-700 mb-4 text-xl">{data.product?.description}</p>
                        <div className=" mb-4">
                          <label className=" font-bold flex items-center gap-2">Category :<span className="text-blue-500 hover:underline">{data.product?.category?.join(", ")}</span></label>
                        </div>
                        <div className={`md:text-lg mb-4 lg:text-xl sm:text-sm font-normal text-center xs:text-sm ${data.product.stock === 0 || (data.product.in_stock >= 0 && data.product.in_stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                          {data.product.in_stock === 0 ? "Out of Stock" : data.product.in_stock < 10 ? `Only ${data.product.in_stock} ${data.product.unit} items left` : `${data.product.in_stock}${data.product.unit} items in stock`}
                        </div>
                        <div className=" flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            <button onClick={() => handleDecrease(data.product)} className="px-3 py-3 text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white">
                              <BsDash />
                            </button>
                            <span className="px-3 py-1 text-lg  bg-gray-100">{getCartQuantity(data.product?.id)}</span>
                            <button onClick={() => handleIncrease(data.product)} className="px-3 py-3 text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white">
                              <BsPlus />
                            </button>
                          </div>
                        </div>
                        <button onClick={() => handleBuy(data.product)} className="bg-primeColor w-full justify-center font-medium text-white px-4 py-2 rounded flex items-center hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500" title="Add to Cart">
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white font-body2 shadow-xl p-8 text-xl">
              {data.product.attributes?.about && (
                <div className="mb-4">
                  <h2 className="text-xl font-bold w-full bg-yellow-50 text-black text-center p-2 mb-2">About</h2> 
                  <ul className="list-disc pl-5 text-gray-700 ">
                    {data.product.attributes.about.split('●').filter(item => item.trim() !== '').map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.product.attributes?.advantages && (
                <div className="mb-4">
                  <h2 className="text-xl font-bold w-full bg-yellow-50 text-black text-center p-2 mb-2">Advantages</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {data.product.attributes.advantages.split('●').filter(item => item.trim() !== '').map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.product.attributes?.health_benefits && (
                <div className="mb-4">
                  <h2 className="text-xl font-bold w-full bg-yellow-50 text-black text-center p-2 mb-2">Health Benefits</h2>
                  <p className="text-gray-700">{data.product.attributes.health_benefits}</p>
                </div>
              )}
              {data.product.attributes?.nutrition_contents && (
                <div className="mb-4">
                  <h2 className="text-xl font-bold w-full bg-yellow-50 text-black text-center p-2 mb-2">Nutrition Contents</h2>
                  <p className="text-gray-700">{data.product.attributes.nutrition_contents}</p>
                </div>
              )}
              {data.product.attributes?.usage && (
                <div className="mb-4">
                  <h2 className="text-xl font-bold w-full bg-yellow-50 text-black text-center p-2 mb-2">Usage</h2> 
                  <ul className="pl-5 text-gray-700">
                    {data.product.attributes.usage.split('●').filter(item => item.trim() !== '').map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="container mx-auto pb-20 pt-10 font-body2">
                    <Heading heading="Related Products" />
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" data-aos="fade-up">
                        {data.related_products.slice(offset, offset + itemsPerPage).map((product) => (
                            <div key={product.id} className="p-2 ">
                                <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-xl">
                                    <div className='flex flex-col items-center justify-center max-w-full max-h-full bg-gray-100'>
                                        <div className="relative" onClick={() => handleView(product.id)}>
                                            <Image className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] object-contain rounded-full" imgSrc={`${baseURL}${product.image}`} />
                                        </div>
                                    </div>
                                    <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-4 bg-white">
                                        <div className="flex flex-col items-center justify-between font-titleFont ">
                                            <h2 className="md:text-xl xl:text-xl lg:text-xl font-body2 xs:text-[10px] sm:text-[10px] text-primeColor font-bold">
                                                {product.name}
                                            </h2>
                                            <p className="text-primeColor xl:text-[15px] lg:text-[15px]  md:text-[15px] sm:text-[9px] xs:text-[8px]  font-semibold flex pt-1 ">
                                                <span className="md:pt-[2px] sm:pt-[3px] xs:pt-[3px] lg:pt-[4px] xl:text-[13px] lg:text-[13px] md:text-[15px] xs:text-[10px]">
                                                    <FaRupeeSign />
                                                </span>
                                                <span className="line-through xs:text-[12px] md:text-[15px] text-gray-600">{product.price + 100}</span>
                                                <span className="ml-1 xs:text-[12px] md:text-[15px]">{product.price}</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="md:text-xl xs:text-sm px-3 py-1   bg-gray-200 rounded-full hover:bg-gray-400" onClick={() => handleDecrease(product)}><FaMinus /></button>
                                            <span className="mx-3 md:text-[20px] xs:text-[15px]">{getCartQuantity(product.id)}</span>
                                            <button className="md:text-xl xs:text-sm px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-400" onClick={() => handleIncrease(product)}><FaPlus /></button>
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
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default ProductDetails;



