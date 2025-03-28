import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const ParticipationCertificate = () => {
  const [players, setPlayers] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [data, setData] = useState({ pid: 1, tid: 1 });
  const [photo, setPhoto] = useState("");

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const addMerit = async (e) => {
    e.preventDefault();
    const form_data = new FormData();
    Object.keys(data).forEach((key) => {
      form_data.append(key, data[key]);
    });
    form_data.append("certificatePhoto", photo);

    try {
      const response = await axios.post(
        "http://localhost:3500/admin/add-certificate/participation",
        form_data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success("Uploaded the certificate")
      console.log(response.data);
    } catch (error) {
      toast.error("Error uploading certificate");
    }
  };

  const fetchTournaments = async () => {
    try {
      let response = await axios.get(
        "http://localhost:3500/admin/get-played-tournament"
      );
      setTournaments(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchPlayers = async (tid) => {
    const res = await axios.get(
      `http://localhost:3500/players/all-players/${Number(tid)}`
    );
    console.log(res.data);
    setPlayers(res.data);
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div className="w-full rounded-xl shadow-xl p-8 mt-8">
      <Toaster />
      <h1 className="text-center font-extrabold text-3xl text-gray-800 mb-8">
        Add Participation Certificate
      </h1>
      <form onSubmit={addMerit} className="space-y-6">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 text-lg mb-2">
            Tournament Title
          </label>
          <select
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition duration-300"
            name="tid"
            onChange={(e) => {
              handleDataChange(e);
              fetchPlayers(e.target.value);
            }}
          >
            <option value="">Select Tournament</option>
            {tournaments.map((tournament) => (
              <option key={tournament.tid} value={tournament.tid}>
                {tournament.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 text-lg mb-2">
            Player Name
          </label>
          <select
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition duration-300"
            name="pid"
            onChange={handleDataChange}
          >
            <option value="">Select Player</option>
            {players.map((player) => (
              <option key={player.pid} value={player.pid}>
                {player.fullName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 text-lg mb-2">
            Upload Certificate
          </label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition duration-300"
            name="path"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transform transition-all hover:scale-105 duration-300"
        >
          Add Participation Certificate
        </button>
      </form>
    </div>
  );
};

export default ParticipationCertificate;
