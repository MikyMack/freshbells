import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { baseURL } from "../../constants";
import { ADD_Billing_Address, Get_Address, CheckoutData, PlaceOrder } from "../../actions/CartActions";
import Breadcrumbs from "../pageProps/Breadcrumbs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";

const RAZORPAY_KEY_ID = "rzp_test_lXUi7ttbsFr49f";

const CheckoutForm = () => {
  const [billing, setBilling] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [carts, setCarts] = useState([]);
  const [selectedBillingIndex, setSelectedBillingIndex] = useState(null);
  const [selectedShippingIndex, setSelectedShippingIndex] = useState(null);
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [newBilling, setNewBilling] = useState({});
  const [newShipping, setNewShipping] = useState({});
  const [amountCal, setAmountCal] = useState({});

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await Get_Address();
        console.log(response, "get address");
        setBilling(response.billingAddress);
        setShipping(response.delivery_addresses);
        setAmountCal(response);
        setCarts(response.carts);
      } catch (error) {
        console.error("Error fetching addresses", error);
      }
    };

    fetchAddresses();
  }, []);

  const handleNewBillingChange = (e) => {
    const { name, value } = e.target;
    setNewBilling({ ...newBilling, [name]: value });
  };

  const handleNewShippingChange = (e) => {
    const { name, value } = e.target;
    setNewShipping({ ...newShipping, [name]: value });
  };

  const handleBillingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ADD_Billing_Address(newBilling);
      console.log(response, "billing");
      setBilling([...billing, newBilling]);
      setShowBillingForm(false);
      setNewBilling({});
    } catch (error) {
      console.error("Error submitting billing information", error);
    }
  };

  const handleShippingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ADD_Billing_Address(newShipping);
      console.log(response, "add shipping");
      setShipping([...shipping, newShipping]);
      setShowShippingForm(false);
      setNewShipping({});
    } catch (error) {
      console.error("Error submitting shipping information", error);
    }
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const selectedBilling = billing[selectedBillingIndex];
    const selectedShipping = shipping[selectedShippingIndex];
    console.log("Selected Billing Information: ", selectedBilling);
    console.log("Selected Shipping Information: ", selectedShipping);

    if (selectedBilling && selectedShipping) {
      handleRazorpayPayment(amountCal.total_price + amountCal.shipping_amount, selectedBilling, selectedShipping);
    } else {
      toast.error("Please select both billing and shipping addresses.")
    }
  };

  const handleRazorpayPayment = (amount, selectedBilling, selectedShipping) => {
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: "INR",
      name: "FRESH BELLS",
      description: "Pay to continue",
      handler: async function (response) {
        console.log("Razorpay Response: ", response);
        toast.success("Payment successful");

        const data = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature || "", // Handle potential absence of rzp_signature
        };

        try {
          const res = await CheckoutData(data);
          if (res.status === true && res.message === "success") {
            toast.success("Order placed successfully.");
          } else {
            toast.error("Error in placing order");
          }
        } catch (error) {
          console.error("Error in processing payment: ", error);
          toast.error("Error in processing payment");
        }
      },
      prefill: {
        name: selectedBilling.name,
        email: "user@example.com",
        contact: selectedBilling.phone,
      },
      notes: {
        address: selectedBilling.address,
      },
      theme: {
        color: "#324c21",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="xl:container px-4 mx-auto p-4 font-body3">
      <ToastContainer />
      <Breadcrumbs title="Checkout" />
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Forms Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Billing Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
            {billing.length > 0 ? (
              <Slider {...sliderSettings}>
                {billing.map((billingInfo, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${selectedBillingIndex === index ? 'bg-gray-200' : ''}`} onClick={() => setSelectedBillingIndex(index)}>
                    <p className="font-bold">Name: {billingInfo.name}</p>
                    <p>Address: {billingInfo.address}</p>
                    <p>Phone: {billingInfo.phone}</p>
                    <p>AlternatePhone: {billingInfo.alternate_phone}</p>
                    <p>City: {billingInfo.city}</p>
                    <p>State: {billingInfo.state}</p>
                    <p>Pincode: {billingInfo.zip_code}</p>
                    <p>Landmark: {billingInfo.landmark}</p>
                  </div>
                ))}
              </Slider>
            ) : (
              <p>No billing addresses available.</p>
            )}
            {showBillingForm ? (
              <form onSubmit={handleBillingSubmit} className="mt-4 space-y-4">
                <div>
                  <label>Name</label>
                  <input type="text" name="billing_name" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Address</label>
                  <input type="text" name="billing_address" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>City</label>
                  <input type="text" name="billing_city" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>State</label>
                  <input type="text" name="billing_state" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="text" name="billing_phone" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Alternative Phone</label>
                  <input type="text" name="billing_alt_phone" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Pincode</label>
                  <input type="text" name="billing_zip_code" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Landmark</label>
                  <input type="text" name="billing_landmark" onChange={handleNewBillingChange} className="w-full border p-2 rounded" />
                </div>
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit Billing Address</button>
                <button type="button" onClick={() => setShowBillingForm(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
              </form>
            ) : (
              <button onClick={() => setShowBillingForm(true)} className="mt-4 bg-blue-500 text-white p-2 rounded">Add New Billing Address</button>
            )}
          </div>

          {/* Shipping Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            {shipping.length > 0 ? (
              <Slider {...sliderSettings}>
                {shipping.map((shippingInfo, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${selectedShippingIndex === index ? 'bg-gray-200' : ''}`} onClick={() => setSelectedShippingIndex(index)}>
                    <p className="font-bold">Name: {shippingInfo.name}</p>
                    <p>Address: {shippingInfo.address}</p>
                    <p>Phone: {shippingInfo.phone}</p>
                    <p>AlternatePhone: {shippingInfo.alternate_phone}</p>
                    <p>City: {shippingInfo.city}</p>
                    <p>State: {shippingInfo.state}</p>
                    <p>Pincode: {shippingInfo.zip_code}</p>
                    <p>Landmark: {shippingInfo.landmark}</p>
                  </div>
                ))}
              </Slider>
            ) : (
              <p>No shipping addresses available.</p>
            )}
            {showShippingForm ? (
              <form onSubmit={handleShippingSubmit} className="mt-4 space-y-4">
                <div>
                  <label>Name</label>
                  <input type="text" name="shipping_name" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Address</label>
                  <input type="text" name="shipping_address" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>City</label>
                  <input type="text" name="shipping_city" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>State</label>
                  <input type="text" name="shipping_state" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="text" name="shipping_phone" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Alternative Phone</label>
                  <input type="text" name="shipping_alt_phone" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Pincode</label>
                  <input type="text" name="shipping_zip_code" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label>Landmark</label>
                  <input type="text" name="shipping_landmark" onChange={handleNewShippingChange} className="w-full border p-2 rounded" />
                </div>
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit Shipping Address</button>
                <button type="button" onClick={() => setShowShippingForm(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
              </form>
            ) : (
              <button onClick={() => setShowShippingForm(true)} className="mt-4 bg-blue-500 text-white p-2 rounded">Add New Shipping Address</button>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 h-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            {carts.map((cartItem, index) => (
              <div key={index} className="flex justify-between items-center">
                <p>{cartItem.name}</p>
                <p>{cartItem.quantity} x <FaRupeeSign className="inline" />{cartItem.price}</p>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p><FaRupeeSign className="inline" />{amountCal.total_price}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping</p>
            <p><FaRupeeSign className="inline" />{amountCal.shipping_amount}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center font-bold">
            <p>Total</p>
            <p><FaRupeeSign className="inline" />{amountCal.total_price + amountCal.shipping_amount}</p>
          </div>
          <button onClick={handleOrderSubmit} className="mt-4 bg-green-500 text-white p-2 rounded w-full">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
