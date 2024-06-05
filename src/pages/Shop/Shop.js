import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import img1 from "../../assets/categories/dates.webp"
import img2 from "../../assets/categories/dryfruits.jpg"
import img3 from "../../assets/categories/millets.webp"
import img4 from "../../assets/categories/seeds.webp"
import img5 from "../../assets/categories/tea-coffee.webp"
import spfOne from "../../assets/images/products/specialOffer/millets.webp"
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import Image from "../../components/designLayouts/Image";
import Badge from "../../components/home/Products/Badge";
import { FaCodeCompare } from "react-icons/fa6";
import ReactPaginate from 'react-paginate';
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";

const data = [{
  _id: 1001,
  img: spfOne,
  productName: "Millets", 
  price: "350.00",
  offerPrice: "300.00",
  stock: 10,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1002,
  img: img5,
  productName: "Millets",
  price: "180.00",
  offerPrice: "130.00",
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1003,
  img: img1,
  productName: "Millets",
  price: "250.00",
  offerPrice: "200.00",
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1004,
  img: img4,
  productName: "Millets",
  price: "520.00",
  offerPrice: "300.00",
  stock: 5,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1005,
  img: img3,
  productName: "Millets",
  price: "435.00",
  stock: 30,
  offerPrice: "300.00",
  badge: false,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1006,
  img: img2,
  productName: "Millets",
  price: "180.00",
  stock: 50,
  offerPrice: "300.00",
  badge: false,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1007,
  img: spfOne,
  productName: "Millets",
  price: "350.00",
  offerPrice: "300.00",
  stock: 10,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1008,
  img: img5,
  productName: "Millets",
  price: "180.00",
  offerPrice: "130.00",
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1009,
  img: img1,
  productName: "Millets",
  price: "250.00",
  offerPrice: "200.00",
  stock: 0,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
},
{
  _id: 1010,
  img: spfOne,
  productName: "Millets",
  price: "350.00",
  offerPrice: "300.00",
  stock: 10,
  badge: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
}]


const Shop = () => {
  const itemsPerPage =12
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
 

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const bgColors = ["bg-[#feefb2]", "bg-[#f0c0a0]", "bg-[#a0e7e5]", "bg-[#f4bfbf]", "bg-[#b0c0f0]","bg-[#9086ad]"];
  return (
    <div>
       <Header />
    <HeaderBottom />
    <div className='bg-[#EFFDEC]'>
    <div className="max-w-container mx-auto px-5">
      <Breadcrumbs title="Products" />
      <div className="w-full h-full flex pb-20 gap-10"> 
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-aos="fade-up">
      {data.slice(offset, offset + itemsPerPage).map((product,index) => (
        <div key={product._id} className="p-2">
          <div className="relative overflow-hidden group max-w-full max-h-full hover:shadow-slate-700 shadow-md">
            <div className={`flex flex-col items-center justify-center ${bgColors[index % bgColors.length]} max-w-full max-h-full`}>
              <div className="relative">
                <Image className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] object-cover rounded-full" imgSrc={product.img} />
                {product.badge && (
                  <div className="absolute xs:top-0 xs:left-2 md:top-1 md:left-0">
                    <Badge text="New" />
                  </div>
                )}
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
                  <span className="md:pt-[2px] sm:pt-[3px] xs:pt-[3px] lg:pt-[4px] xl:text-[13px] lg:text-[13px] md:text-[15px] xs:text-[6px]">
                    <FaRupeeSign />
                  </span>
                  <span className="line-through text-gray-600">{product.price}</span>
                  <span className="ml-1">{product.offerPrice}</span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button className="order-2 ml-2 py-1 hover:bg-primeColor text-black px-2 font-medium xs:text-[7px] md:text-[15px] lg:text-[15px] xl:text-[17px] hover:text-white rounded-2xl hover:rounded-none  hover:translate-y-1 transition-transform duration-500">
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex justify-center gap-3 items-center mt-5 mb-10"
        activeClassName="bg-[#ff652f] text-white px-4 py-2 rounded-full"
        pageLinkClassName="px-3 py-2 hover:bg-lightGray rounded"
      />
    </div>
    </div>
    <Footer />
  <FooterBottom />
    </div>
  );
};

export default Shop;