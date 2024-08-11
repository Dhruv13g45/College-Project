import { React, useState } from 'react'
import PlayerLoginImage from "../assets/PlayerLoginImage.png"
import Logo from "../assets/Logo.png"

const PlayerLogin = () => {


    const [aadhar, setAadhar] = useState("");
    const [dob, setDob] = useState("");
    // const [clicked, setClicked] = useState();

    const changeAadhar = (event) => {
        setAadhar(event.target.value);
    }

    const changeDob = (event) => {
        setDob(event.target.value);
    }

    const loginUser = (event) => {
        event.preventDefault();
        setAadhar("")
        setDob("")
        setClicked(true)
    }

    // const closeDialogBox = () => {
    //     setClicked(false);
    // }




    return (
        <>
            <div className='bg-gradient-to-tl from-blue-800 to-blue-700 h-full pt-24 px-[100px]'>
                <form method="post" className=' flex justify-between items-start text-white'>
                    <div className="loginImage w-1/2">
                        <img src={PlayerLoginImage} alt="Login Image" className='w-full' />
                    </div>
                    <div className="loginInfo w-1/2 flex flex-col items-center">
                        <img src={Logo} alt="logo" className='w-[200px]' />
                        <div className='flex justify-between items-center w-full'>
                            <span className='w-[40%] border border-white'></span>        <h1 className='w-[60%] text-center font-extrabold text-3xl'>Player Login</h1>   <span className='w-[40%] border border-white'></span>
                        </div>
                        <div className="my-5 w-full">
                            <div className='w-full my-5 px-5'>
                                <label htmlFor="aadharLogin" className='font-bold text-xl'>Aadhar Card Number:</label>
                                <input type="text" name="aadharLogin" id="aadharLogin" className='w-full h-[3rem] font-bold px-3 border border-black text-black my-2' value={aadhar} placeholder='0000-0000-0000' onChange={changeAadhar} />
                            </div>
                            <div className='w-full my-5 px-5'>
                                <label htmlFor="dobLogin" className='font-bold text-xl'>Date Of Birth:</label>
                                <input type="date" name="dobLogin" id="dobLogin" className='w-full h-[3rem] font-bold px-3 border border-black text-black my-2' value={dob} onChange={changeDob} />
                            </div>
                        </div>
                        <div className=''>
                            <button type="submit" className='text-xl text-white font-bold px-5 py-3 rounded-lg bg-blue-400 mb-5' onClick={loginUser}>Login</button>
                        </div>
                    </div>





                    {/* {
                        clicked ?
                            <>
                                <div className='bg-green-500  absolute top-[50%] left-[50%] translate=[-50%,-50%] py-5 px-10'>
                                    <h3 className='text-white'>You logged in</h3>
                                    <button type="button" className='py-3 px-5 bg-black text-white' onClick={closeDialogBox}>Okay!</button>
                                </div>
                            </>
                            :
                            <>
                            </>
                    } */}

                </form>
            </div>
        </>
    )
}

export default PlayerLogin

