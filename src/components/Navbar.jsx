import React from 'react'
import { NavLink, Routes, Route, Link } from 'react-router-dom'
import '../App.css'
import Home from "./Home.jsx"
import Account from "./Account.jsx"
import Adminlogin from "./Adminlogin.jsx"
import Certificates from "./Certificates.jsx"
import Documents from "./Documents.jsx"
import Logo from '../assets/Logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import PlayerRegistor from './PlayerRegistor.jsx'

const Navbar = () => {
    return (
        <>

            <nav className='flex justify-between items-center gap-5 absolute w-full text-white'>


                <div className='logo w-1/5 flex items-center'>
                    <Link to="/">
                        <img src={Logo} alt="logo" width={100} />
                    </Link>
                </div>



                <div className='links_container flex justify-evenly items-center w-3/5 px-20 bg-transparent text-2xl font-bold'>
                    <NavLink to="/" className={({ isActive }) => `(${isActive} ? "underline underline-offset-4" : "")`}>Home</NavLink>
                    <NavLink to="admin" className={({ isActive }) => `(${isActive} ? "underline underline-offset-4" : "")`}>Admin Login</NavLink>
                    <NavLink to="player" className={({ isActive }) => `(${isActive} ? "underline underline-offset-4" : "")`}>Player Registor</NavLink>
                    <NavLink to="account" className={({ isActive }) => `(${isActive} ? "underline underline-offset-4" : "")`}>Account</NavLink>
                </div>


                <div className='socialLinks w-1/5  flex justify-evenly items-center text-2xl font-extrabold'>
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
                <Route path='player' element={<PlayerRegistor />} />
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
