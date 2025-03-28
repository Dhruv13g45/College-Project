import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const ChampionResult = () => {
  const [Alltournaments, setAllTournaments] = useState([]);
  const [singleTournament, setSingleTournament] = useState("");
  const [gender, setGender] = useState("M");
  const [position, setPosition] = useState("First");

  const fetchTournaments = async () => {
    const resp = await axios.get("http://localhost:3500/admin/get-played-tournament");
    setAllTournaments(resp.data);
  };

  const selectSingletournament = (e) => {
    setSingleTournament(e.target.value);
  };

  const selectGender = (e) => {
    setGender(e.target.value);
  };

  const selectPosition = (e) => {
    setPosition(e.target.value);
  };

  const addChamptionResult = async () => {
    try {
      let data = {
        tid: Number(singleTournament),
        gender: gender,
        position: position,
      };
      const res = await axios.post("http://localhost:3500/admin/add-result/championship", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Result added successfully")
    } catch (error) {
      toast.error("Error adding result")
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <Toaster/>
      <h1 className="text-center font-extrabold text-3xl text-gray-800 mb-8">
        Championship Results
      </h1>

      <table className="w-full text-left rounded-lg shadow-md">
        <thead className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <tr>
            <th scope="col" className="px-6 py-3 font-semibold">Tournament Name</th>
            <th scope="col" className="px-6 py-3 font-semibold">Gender</th>
            <th scope="col" className="px-6 py-3 font-semibold">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">
              <select
                value={singleTournament}
                onChange={selectSingletournament}
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="">Select Tournament</option>
                {Alltournaments.map((tournament) => (
                  <option value={tournament.tid} key={tournament.tid}>
                    {tournament.title}
                  </option>
                ))}
              </select>
            </td>
            <td className="px-6 py-4">
              <select
                onChange={selectGender}
                value={gender}
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </td>
            <td className="px-6 py-4">
              <select
                onChange={selectPosition}
                value={position}
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="First">1st</option>
                <option value="Second">2nd</option>
                <option value="Third">3rd</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        <button
          onClick={addChamptionResult}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition transform hover:scale-105 shadow-lg"
        >
          Add Champion Result
        </button>
      </div>
    </div>
  );
};

export default ChampionResult;
