import React from 'react'
import '../App.css'
import { FiUpload } from "react-icons/fi";
import { useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";

const PlayerRegistor = () => {

    const [photo, setphoto] = useState("");
    const [aadhar, setAadhar] = useState("");

    const uploadPhoto = (event) => {
        const file = event.target.files[0];
        if (file === "") {
            document.getElementById("file").disabled = "true"
        }
        else {

            document.getElementById("file").disabled = "false"
        }
        const fileUrl = URL.createObjectURL(file);
        setphoto(fileUrl)
        console.log(fileUrl);

    }

    const uploadAadhar = (event) => {
        const file = event.target.files[0];
        if (file === "") {
            console.log("Cannot upload more than one file");
            document.getElementById("aadharPhoto").disabled = "true"
        }
        else {
            document.getElementById("aadharPhoto").disabled = "false"

        }
        const fileUrl = URL.createObjectURL(file);
        setAadhar(fileUrl)
        console.log(fileUrl);
    }



    const sendFormData = (event) => {
        event.preventDefault();
    }






    return (
        <>
            <div className='playerRegistor h-full'>



                <div className=' w-full rounded-3xl px-20'>
                    <h1 className='text-center pt-24 pb-10 text-yellow-600 underline underline-offset-4 font-bold text-3xl'>Registor Player</h1>
                    <form method='POST' className='text-black  flex items-start flex-col w-full'>


                        <div className='flex justify-between items-center w-full my-3'>
                            <div>
                                <label htmlFor="name">Player Full Name:</label>
                                <input type="text" name="name" id="name" required={true} />

                            </div>

                            <div>
                                <label htmlFor="gender">Gender:</label>
                                <select name="gender" id="gender" className='w-[7rem] h-[2.5rem] border-none rounded-xl p-3 ml-3'>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>

                            </div>

                            <div>
                                <label htmlFor="dob">Date of Birth:</label>
                                <input type="date" name="dob" id="dob" required={true} />

                            </div>
                        </div>


                        <div className='flex w-full justify-between items-center my-3'>

                            <div>
                                <label htmlFor="cardNum">Aadhar Card Number :</label>
                                <input type="number" name="cardNum" id="cardNum" required={true} />
                            </div>

                            <div>

                                <label htmlFor="event">Event Name:</label>
                                <input type="text" name="event" id="event" required={true} />

                            </div>

                            <div>
                                <label htmlFor="mail">Email:</label>
                                <input type="email" name="mail" id="mail" required={true} />

                            </div>
                        </div>


                        <div className='flex w-full justify-between items-center my-3'>
                            <div>
                                <label htmlFor="number">Phone:</label>
                                <input type="number" name="number" id="number" required={true} />
                            </div>

                            <div>
                                <label htmlFor="pincode">Pincode:</label>
                                <input type="number" name="pincode" id="pincode" required={true} />
                            </div>


                            <div>
                                <label htmlFor="schoolClgName">School/College Name:</label>
                                <input type="text" name="schoolClgName" id="schoolClgName" required={true} />
                            </div>
                        </div>

                        <label htmlFor="add1" className='mt-3'>Address 1:</label>
                        <textarea name="add1" id="add1" className='h-[5rem] w-full rounded-xl px-10 py-3' required={true}></textarea>


                        <label htmlFor="add2" className='mt-3'>Address 2:</label>
                        <textarea name="add2" id="add2" className='h-[5rem] w-full rounded-xl px-10 py-3' required={true}></textarea>


                        <div className='flex w-full justify-evenly items-center my-5 fileInput'>

                            <div className='w-[20rem]'>
                                <label htmlFor="file" className=' text-black'>
                                    {
                                        photo
                                            ?
                                            <>
                                                <p className='text-green-900'>Uploaded</p> < IoCheckmarkDone className='text-green-900' />
                                            </>
                                            :
                                            <>
                                                <p>Upload Photo</p> <FiUpload className='text-black' />
                                            </>
                                    }
                                </label>
                                <input type="file" name="file" id="file" accept='image/*' className='file bg-white' onChange={uploadPhoto} required={true} />
                            </div>

                            <div className='w-[20rem]'>
                                <label htmlFor="aadharPhoto" className='text-black'>
                                    {
                                        aadhar
                                            ?
                                            <>
                                                <p className='text-green-900'>Uploaded</p> <IoCheckmarkDone className='text-green-900' />
                                            </>
                                            :
                                            <>
                                                <p>Upload Aadhar</p>
                                                <FiUpload className='text-black' />
                                            </>
                                    }
                                </label>
                                <input type="file" name="aadharPhoto" id="aadharPhoto" accept='image/*' className='file bg-white' onChange={uploadAadhar} required={true} />
                                <p></p>
                            </div>
                            <button type="submit" className='bg-white text-2xl rounded-xl px-5 py-3 my-3 font-bold' onClick={sendFormData}>Submit</button>
                        </div>






                    </form>


                </div>
            </div>
        </>
    )
}

export default PlayerRegistor
