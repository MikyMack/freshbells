import React, { useState} from "react";
import { motion } from "framer-motion";
import { MdMenuOpen } from "react-icons/md";
import { FaSearch, FaShoppingCart, FaUserCog } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderBottom = () => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false); 
  const handleLogout=(e)=>{
   e.preventDefault();
   dispatch({type: 'LOGOUT', payload: true})
  }
  return  (
    <div className="w-full p-2 h-full  relative bg-[#324c21]">
      <div className="mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 lg:pb-0 h-full">
          {/* Menu Button */}
          <div
            className="flex h-14 cursor-pointer items-center gap-2 text-lightText"
          >
            <button onClick={() => setShow(!show)} className="bg-white transition-all py-2 px-4 rounded-2xl hover:bg-[#ff5f5f] hover:rounded-md flex items-center gap-3 group hover:scale-105 duration-300 ]">
              <MdMenuOpen className="w-5 h-5 text-black group-hover:text-white group-hover:animate-pulse" />
            </button>

            <p className="font-body2 text-lg font-medium text-white">
              Shop by Category
            </p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 z-30 bg-lightText text-white w-auto h-auto p-4 pb-6"
              >
                {/* Categories */}
                <li className=" px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                  Millets
                </li>
                <li className=" px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                  Rices
                </li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                  Powders
                </li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                  Dates
                </li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                  Seeds
                </li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                  Special Mix
                </li>
                {/* Add more categories */}
              </motion.ul>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-1/3 md:h-[50px] xs:h-[40px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl mt-2 lg:mt-0">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#6b6b6b] placeholder:text-[14px]"
              type="text"
              // onChange={handleSearch}
              // value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />

            {/* Search Results */}
            {/* {searchQuery && (
              <div className="absolute top-14 left-0 z-50 w-full mx-auto bg-white shadow-2xl scrollbar-hide cursor-pointer">
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img
                        className="w-24"
                        src={item.img}
                        alt="productImg"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">{item.des}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )} */}
          </div>

          {/* User Settings and Cart */}
          <div className="flex gap-4 lg:mt-0 xs:mt-3 items-center pr-6 cursor-pointer relative">
            <button
              onClick={() => setShowUser(!showUser)}
              className="hover:bg-[#ff5f5f] bg-white transition-all py-2 px-4 rounded-2xl hover:rounded-md flex items-center gap-3 group hover:scale-105 duration-300"
            >
              <FaUserCog className="text-xl text-primeColor group-hover:text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* User Dropdown */}
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 right-1 z-30 bg-lightText text-white w-44 h-auto p-4 pb-6"
              >
                <Link onClick={() => setShowUser(false)} to="/signin">
                  <li className=" px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className=" px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/profile">
                  <li className=" px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                    Profile
                  </li>
                </Link>
                <div onClick={handleLogout}>
                  <li className=" px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">
                    Logout
                  </li>
                </div>
                {/* Add more user options */}
              </motion.ul>
            )}

            {/* Cart Button */}
            <Link to="/cart">
              <div className="relative">
                <button className="hover:bg-[#ff5f5f] bg-white transition-all py-[9px] px-4 rounded-2xl hover:rounded-md flex items-center gap-3 group hover:scale-105 duration-300">
                  <FaShoppingCart className="text-primeColor group-hover:text-white" />
                  <span className="absolute font-body1 top-0 -right-2 group-hover:bg-white group-hover:text-primeColor text-xs w-4 h-4 flex items-center text-center justify-center rounded-full font-semibold bg-[#163020] text-white">
                    {/* {products.length > 0 ? products.length : 0} */}5
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;

