import React from "react";
import { Link, Routes, Route, Outlet,Navigate, useNavigate } from "react-router-dom";
import Tournaments from "./Tournaments.jsx";
import PlayerRequestQueue from "./PlayerRequestQueue.jsx";
import PlayerList from "./PlayerList.jsx";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

import Result from "./Result.jsx";
import Cookies from 'js-cookie'

const AdminProfile = () => {
  
    const navigate = useNavigate();

    const setLoginState = async () => { 
      
      let isLoggedIn;
      if(Cookies.get('loginState')){
        isLoggedIn = true;
        toast.success("LoggedIn Successfully")
      }
      if(!isLoggedIn){
        navigate("/admin");
      }
      
    };
  
    useEffect(() => {
      setLoginState();
    }, []);
  


  return (
    <>
    <Toaster />
    <div className="flex flex-col min-h-screen text-black">
      {/* Header Section */}
      <header className="bg-white text-black shadow-lg py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => {document.cookie = "loginState=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; Cookies.remove('loginState'); navigate('/admin'); }}
        >
          Logout
        </button>
      </header> 

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-100 text-black shadow-inner p-6 flex flex-col gap-4">
          <Link
            to="playerRequests"
            className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            Player Requests
          </Link>
          <Link
            to="tournaments"
            className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            Tournaments
          </Link>
          
          <Link
            to="playerList"
            className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            See All Players List
          </Link>
          
          <Link
            to="createResultEntry"
            className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            Create Result Entry
          </Link>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Navigate to="playerRequests" replace />} />
            <Route path="playerRequests" element={<PlayerRequestQueue />} />
            <Route path="tournaments" element={<Tournaments />} />
            <Route path="playerList" element={<PlayerList />} />
            <Route path="createResultEntry/*" element={<Result/>} />
          </Routes>

          
          <Outlet />
          
        </main>
      </div>
    </div>
    </>
  );
};

export default AdminProfile;
