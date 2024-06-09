import React from "react";
import Heading from "../Products/Heading";
import img1 from "../../../assets/images/products/bestSeller/batham_health mix.png"
import img2 from "../../../assets/images/products/bestSeller/dia health mix.png"
import img3 from "../../../assets/images/products/bestSeller/instant millet adaidosamix.png"
import img4 from "../../../assets/images/products/bestSeller/instant multicmillet dosa.png"
import img5 from "../../../assets/images/products/bestSeller/istant ragi dosamix.png"
import spfOne from "../../../assets/images/products/bestSeller/instant pearl dosa mix.png"
import { BsPlus, BsDash } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import Badge from "../Products/Badge";
import SampleNextArrow from "../NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../NewArrivals/SamplePrevArrow";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart } from "../../../redux/cartSlice";
import { GiShoppingCart } from "react-icons/gi";

const data = [{
  _id: 1001,
  img: spfOne,
  productName: "instant pearl dosa mix",
  price: "350.00",
  offerPrice: "300.00",
  stock: 10,
  quantity: [250, 500],
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1002,
  img: img5,
  productName: "Instant Ragi dosamix",
  price: "180.00",
  offerPrice: "130.00",
  quantity: [250, 500],
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1003,
  img: img1,
  productName: "Batham Health Mix",
  price: "250.00",
  offerPrice: "200.00",
  quantity: [250, 500],
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1004,
  img: img4,
  productName: "Instant multicmillet dosa",
  price: "520.00",
  offerPrice: "300.00",
  quantity: [250, 500],
  stock: 5,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1005,
  img: img3,
  productName: "Instant Adai Dosamix",
  price: "435.00",
  quantity: [250, 500],
  stock: 30,
  offerPrice: "300.00",
  badge: false,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1006,
  img: img2,
  productName: "Dia Health Mix",
  price: "180.00",
  stock: 50,
  quantity: [250, 500],
  offerPrice: "300.00",
  badge: false,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},]


const BestSellers = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
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
    <div className="w-full mt-6 pb-20">
      <Heading heading="Premium Products" />
      <Slider {...settings}>
        {data.map((product, index) => (
          <div key={product._id} className="p-2" data-aos="fade-up">
            <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-md">
              <div className="flex flex-col items-center justify-center max-w-full max-h-full bg-white ">
                <div className="relative">
                  <Link to="/productDetails"> <Image className="w-[250px] h-[250px] object-cover rounded-full" imgSrc={product.img} />  </Link>
                  {product.badge && (
                    <div className="absolute top-2 left-0">
                      <Badge text="20%" />
                    </div>
                  )}
                </div>
              </div>
              <div className="py-1 flex flex-col gap-1 border-[1px] border-t-0 px-2 bg-white group-hover:bg-yellow-100">
                <div className="flex flex-col items-center justify-between font-titleFont ">
                  <h2 className="md:text-lg xl:text-xl lg:text-xl xs:text-[15px] sm:text-[15px] font-body2 text-primeColor font-bold">
                    {product.productName}
                  </h2>
                  <p className="text-primeColor xl:text-[15px] lg:text-[15px]  md:text-[15px] xs:text-[12px]  font-semibold flex pt-1 ">
                    <span className="md:pt-[4px] sm:pt-[2px] xs:pt-[3px] lg:pt-[4px] xl:text-[13px] lg:text-[13px] md:text-[15px] xs:text-[11px]">
                      <FaRupeeSign />
                    </span>
                    <span className="line-through text-gray-600">{product.price}</span>
                    <span className="ml-2">{product.offerPrice}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <select className="order-1 mt-1 hover:bg-primeColor font-medium font-body2 text-black hover:text-white xl:text-[20px] lg:text-[15px] md:text-[12px] xs:text-[10px] sm:text-[10px]">
                    {
                      product.quantity.map((items, index) => (
                        <option key={index} value="250g" className="text-black bg-white font-medium">{items}g</option>
                      ))
                    }
                  </select>
                  <div className="flex items-center order-2">
                    <button onClick={() => handleDecrease(product)} className="px-2 py-2 text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white">
                      <BsDash />
                    </button>
                    <span className="px-3 text-lg  bg-gray-100">{getCartQuantity(product._id)}</span>
                    <button onClick={() => handleIncrease(product)} className="px-2 py-2 text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white">
                      <BsPlus />
                    </button>
                  </div>
                  <button onClick={() => handleBuy(product)} className="flex items-center order-3 font-body2 hover:bg-primeColor px-2 font-medium xs:text-[15px] md:text-[15px] lg:text-[20px] xl:text-[20px] text-black hover:text-white bg-white  hover:translate-y-1 transition-transform duration-500">
                    Add <span className="pl-1"><GiShoppingCart /></span>
                  </button>
                </div>
                <div className={`md:text-lg xl:text-xl lg:text-xl sm:text-sm font-normal text-center xs:text-sm ${product.stock === 0 || (product.stock > 0 && product.stock < 10) ? 'text-red-500' : 'text-green-500'}`}>
                  {product.stock === 0 ? "Out of Stock" : product.stock < 10 ? `Only ${product.stock} items left` : `${product.stock} items in stock`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSellers;
