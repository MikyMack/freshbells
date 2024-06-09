import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdMenuOpen } from "react-icons/md";
import { FaSearch, FaShoppingCart, FaUserCog } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import "./Headerbottom.css"
import { data } from "../../../constants/index";

const HeaderBottom = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT', payload: true });
  };

  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));
    });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      const results = data.filter((product) =>
        product.productName.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="w-full p-2 h-full relative bg-[#324c21]">
      <div className="mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 lg:pb-0 h-full">
          {/* Menu Button */}
          <div className="flex h-14 cursor-pointer items-center gap-2 text-lightText">
            <button onClick={() => setShow(!show)} className="bg-white transition-all py-2 px-4 rounded-2xl hover:bg-[#ff5f5f] hover:rounded-md flex items-center gap-3 group hover:scale-105 duration-300">
              <MdMenuOpen className="w-5 h-5 text-black group-hover:text-white group-hover:animate-pulse" />
            </button>
            <div className="word text-white">
              {"Shop by Category".split("").map((char, index) => (
                <span key={index} className={`char${index + 1}`}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </div>
            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 z-30 bg-lightText text-white w-auto h-auto p-4 pb-6"
              >
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Millets</li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Rices</li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Powders</li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Dates</li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Seeds</li>
                <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Special Mix</li>
              </motion.ul>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-1/3 md:h-[50px] xs:h-[40px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl mt-2 lg:mt-0">
            <input
              className="flex-1 h-full outline-none placeholder-transparent"
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
            />
            {!searchValue && (
              <span className="absolute inset-0 flex items-center px-6 pointer-events-none font-body2 font-medium text-[#464646]">
                <TypeAnimation
                  sequence={[
                    'Search for millets',
                    1000,
                    'Search for Rices',
                    1000,
                    'Search for Special Mix',
                    1000,
                    'Search for Dryfruits & Nuts',
                    1000,
                    'Search for Health Mix',
                    1000,
                    'Search for General Combo',
                    1000,
                    'Search for Diet Plans',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '15px', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </span>
            )}
            <FaSearch className="w-5 h-5" />
          </div>
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full lg:w-1/3 bg-white shadow-lg z-50">
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} className="flex items-center justify-start p-2 border-b border-gray-200 hover:bg-gray-100">
                    <Link to={`/product/${result._id}`} className="flex items-center">
                      <img src={result.img} alt={result.productName} className="w-10 h-10 mr-4" />
                      <span className="font-medium">{result.productName}</span>
                    </Link>
                    <br />
                  </li>
                ))}
              </ul>
            </div>
          )}

        

          {/* User Settings and Cart */}
          <div className="flex gap-4 lg:mt-0 xs:mt-3 items-center pr-6 cursor-pointer relative">
            <button
              onClick={() => setShowUser(!showUser)}
              className="hover:bg-[#ff5f5f] bg-white transition-all py-2 px-4 rounded-2xl hover:rounded-md flex items-center gap-3 group hover:scale-105 duration-300"
            >
              <FaUserCog className="text-xl text-primeColor group-hover:text-white drop-shadow-sm cursor-pointer" />
            </button>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 right-1 z-30 bg-lightText text-white w-44 h-auto p-4 pb-6"
              >
                <Link onClick={() => setShowUser(false)} to="/signin">
                  <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Login</li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Sign Up</li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/profile">
                  <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Profile</li>
                </Link>
                <div onClick={handleLogout}>
                  <li className="px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:text-[#5efa6b] duration-300 cursor-pointer">Logout</li>
                </div>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <button className="hover:bg-[#ff5f5f] bg-white transition-all py-[9px] px-4 rounded-2xl hover:rounded-md flex items-center gap-3 group hover:scale-105 duration-300">
                  <FaShoppingCart className="text-primeColor group-hover:text-white" />
                  <span className="absolute font-body1 top-0 -right-2 group-hover:bg-white group-hover:text-primeColor text-xs w-4 h-4 flex items-center text-center justify-center rounded-full font-semibold bg-lightText text-white">
                    {cartTotalQuantity}
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
