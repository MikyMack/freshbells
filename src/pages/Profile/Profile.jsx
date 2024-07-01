import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import profile from "../../assets/profile/profile.webp"
import Header from '../../components/home/Header/Header';
import HeaderBottom from '../../components/home/Header/HeaderBottom';
import Footer from '../../components/home/Footer/Footer';
import FooterBottom from '../../components/home/Footer/FooterBottom';

export default function Profile() {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userDetails'));
        if (userData) {
            setUserName(userData.name);
            setEmail(userData.email);
            setPhoneNumber(userData.phone);
        }
        console.log(userData);
    }, []);

    const handleEditProfile = () => {
        setShowEditProfile(!showEditProfile);
    };

    const handleChangePassword = () => {
        setShowChangePassword(!showChangePassword);
    };

    return (
        <>
          <Header />
          <HeaderBottom />
          <div className='bg-[#EFFDEC]'>
          <div className='px-5 overflow-hidden'>
            <div className='md:ml-20'>
                <Breadcrumbs title="Profile" className="ml-10" />
            </div>
            <section className="profile-part py-4">
              <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                  {/* Profile Card */}
                  <div className=" bg-green-300 shadow-lg rounded-lg p-6 mb-8">
                    <div className="flex justify-center items-center mb-4">
                      <h4 className="text-4xl font-bold  font-body2">My Profile</h4>
                    </div>
                    {showEditProfile && (
                      <div className="fixed inset-0 bg-green-200 bg-opacity-50 overflow-y-auto h-full flex justify-center items-center p-5 z-50">
                        <div className="relative w-full max-w-md p-5 border shadow-lg rounded-md bg-gray-600">
                          <div className="text-center">
                            <h3 className="text-4xl leading-6 font-bold text-white">Edit Profile</h3>
                            <div className="mt-2 px-7 py-4">
                              <input type="text" id={userName} value={userName} onChange={(e) => setUserName(e.target.value)} className="mb-2 w-full p-2 outline-none" placeholder="Name"/>
                              <input type="email" id={email} value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 w-full p-2 outline-none" placeholder="Email"/>
                              <input type="text" id={phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mb-2 w-full p-2 outline-none" placeholder="Phone Number"/>
                            </div>
                            <div className="flex justify-center items-center px-4 py-3">
                              <button className="px-4 py-2 mr-1 bg-white text-primeColor text-base font-medium rounded-md shadow-sm hover:bg-gray-300" onClick={handleEditProfile}>
                                Save
                              </button>
                              <button className="px-4 py-2 bg-red-400 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-600" onClick={() => setShowEditProfile(false)}>
                                Back
                              </button>                            
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col md:w-full xs:w-full md:flex-row items-center justify-center">
                      <div className="xs:w-[150px] xs:h-[150px] md:w-[300px] md:h-[300px] mb-4 md:mb-0">
                        <img className="rounded-full w-full h-full" src={profile} alt="user" />
                      </div>
                      <div className="md:flex-row md:ml-6">
                        <div className="grid grid-cols-1 gap-4 font-body2 text-xl">
                          <div>
                            <label className="font-medium ">Name</label>
                            <input id={userName} className="font-semibold border rounded p-2 w-full outline-none" type="text" value={userName} readOnly />
                          </div>
                          <div>
                            <label className="font-medium">Email</label>
                            <input id={email} className="font-semibold border rounded p-2 w-full outline-none" type="email" value={email} readOnly />
                          </div>
                          <div>
                            <label className="font-medium">Phone Number</label>
                            <input id={phoneNumber} className="font-semibold border rounded p-2 w-full outline-none" type="text" value={phoneNumber} readOnly />
                          </div>
                        </div>
                        <div className="mt-6">
                          <button className="bg-red-500 mr-2 hover:opacity-70 font-body2 rounded-sm text-white p-2" onClick={handleChangePassword}>Change Password</button>
                          <button className="bg-blue-600 hover:bg-opacity-70 rounded-sm p-2 text-white font-body2 font-medium" onClick={handleEditProfile}>Edit Profile</button>
                        </div>
                        {showChangePassword && (
                          <div className="fixed inset-0 bg-green-200 bg-opacity-50 overflow-y-auto h-full flex justify-center items-center p-5 z-50">
                            <div className="relative w-full max-w-md p-5 border shadow-lg rounded-md bg-gray-600 z-50">
                              <div className="mt-3 text-center">
                                <h3 className="text-4xl leading-6 font-bold text-white">Change Password</h3>
                                <div className="mt-2 px-7 py-4">
                                  <input id='password' type="password" className="mb-2 w-full p-2 outline-none" placeholder="Current Password"/>
                                  <input id='password' type="password" className="mb-2 w-full p-2 outline-none" placeholder="New Password"/>
                                </div>
                                <div className="items-center px-4 py-3">
                                  <button className="px-4 py-2 mr-1 bg-white text-primeColor text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-gray-300" onClick={handleChangePassword}>
                                    Update
                                  </button>
                                  <button className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md w-[100px] shadow-sm hover:bg-red-400" onClick={() => setShowChangePassword(false)}>
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
                </div>   
              </div>
            </section>
          </div>
          </div>
          <Footer />
          <FooterBottom /> 
        </>
    );
}
