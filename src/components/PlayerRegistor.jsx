import React from 'react'
import '../App.css'
import { FiUpload } from "react-icons/fi";
import { useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import Logo from "../assets/Logo.png"



const PlayerRegistor = () => {


    const [playerRegistorData, setPlayerRegistorData] = useState({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        schoolCollegeName: "",
        addressLine1: "",
        addressLine2: "",
        pincode: "",
        aadhar: "",
        photo: "",
        aadharCardPhoto: "",
        eventName: "",
    })




    const uploadPhoto = (event) => {
        const file = event.target.files[0];
        if (file === "") {
            document.getElementById("photo").disabled = "true"
        }
        else {

            document.getElementById("photo").disabled = "false"
        }
        const fileUrl = URL.createObjectURL(file);

        setPlayerRegistorData(prevState => ({ ...prevState, photo: fileUrl }))

    }

    const uploadAadhar = (event) => {
        const file = event.target.files[0];
        if (file === "") {
            document.getElementById("aadharCardPhoto").disabled = "true"
        }
        else {
            document.getElementById("aadharCardPhoto").disabled = "false"

        }
        const fileUrl = URL.createObjectURL(file);
        setPlayerRegistorData(prevState => ({
            ...prevState,
            aadharCardPhoto: fileUrl
        }))
    }


    let propertyName, propertyValue;
    const handleResgistrationData = (event) => {
        propertyName = event.target.name;
        propertyValue = event.target.value;

        setPlayerRegistorData({ ...playerRegistorData, [propertyName]: propertyValue })
    }


    const sendFormData = (e) => {
        e.preventDefault();

        setPlayerRegistorData({
            fullName: "",
            email: "",
            phone: "",
            gender: "",
            dob: "",
            schoolCollegeName: "",
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            aadhar: "",
            photo: "",
            aadharCardPhoto: "",
            eventName: "",
        })
    }





    return (
        <>
            <div className='playerRegistor h-full'>
                <div className=' w-full pt-24 px-20'>
                    <form method='POST' className='text-black font-bold p-10 bg-white rounded-xl flex items-center flex-col w-full'>
                        <img src={Logo} alt="clubimage" className='w-[200px]' />

                        <div className='bg-slate-300 w-full'>
                            <h1 className='w-full text-center text-2xl bg-blue-400 py-3 rounded-t-xl text-white'>Personal Details</h1>


                            <div className='w-full flex justify-between items-center gap-5'>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="fullName">Full Name:</label>
                                    <input type="text" name='fullName' id="fullName" className='w-full border border-black' value={playerRegistorData.fullName} onChange={handleResgistrationData} placeholder='Full Name' />
                                </div>
                                <div className='w-1/2 my-2 genderDiv'>
                                    <label htmlFor="gender">Gender:</label>
                                    <select name="gender" id="gender">
                                        <option value={playerRegistorData.gender} name="gender" onChange={handleResgistrationData}>Male</option>
                                        <option value={playerRegistorData.gender} name="gender" onChange={handleResgistrationData}>Female</option>
                                        <option value={playerRegistorData.gender} name="gender" onChange={handleResgistrationData}>Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className='w-full flex justify-between items-center gap-5'>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="phone">Phone:</label>
                                    <input required type="number" name='phone' id="phone" className='w-full border border-black' value={playerRegistorData.phone} onChange={handleResgistrationData} placeholder='0000000000' />
                                </div>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="email">E-Mail:</label>
                                    <input required type="email" name='email' id='email' className='w-full border border-black' value={playerRegistorData.email} onChange={handleResgistrationData} placeholder='abc@xyz.com' />
                                </div>
                            </div>


                            <div className='w-full flex justify-between items-center gap-5'>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="dob">Date Of Birth:</label>
                                    <input required type="date" name='dob' id="dob" className='w-full border border-black' value={playerRegistorData.dob} onChange={handleResgistrationData} />
                                </div>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="aadhar">Aadhar Card Number:</label>
                                    <input required type="number" name='aadhar' id='aadhar' className='w-full border border-black' value={playerRegistorData.aadhar} onChange={handleResgistrationData} placeholder='0000-0000-0000' />
                                </div>
                            </div>

                        </div>


                        <div className='bg-slate-300 w-full  mt-10'>
                            <h1 className='w-full text-center text-2xl bg-blue-400 py-3 rounded-t-xl text-white'>Address Details</h1>


                            <div className='w-full flex justify-between items-center gap-5'>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="pincode">Pincode:</label>
                                    <input required type="number" name='pincode' id="pincode" className='w-full border border-black' value={playerRegistorData.pincode} onChange={handleResgistrationData} placeholder='000000' />
                                </div>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="city">Scholl/College Name:</label>
                                    <input required type="text" name='schoolCollegeName' id='schoolCollegeName' className='w-full border border-black' value={playerRegistorData.schoolCollegeName} onChange={handleResgistrationData} placeholder='Your city' />
                                </div>
                            </div>

                            <div className='w-full flex justify-between items-center gap-5'>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="addressLine1">Address 1:</label>
                                    <input required type="text" name='addressLine1' id="addressLine1" className='w-full border border-black' value={playerRegistorData.addressLine1} onChange={handleResgistrationData} />
                                </div>
                                <div className='w-1/2 my-2'>
                                    <label htmlFor="addressLine2">Address 2:</label>
                                    <input required type="text" name='addressLine2' id='addressLine2' className='w-full border border-black' value={playerRegistorData.addressLine2} onChange={handleResgistrationData} />
                                </div>
                            </div>
                        </div>


                        <div className='bg-slate-300 w-full mt-10'>
                            <h1 className='w-full text-center text-2xl bg-blue-400 py-3 rounded-t-xl text-white'>Event / Compitition Details</h1>


                            <div className='w-full flex justify-between items-center gap-5'>
                                <div className='w-[30%] my-2'>
                                    <label htmlFor="event">Event Name:</label>
                                    <input required type="text" name='eventName' id='eventName' className='w-full border border-black' value={playerRegistorData.eventName} onChange={handleResgistrationData} placeholder='Enter Event Name' />
                                </div>

                                <div className='w-[70%] my-3 gap-5 flex justify-between items-center'>
                                    <div className='w-full bg-white  px-5 rounded-xl border border-black'>
                                        <label htmlFor="photo" className=' text-black text-lg flex items-center justify-between py-2 cursor-pointer  shadow-2xl  '>
                                            {
                                                playerRegistorData.photo
                                                    ?
                                                    <>
                                                        <p className='text-green-900'>Uploaded</p> < IoCheckmarkDone className='text-green-900' />
                                                    </>
                                                    :
                                                    <>
                                                        <p className=''>Upload Your Profile Photo</p> <FiUpload className='text-black' />
                                                    </>
                                            }
                                        </label>
                                        <input type="file" name="photo" id="photo" accept='image/*' className='file bg-white' onChange={uploadPhoto} />
                                    </div>

                                    <div className='w-full bg-white px-5 rounded-xl border border-black'>
                                        <label htmlFor="aadharCardPhoto" className='text-black text-lg flex items-center justify-between py-2 cursor-pointer  shadow-2xl '>
                                            {
                                                playerRegistorData.aadharCardPhoto
                                                    ?
                                                    <>
                                                        <p className='text-green-900'>Uploaded</p> <IoCheckmarkDone className='text-green-900' />
                                                    </>
                                                    :
                                                    <>
                                                        <p className=''>Upload Your Aadhar Card Photo</p>
                                                        <FiUpload className='text-black' />
                                                    </>
                                            }
                                        </label>
                                        <input type="file" name="aadharCardPhoto" id="aadharCardPhoto" accept='image/*' className='file bg-white'
                                            onChange={uploadAadhar} />
                                        <p></p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div>
                            <button type="submit" className='text-white bg-blue-500 px-5 py-3 my-3 rounded-xl' onClick={sendFormData}>Submit Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PlayerRegistor
