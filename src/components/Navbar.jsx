import React from 'react'
import { NavLink, Routes, Route, Link } from 'react-router-dom'
import '../App.css'
import Home from "./Home.jsx"
import Account from "./Account.jsx"
import Playerlogin from "./Playerlogin.jsx"
import Adminlogin from "./Adminlogin.jsx"
import Certificates from "./Certificates.jsx"
import Documents from "./Documents.jsx"
import Logo from '../assets/Logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Navbar = () => {
    return (
        <>

            <nav className='flex justify-between items-center gap-5 absolute w-full text-white'>


                <div className='logo w-1/5 flex items-center'>
                    <img src={Logo} alt="logo" width={100} /> <span>All Star Fencing Club</span>
                </div>



                <div className='links_container flex justify-evenly items-center w-3/5 px-20 bg-transparent'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="admin">Admin Login</NavLink>
                    <NavLink to="player">Player Login</NavLink>
                    <NavLink to="account">Account</NavLink>
                </div>


                <div className='socialLinks w-1/5  flex justify-evenly items-center text-2xl'>
                    <Link to="/">
                        <FaInstagram />
                    </Link >
                    <Link to="/">
                        <FaFacebookSquare />
                    </Link>
                    <Link to="/">
                        <CiYoutube />
                    </Link>
                </div>


            </nav>



            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='player' element={<Playerlogin />} />
                <Route path="admin" element={<Adminlogin />} />
                <Route path="account" element={<Account />}>
                    <Route path='certificates' element={<Certificates />} />
                    <Route path='docs' element={<Documents />} />
                </Route>
            </Routes>

        </>
    )
}

export default Navbar
