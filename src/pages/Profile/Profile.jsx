import React, { useState } from 'react'
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import profile from "../../assets/profile/profile.webp"
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Header from '../../components/home/Header/Header';
import HeaderBottom from '../../components/home/Header/HeaderBottom';
import Footer from '../../components/home/Footer/Footer';
import FooterBottom from '../../components/home/Footer/FooterBottom';

export default function Profile() {
    const [prevLocation, setPrevLocation] = useState("");
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showContact,setShowContact]=useState(false);
    const [showaddress,setShowAddress]=useState(false)
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [userName, setUserName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [contactNo, setContactNo] = useState('8136971120');
    const [address, setAddress] = useState('1234 Street, City, vlangamuri, neyyattinkara Country');

    const handleEditProfile = () => {
        setShowEditProfile(!showEditProfile);
    };

    const handleChangePassword = () => {
        setShowChangePassword(!showChangePassword);
    };
    const handleChangeContact=()=>{
        setShowContact(!showContact)
    }
    const handleChangeAddress=()=>{
        setShowAddress(!showaddress)
    }

    return (
        <>
          <Header />
    <HeaderBottom />
        <div className='px-5 overflow-hidden'>
            <div className='md:ml-20'>
                <Breadcrumbs title="Profile" prevLocation={prevLocation} className="ml-10" />
            </div>
            <section className="profile-part py-8">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Profile Card */}
          <div className=" bg-[#b0c0f0] shadow-lg rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold">Your Profile</h4>
              <button className="bg-blue-600 hover:bg-opacity-70 rounded-sm p-2 text-white font-medium" data-bs-toggle="modal" data-bs-target="#profile-edit" onClick={handleEditProfile}>edit profile</button>
            </div>
          {showEditProfile && (
                <div className="fixed inset-0 bg-[#b0c0f0] bg-opacity-50 overflow-y-auto h-full flex justify-center items-center p-5 z-50" id="my-modal">
                    <div className="relative w-full max-w-md p-5 border shadow-lg rounded-md bg-primeColor">
                        <div className="text-center">
                            <h3 className="text-4xl leading-6 font-bold text-lightText">Edit Profile</h3>
                            <div className="mt-2 px-7 py-4">
                                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="mb-2 w-full p-2" placeholder="Name"/>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 w-full p-2" placeholder="Email"/>
                            </div>
                            <div className="flex justify-center items-center px-4 py-3">
                                <button id="ok-btn" className="px-4 py-2 mr-1 bg-lightText text-white text-base font-medium rounded-md shadow-sm hover:bg-black " onClick={handleEditProfile}>
                                    Save
                                </button>
                                <button id="ok-btn" className="px-4 py-2 bg-red-400 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-600" onClick={()=>{setShowEditProfile(false)}}>
                                    Back
                                </button>                            
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex flex-col md:flex-row items-center md:items-start ">
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0">
                <div> 
                  <img className="rounded-full w-full h-full" src={profile} alt="user" />
                </div>
              </div>
              <div className="md:flex-1 md:ml-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium">Name</label>
                    <input className="font-semibold border rounded p-2 w-full" type="text" value="Micky Mack" />
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <input className="font-semibold border rounded p-2 w-full" type="email" value="MickyMack@gmail.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-red-500 hover:opacity-70 rounded-sm text-white p-2" onClick={handleChangePassword} >change password</button>
                </div>
                {showChangePassword && (
                <div className="fixed inset-0 bg-[#feefb2] bg-opacity-50 overflow-y-auto h-full flex justify-center items-center p-5 z-50" id="change-password-modal">
                    <div className="relative w-full max-w-md p-5 border shadow-lg rounded-md bg-primeColor z-50">
                        <div className="mt-3 text-center">
                            <h3 className="text-4xl leading-6 font-bold text-lightText">Change Password</h3>
                            <div className="mt-2 px-7 py-4">
                                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="mb-2 w-full p-2" placeholder="Current Password"/>
                                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="mb-2 w-full p-2" placeholder="New Password"/>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button id="submit-btn" className="px-4 py-2 mr-1 bg-white text-primeColor text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-gray-300" onClick={handleChangePassword}>
                                    Update
                                </button>
                                <button id="back-btn" className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-red-400 " onClick={()=>{setShowChangePassword(false)}}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-[#feefb2] shadow-lg rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold">Contact Number</h4>
              <button className="bg-blue-600 hover:bg-opacity-70 rounded-sm p-2 text-white font-medium" data-bs-toggle="modal" onClick={handleChangeContact}>add contact</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['primary', 'secondary', 'secondary'].map((label, index) => (
                <div key={index} className=" bg-gray-100 p-4 rounded shadow">
                  <h6 className="font-bold">{label}</h6>
                  <p>+8801838288389</p>
                  <div className="flex justify-between mt-2">
                    <button className=" text-blue-500 hover:text-blue-700" title="Edit">
                      <CiEdit className='text-2xl'/>
                    </button>
                    <button className=" text-red-500 hover:text-red-700" title="Remove phonenumber">
                      <MdDelete className='text-2xl'/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showContact && (
                <div className="fixed inset-0 bg-[#feefb2] bg-opacity-50 overflow-y-auto h-full flex justify-center items-center p-5 z-50" id="my-modal">
                    <div className="relative w-full max-w-md p-5 border shadow-lg rounded-md bg-primeColor z-50">
                        <div>
                            <h3 className="text-4xl leading-6 font-bold text-lightText text-center">Edit Contact</h3>
                            <div className="mt-2 px-7 py-4 flex flex-col items-center">
                                <input type="text" value={contactNo} className="mb-2 w-full p-2 text-center" placeholder="Name"/>
                                <input type="text" onChange={(e) => setContactNo(e.target.value)} className="mb-2 w-full p-2 text-center" placeholder="Enter new phone number"/>
                            </div>
                            <div className="flex justify-center px-4 py-3">
                                <button id="save-btn" className="px-4 py-2 mr-1 bg-white text-primeColor text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-gray-300 " onClick={handleChangeContact}>
                                    Save
                                </button>
                                <button id="back-btn" className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-red-400" onClick={()=>{setShowContact(false)}}>
                                    Back
                                </button>                            
                            </div>
                        </div>
                    </div>
                </div>
            )}

          {/* Address Card */}
          <div className=" bg-[#a0e7e5] shadow-lg rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold">Delivery Address</h4>
              <button className="bg-blue-600 hover:bg-opacity-70 rounded-sm p-2 text-white font-medium" onClick={handleChangeAddress}>add address</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Home', 'Office', 'Business'].map((label, index) => (
                <div key={index} className=" bg-gray-100 p-4 rounded shadow">
                <h6 className="font-bold">{label}</h6>
                <p>enter your Some address here</p>
                <div className="flex justify-between mt-2">
                  <button className=" text-blue-500 hover:text-blue-700" title="Edit ">
                    <CiEdit className='text-2xl'/>
                  </button>
                  <button className=" text-red-500 hover:text-red-700" title="Remove address">
                    <MdDelete className='text-2xl'/>
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        {showaddress&&(
                <div className="fixed inset-0 bg-[#a0e7e5] bg-opacity-50 overflow-y-auto h-full flex justify-center items-center p-5 z-50" id="my-modal">
                <div className="relative w-full max-w-md p-5 border shadow-lg rounded-md bg-primeColor z-50">
                    <div>
                        <h3 className="text-4xl leading-6 font-bold text-lightText text-center">Edit Contact</h3>
                        <div className="mt-2 px-7 py-4 flex flex-col items-center">
                            <select className="mb-2 w-full p-2 text-center"  defaultValue="">
                                <option disabled value="">Choose title</option>
                                <option value="Home">Home</option>
                                <option value="Office">Office</option>
                                <option value="Business">Business</option>
                                <option value="Work">Work</option>
                                <option value="Academy">Academy</option>
                                <option value="College">College</option>
                            </select>
                            <textarea onChange={(e) => setAddress(e.target.value)} className="mb-2 w-full p-2 text-center" placeholder="Enter your address" rows="3"></textarea>
                        </div>
                        <div className="flex justify-center px-4 py-3">
                            <button id="save-btn" className="px-4 py-2 mr-1 bg-white text-primeColor text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-gray-300 " onClick={handleChangeAddress}>
                                Save
                            </button>
                            <button id="back-btn" className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-red-400" onClick={()=>{setShowAddress(false)}}>
                                Back
                            </button>                            
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
 

        </div>
        <Footer />
  <FooterBottom />
        </>
    );
}

