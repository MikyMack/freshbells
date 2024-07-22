import React, { useState, useEffect } from "react";
import { FaRupeeSign, FaPlus } from "react-icons/fa";
import { baseURL } from "../../constants";
import { ADD_Billing_Address, Get_Address } from "../../actions/CartActions";
import Breadcrumbs from "../pageProps/Breadcrumbs";
import Slider from "react-slick";
import SampleNextArrow from "../home/NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../home/NewArrivals/SamplePrevArrow";

const CheckoutForm = () => {
  const [billing, setBilling] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [carts, setCarts] = useState([]);
  const [selectedBillingIndex, setSelectedBillingIndex] = useState(0);
  const [selectedShippingIndex, setSelectedShippingIndex] = useState(0);
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [amountCal, setAmountCal] = useState({}); 
  // const cartItems = useSelector((state) => state.cart.cartItems);
  // const totalAmount = cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await Get_Address();
        setBilling(response.billingAddress);
        setShipping(response.delivery_addresses);
        setAmountCal(response); // Set shipping amount from response
        setCarts(response.carts);
      } catch (error) {
        console.error("Error fetching addresses", error);
      }
    };

    fetchAddresses();
  }, []);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBilling({ ...billing, [name]: value });
  };

  const handleShippingChange = (e, index) => {
    const { name, value } = e.target;
    const newShipping = [...shipping];
    newShipping[index][name] = value;
    setShipping(newShipping);
  };

  const handleBillingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ADD_Billing_Address(billing);
      console.log(response, "checkout");
      setShowBillingForm(false);
    } catch (error) {
      console.error("Error submitting billing information", error);
    }
  };

  const handleShippingSubmit = async (e) => {
    e.preventDefault();
    try {
      const shippingDetails = {
        shipping_name: shipping[selectedShippingIndex].name,
        shipping_address: shipping[selectedShippingIndex].address,
        shipping_phone: shipping[selectedShippingIndex].phone,
        shipping_alt_phone: shipping[selectedShippingIndex].alternate_phone,
        shipping_city: shipping[selectedShippingIndex].city,
        shipping_state: shipping[selectedShippingIndex].state,
        shipping_zip_code: shipping[selectedShippingIndex].zip_code,
        shipping_landmark: shipping[selectedShippingIndex].landmark,
      };
      const response = await ADD_Billing_Address(shippingDetails);
      console.log(response, "checkout");
      setShowShippingForm(false);
    } catch (error) {
      console.error("Error submitting shipping information", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Information: ", billing[selectedBillingIndex]);
    console.log("Shipping Information: ", shipping[selectedShippingIndex]);
  };

  const handleBillingRadioChange = (index) => {
    setSelectedBillingIndex(index);
  };

  const handleShippingRadioChange = (index) => {
    setSelectedShippingIndex(index);
  };

  return (
    <div className="container mx-auto p-4 font-body2">
      <Breadcrumbs title="Checkout" />
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Forms Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Billing Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
            {showBillingForm ? (
              <form className="space-y-4" onSubmit={handleBillingSubmit}>
                <div className="flex flex-col">
                  <label className="font-medium">Billing Name</label>
                  <input
                    type="text"
                    name="billing_name"
                    value={billing[selectedBillingIndex]?.name || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Billing Address</label>
                  <input
                    type="text"
                    name="billing_address"
                    value={billing[selectedBillingIndex]?.address || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Billing Phone</label>
                  <input
                    type="text"
                    name="billing_phone"
                    value={billing[selectedBillingIndex]?.phone || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Billing Alternate Phone</label>
                  <input
                    type="text"
                    name="billing_alt_phone"
                    value={billing[selectedBillingIndex]?.alternate_phone || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Billing City</label>
                  <input
                    type="text"
                    name="billing_city"
                    value={billing[selectedBillingIndex]?.city || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Billing State</label>
                  <input
                    type="text"
                    name="billing_state"
                    value={billing[selectedBillingIndex]?.state || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Billing Postal Code</label>
                  <input
                    type="text"
                    name="billing_zip_code"
                    value={billing[selectedBillingIndex]?.zip_code || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Billing Landmark</label>
                  <input
                    type="text"
                    name="billing_landmark"
                    value={billing[selectedBillingIndex]?.landmark || ''}
                    onChange={handleBillingChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowBillingForm(false)}
                    className="mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                  >
                    Submit Billing Information
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6">
                {billing.length > 0 ? (
                  <div className="mt-4">
                    <Slider {...settings}>
                      {billing.map((billingInfo, index) => (
                        <div key={index} className={`border p-4 space-x-2 shadow-lg flex flex-col justify-center items-center bg-green-100 cursor-pointer mb-4 ${selectedBillingIndex === index ? 'bg-green-300' : ''}`} onClick={() => handleBillingRadioChange(index)}>
                          <input className="hidden"
                            type="radio"
                            name="billingAddress"
                            value={index}
                            checked={selectedBillingIndex === index}
                            onChange={() => handleBillingRadioChange(index)}
                          />
                          <div className="">
                            <p className="text-lg font-medium text-orange-600">Name : <span className="text-primeColor ml-2  font-normal">{billingInfo.name}</span> </p>
                            <p className="text-lg font-medium text-orange-600">Address : <span className="text-primeColor ml-2   font-normal">{billingInfo.address}</span> </p>
                            <p className="text-lg font-medium text-orange-600">Phone : <span className="text-primeColor ml-2   font-normal">{billingInfo.phone}</span></p>
                            <p className="text-lg font-medium text-orange-600">Alternate Phone : <span className="text-primeColor ml-2  font-normal">{billingInfo.alternate_phone}</span> </p>
                            <p className="text-lg font-medium text-orange-600">City : <span className="text-primeColor ml-2  font-normal">{billingInfo.city}</span></p>
                            <p className="text-lg font-medium text-orange-600">State : <span className="text-primeColor ml-2  font-normal">{billingInfo.state}</span> </p>
                            <p className="text-lg font-medium text-orange-600">Postal Code : <span className="text-primeColor ml-2 text-xl  font-normal">{billingInfo.zip_code}</span></p>
                            <p className="text-lg font-medium text-orange-600">Landmark : <span className="text-primeColor ml-2 text-xl  font-normal">{billingInfo.landmark}</span></p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                ) : (
                  <p className="text-lg font-medium">No billing address available</p>
                )}
                <button
                  onClick={() => setShowBillingForm(true)}
                  className="mt-4 bg-primeColor text-white py-2 px-4 rounded hover:bg-black transition duration-300 flex items-center"
                >
                  <FaPlus className="mr-2" /> Add New Billing Address
                </button>
              </div>
            )}
          </div>
          {/* Shipping Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            {showShippingForm ? (
              <form className="space-y-4" onSubmit={handleShippingSubmit}>
                <div className="flex flex-col">
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={shipping[selectedShippingIndex]?.name || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={shipping[selectedShippingIndex]?.address || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={shipping[selectedShippingIndex]?.phone || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Alternate Phone</label>
                  <input
                    type="text"
                    name="alternate_phone"
                    value={shipping[selectedShippingIndex]?.alternate_phone || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={shipping[selectedShippingIndex]?.city || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">State</label>
                  <input
                    type="text"
                    name="state"
                    value={shipping[selectedShippingIndex]?.state || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Postal Code</label>
                  <input
                    type="text"
                    name="zip_code"
                    value={shipping[selectedShippingIndex]?.zip_code || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    value={shipping[selectedShippingIndex]?.landmark || ''}
                    onChange={(e) => handleShippingChange(e, selectedShippingIndex)}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowShippingForm(false)}
                    className="mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                  >
                    Submit Shipping Information
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className=" mt-4">
                  <Slider {...settings}>
                    {shipping.map((address, index) => (
                      <div key={index} className={`border p-4 space-x-2 shadow-lg flex flex-col justify-center items-center bg-green-100 cursor-pointer mb-4 ${selectedShippingIndex === index ? 'bg-green-300' : ''}`} onClick={() => handleShippingRadioChange(index)}>
                        <input
                        className="hidden"
                          type="radio"
                          id={`radio-${index}`}
                          name="shippingAddress"
                          value={index}
                          checked={selectedShippingIndex === index}
                          onChange={() => handleShippingRadioChange(index)}
                        />
                        <div className="font-medium ">
                          <p className="text-lg text-orange-600">Name : <span className="text-primeColor">{address.name}</span></p>
                          <p className="text-lg text-orange-600">Address : <span className="text-primeColor">{address.address}</span></p>
                          <p className="text-lg text-orange-600">Phone : <span className="text-primeColor">{address.phone}</span></p>
                          <p className="text-lg text-orange-600">Alternate Phone : <span className="text-primeColor">{address.alternate_phone}</span></p>
                          <p className="text-lg text-orange-600">City : <span className="text-primeColor">{address.city}</span></p>
                          <p className="text-lg text-orange-600">State : <span className="text-primeColor">, {address.state}</span></p>
                          <p className="text-lg text-orange-600">Postal Code : <span className="text-primeColor">{address.zip_code}</span></p>
                          <p className="text-lg text-orange-600">Landmark : <span className="text-primeColor">{address.landmark}</span></p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <button
                  onClick={() => setShowShippingForm(true)}
                  className="mt-4 bg-primeColor text-white py-2 px-4 rounded hover:bg-black transition duration-300 flex items-center"
                >
                  <FaPlus className="mr-2" /> Add Shipping Address
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Products and Total Amount Section */}
        <div className="w-full h-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {carts.map((cart) => (
              <div key={cart.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={`${baseURL}${cart.image}`} alt={cart.name} className="w-16 h-16 object-contain rounded" />
                  <div>
                    <h3 className="font-semibold">{cart.name}</h3>
                    <p className="text-gray-600">Quantity: {cart.quantity}</p>
                  </div>
                </div>
                <p className="flex items-center font-semibold">
                  <FaRupeeSign />
                  {cart.total_price}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-xl font-bold flex justify-between items-center">
              Shipping Amount
              <span className="flex items-center text-green-600">
                <FaRupeeSign />
                {amountCal.shipping_amount}
              </span>
            </h3>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-xl font-bold flex justify-between items-center">
              Total Amount:
              <span className="flex items-center text-green-600">
                <FaRupeeSign />
                {amountCal.total_price + amountCal.shipping_amount}
              </span>
            </h3>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
