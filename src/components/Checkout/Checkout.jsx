import React from 'react';
import Breadcrumbs from '../pageProps/Breadcrumbs';

const CheckoutForm = () => {
  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs title="Checkout" />
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <form>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 font-body2">Billing Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input id='text' className="border p-2 w-full" type="text" placeholder="First Name" />
                <input id='text' className="border p-2 w-full" type="text" placeholder="Last Name" />
                <input id='email' className="border p-2 w-full" type="email" placeholder="Email" />
                <input id='text' className="border p-2 w-full" type="text" placeholder="Address" />
                <input id='text' className="border p-2 w-full" type="text" placeholder="Town/City" />
                <input id='phonenumber' className="border p-2 w-full" type="phonenumber" placeholder="Phone number" />
                <input id='text' className="border p-2 w-full" type="text" placeholder="Pincode" />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 font-body2">Shipping  Address</h2>
              <div className='flex items-center justify-start p-1 font-body-2'>
                <label>
                  <input id='checkbox' type="checkbox" className="form-checkbox" /> Shipping Address Same as Billing Address
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input id='text' className="border p-2 w-full" type="text" placeholder="Shipping Name" />
                <input id='text' className="border p-2 w-full" type="text" placeholder="Address" />
                <input id='text' className="border p-2 w-full" type="text" placeholder="City" />
                <input id='phonenumber' className="border p-2 w-full" type="phonenumber" placeholder="Phone number" />
                <input id='pincode' className="border p-2 w-full" type="text" placeholder="Pincode" />
              </div>
            </div>
           
              <button className="bg-primeColor hover:bg-opacity-90 text-white p-2 font-body2 font-medium text-xl rounded w-full">Complete Checkout and Pay Now</button>
 
          </form>
        </div>
        <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0 ">
          <div className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4 font-body2">Current Cart</h2>
            <div className="mb-4">
              <p className="text-red-500">Watermelon</p>
              <p>Medium x1 <span className="float-right">$25.00</span></p>
            </div>
            <div className="mb-4">
              <p className="text-red-500">Bubble</p>
              <p>Medium x1 <span className="float-right">$25.00</span></p>
            </div>
            <h3 className="text-lg font-semibold mb-2">CART TOTALS</h3>
            <p className="text-2xl font-bold">$50.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
