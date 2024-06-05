import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.webp"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported to fix display issues
import {USER_LOGIN} from "../../actions/AuthActions"

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirm_password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirm_password) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const response = await USER_LOGIN(formData);
      if (response.status === true) {
        toast.success('Registration successful');  
        navigate("/signin");
      } else {
        if (response.status === false) {
          toast.error("Email is already taken");
        } else {
          toast.error('Email or Phonenumber is already registered');
        }
      }
    } catch (error) {
      toast.error('Email is already registered');
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="w-1/2 hidden lgl:inline-flex h-full text-primeColor">
        <div className="w-[450px] h-full bg-[#bbe6b9] px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logo} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Get started for free
            </h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-primeColor">
              <span className="text-primeColor font-semibold font-titleFont">
                Get started fast with FRESH BELLS
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-primeColor">
              <span className="text-primeColor font-semibold font-titleFont">
                Access all FRESH BELLS services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-primeColor">
              <span className="text-primeColor font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-primeColor hover:text-white cursor-pointer duration-300">
              © FRESH BELLS
            </p>
            <p className="text-sm font-titleFont font-semibold text-primeColor hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-primeColor hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-primeColor hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-2 h-full flex flex-col justify-center">
       
          <form onSubmit={handleSubmit} className="w-full md:p-20 h-screen mt-20 flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your account
              </h1>
              <div className="flex flex-col gap-3">
                {/* client name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Full Name
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="eg. Sagar Kupa"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Email
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="eg. john@gamil.com"
                  />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Phone Number
                  </p>
                  <input
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="8136971120"
                  />
                </div>
                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                  Confirm Password
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.confirm_password}
                    name="confirm_password"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
                {/* Checkbox */}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the FRESH BELLS{" "}
                    <span className="text-blue-500">Terms of Service </span>and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={!checked}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-not-allowed"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Create Account
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Already have an Account?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">
                      Sign in
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
};

export default SignUp;
