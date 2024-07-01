import React from 'react';
import Breadcrumbs from '../pageProps/Breadcrumbs';

const OrderDetails = () => {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
        <Breadcrumbs title="Order Details" />
     

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <button className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
          <span className="mr-2">SHOW MORE</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="flex space-x-4 mt-4">
          <button className="flex-1 bg-gray-200 p-3 rounded border border-gray-400 hover:bg-gray-300 transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h7m0 0v7m0-7L10 19l-5-5-7 7"></path>
            </svg>
            <span className="block text-center text-sm">Open Tracking Link</span>
          </button>
          <button className="flex-1 bg-gray-200 p-3 rounded border border-gray-400 hover:bg-gray-300 transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z"></path>
            </svg>
            <span className="block text-center text-sm">Share</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg">Return / Exchange Order</h2>
        <p className="text-gray-500">Not available</p>
        <button className="text-indigo-600 mt-2 hover:text-indigo-800 transition-colors">Download Invoice</button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg">Order Details</h2>
        <div className="mt-4">
          <div className="flex justify-between">
            <span>Total Price</span>
            <span>₹493</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Total Discounts</span>
            <span>- ₹55</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Order Total</span>
            <span>₹438</span>
          </div>
          <div className="bg-green-200 p-3 rounded mt-2 text-green-800">
            <span>Yay! Your total discount is ₹55</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg">Delivery Address</h2>
        <p className="mt-2">Jozef Kurivila</p>
        <p>sri venkateshwara ladies av pg, TVH Crossway Layout, Sholinganallur, Lal Bahadur Shastri Street, Sholinganallur...</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="font-bold text-lg">Product Details</h2>
        <div className="flex items-center mt-2">
          <img className="w-20 h-20 rounded mr-4" src="https://via.placeholder.com/80" alt="Product" />
          <div>
            <p className="font-bold">millets nuts with combo</p>
            <p className="text-gray-500">₹493 - All Returns</p>
            <p className="text-gray-500">Size: 34C</p>
          </div>
        </div>
        <div className="mt-4">
          <h3>How was the product?</h3>
          <div className="flex space-x-2 mt-2">
            <button className="flex-1 bg-gray-300 p-3 rounded text-gray-700 hover:bg-gray-400 transition-colors">Very Bad</button>
            <button className="flex-1 bg-gray-300 p-3 rounded text-gray-700 hover:bg-gray-400 transition-colors">Bad</button>
            <button className="flex-1 bg-gray-300 p-3 rounded text-gray-700 hover:bg-gray-400 transition-colors">Ok-Ok</button>
            <button className="flex-1 bg-gray-300 p-3 rounded text-gray-700 hover:bg-gray-400 transition-colors">Good</button>
            <button className="flex-1 bg-gray-300 p-3 rounded text-gray-700 hover:bg-gray-400 transition-colors">Very Good</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-bold text-lg">Order Tracking</h2>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <div className="flex-1 ml-2">Order Placed</div>
            <div className="text-gray-600">08:57 PM, 02 June, 2024</div>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <div className="flex-1 ml-2">Shipped</div>
            <div className="text-gray-600">02:48 PM, 03 June, 2024</div>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <div className="flex-1 ml-2">Delivered</div>
            <div className="text-gray-600">11:53 AM, 07 June, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

