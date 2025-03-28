import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const IndivisualResult = () => {
  const [Alltournaments, setAllTournaments] = useState([]);
  const [singleTournament, setSingleTournament] = useState("");
  const [position, setPosition] = useState("first");
  const [players, setPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState("");

  const selectPosition = (e) => {
    setPosition(e.target.value);
  };

  const fetchTournaments = async () => {
    const resp = await axios.get("http://localhost:3500/admin/get-played-tournament");
    setAllTournaments(resp.data);
  };

  const fetchPlayers = async (tourId) => {
    try {
      const res = await axios.get(`http://localhost:3500/players/all-players/${Number(tourId)}`);
      setPlayers(res.data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  const selectSingletournament = (e) => {
    const tourId = e.target.value;
    setSingleTournament(tourId);
    fetchPlayers(tourId);
  };

  const selectPlayer = (e) => {
    setSinglePlayer(e.target.value);
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const addIndivisualResult = async () => {
    try {
      const result = await axios.get(`http://localhost:3500/admin/getTentry/${singleTournament}/${singlePlayer}`);
    let data = {
      tentryid: Number(result.data.tentryid[0].tentryid),
      position: position,
    };

    const res = await axios.post("http://localhost:3500/admin/add-result/individual", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    toast.success("Result added Successfully")
    } catch (error) {
      toast.error("Cannot add Result")
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <Toaster />
      <h1 className="text-center font-extrabold text-3xl text-gray-800 mb-8">Individual Player Results</h1>
      <table className="w-full text-left rounded-lg shadow-md">
        <thead className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <tr>
            <th scope="col" className="px-6 py-3 font-semibold">Tournament Name</th>
            <th scope="col" className="px-6 py-3 font-semibold">Player</th>
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
                value={singlePlayer}
                onChange={selectPlayer}
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="">Select Player</option>
                {players.length > 0 ? (
                  players.map((player) => (
                    <option key={player.pid} value={player.pid}>
                      {player.fullName}
                    </option>
                  ))
                ) : (
                  <option>No Players in this tournament</option>
                )}
              </select>
            </td>
            <td className="px-6 py-4">
              <select
                onChange={selectPosition}
                value={position}
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="first">1st</option>
                <option value="second">2nd</option>
                <option value="third">3rd</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        <button
          onClick={addIndivisualResult}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition transform hover:scale-105 shadow-lg"
        >
          Add Individual Result
        </button>
      </div>
    </div>
  );
};

export default IndivisualResult;
