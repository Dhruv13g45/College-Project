import React, { useState, useEffect } from "react";
import axios from "axios";
import ExcelJS from "exceljs";
import toast, { Toaster } from 'react-hot-toast';
import { saveAs } from "file-saver";


const CreateEntry = () => {
  const [epeePlayers, setEpeePlayers] = useState([]);
  const [foilPlayers, setFoilPlayers] = useState([]);
  const [sabrePlayers, setSabrePlayers] = useState([]);
  const [gender, setGender] = useState("Male");
  const [playerNameArray, setPlayerNameArray] = useState([]);
  const [selectTournament, setSelectTournament] = useState();
  const [tournamentList, setTournamentList] = useState([]);
  const [playerList, setPlayerList] = useState([]);
  const [epeeCount,setEpeeCount] = useState(0)
  const [sabreCount,setSabreCount] = useState(0)
  const [foilCount,setFoilCount] = useState(0)

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  const fetchData = async () => {
    try {
      let response = await axios.get(
        "http://localhost:3500/admin/getAllTournaments"
      );
      setTournamentList(response.data);

      response = await axios.get("http://localhost:3500/players/all-players");
      setPlayerList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTitle = ()=>{
    for(let i=0 ; i<tournamentList.length;i++ ){
      if(tournamentList[i].tid == selectTournament)
      {   return tournamentList[i].title }
    }
    
  }

  useEffect(() => {
    if (!selectTournament || playerList.length === 0) return;
    const selectedTournamentObj = tournamentList.find(
      (t) => t.tid === Number(selectTournament)
    );
    if (!selectedTournamentObj) return;

    const ageCategory = selectedTournamentObj.ageCategory;

    const calculateAge = (dob) => {
      const [day, month, year] = dob.split("/").map(Number);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    };
    const filteredPlayers = playerList
      .map((player) => ({
        ...player,
        age: calculateAge(player.dob),
      }))
      .filter(
        (player) => player.gender === gender && player.age <= ageCategory
      );
    setEpeePlayers(
      filteredPlayers.filter((player) => player.eventName === "Epee")
    );
    setFoilPlayers(
      filteredPlayers.filter((player) => player.eventName === "Foil")
    );
    setSabrePlayers(
      filteredPlayers.filter((player) => player.eventName === "Sabre")
    );
  }, [playerList, gender, selectTournament, tournamentList]);

  useEffect(() => {
    fetchData();
  }, []);

  const handlePlayerChange = (name,event) => {
   

    if( event == "Epee" && epeeCount < 4){
        setPlayerNameArray((prev) => [...prev, name]);
        setEpeeCount((prev) => prev +1)
      }
    if( event == "Sabre" && sabreCount < 4){
        setPlayerNameArray((prev) => [...prev, name]);
        setSabreCount((prev) => prev +1)
      }
    if( event == "Foil" && foilCount < 4){
        setPlayerNameArray((prev) => [...prev, name]);
        setFoilCount((prev) => prev +1)
      }
    };
    console.log(epeeCount);

  const epeePlayerArray = () => {
    return epeePlayers
      .filter((player) => playerNameArray.includes(player.fullName))
      .map((player) => player);
  };

  const foilPlayerArray = () => {
    return foilPlayers
      .filter((player) => playerNameArray.includes(player.fullName))
      .map((player) => player);
  };

  const sabrePlayerArray = () => {
    return sabrePlayers
      .filter((player) => playerNameArray.includes(player.fullName))
      .map((player) => player);
  };

  const chooseTournament = (e) => {
    setSelectTournament(e.target.value);
  };

  const exportPlayers = async (e) => {
    e.preventDefault();
    getTitle()
    const dataToExport = {
      tournamentId: selectTournament,
      playerGender: gender,
      epeePlayers: epeePlayerArray(),
      foilPlayers: foilPlayerArray(),
      sabrePlayers: sabrePlayerArray(),
    };
  
    let playersArray = [
      ...dataToExport.epeePlayers,
      ...dataToExport.foilPlayers,
      ...dataToExport.sabrePlayers,
    ];
  
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet(`Player Entries`);
  
      // Title Row
      worksheet.mergeCells("A1:E1");
      const titleRow = worksheet.getRow(1);
      titleRow.getCell(1).value = getTitle();
      titleRow.getCell(1).alignment = { horizontal: "center" };
      titleRow.font = { bold: true, size: 16 };
      
      // Gender Row
      worksheet.mergeCells("A2:E2");
      const genderRow = worksheet.getRow(2);
      genderRow.getCell(1).value = gender === "Male" ? "BOYS" : "GIRLS";
      genderRow.getCell(1).alignment = { horizontal: "center" };
      genderRow.font = { bold: true, size: 14 };
  
      // Headers
      const headers = ["Sr. No.", "Name", "DOB", "School Name", "Event"];
      worksheet.addRow(headers);
      const headerRow = worksheet.getRow(3);
      headerRow.eachCell((cell) => {
        cell.font = { bold: true };
        cell.alignment = { horizontal: "center" };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFFF00" }, // Yellow
        };
      });
  
      // Add players with event-based colors
      playersArray.forEach((entry, index) => {
        const row = worksheet.addRow([
          index + 1,
          entry.fullName,
          entry.dob,
          entry.schoolCollegeName,
          entry.eventName,
        ]);
  
        // Apply background color based on event
        let bgColor = "FFFFFF"; // Default white
        if (entry.eventName === "Epee") bgColor = "FFFF99"; // Light Yellow
        if (entry.eventName === "Foil") bgColor = "FF9999"; // Light Red
        if (entry.eventName === "Sabre") bgColor = "99CCFF"; // Light Blue
  
        row.eachCell((cell) => {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: bgColor },
          };
        });
      });
  
      // Auto-adjust column width
      worksheet.columns.forEach((column) => {
        column.width = 15;
      });
  
      // Generate Excel file
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, `players_entries.xlsx`);
      toast.success("Exported the player list in Excel")
    } catch (error) {
      toast.error("Couldn't export players");
    }


   sendSinglePlayertoDatabase(playersArray)
  };

  const sendSinglePlayertoDatabase = async (playersArray) => {
    console.log(playersArray);
    
    for (const singlePlayer of playersArray) { 
      const data = {
        tid: Number(selectTournament),
        pid: singlePlayer.pid, 
        tevent: singlePlayer.eventName,
      };
  
      try {
        const response = await axios.post("http://localhost:3500/admin/createEntry", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        console.log("Response:", response.data); 
      } catch (error) {
        console.error("Error for player:", singlePlayer.pid, error.message);
      }
    }
  };
  
  

  return (
    <div className="w-full  rounded-lg shadow-2xl p-5">
      <Toaster />
      <div className="bg-white rounded-lg w-full p-5">
        <h1 className="text-center font-extrabold text-3xl text-gray-800 p-5">
          Create Tournament Entry
        </h1>

        <form id="FormEle" onSubmit={exportPlayers}>
          <div className="w-full flex justify-between items-center">
            <select
              className="w-[50%] border border-black rounded-lg p-3"
              id="tournamentSelect"
              onChange={chooseTournament}
              value={selectTournament}
            >
              <option value="Choose Tournament">Choose Tournament</option>
              {tournamentList &&
                tournamentList.map((tournament) => {
                  return (
                    <option key={tournament.tid} value={tournament.tid}>
                      {tournament.title}
                    </option>
                  );
                })}
            </select>

            <select
              className="w-[30%] border border-black rounded-lg p-3"
              onChange={handleGenderChange}
              value={gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="w-full">
            <div className="w-full mt-2 border border-black rounded-lg p-3">
              <h1 className="font-bold text-xl pl-5">Epee</h1>
              {epeePlayers &&
                epeePlayers.map((player) => (
                  <div
                    key={player.pid}
                    className="w-full flex justify-between items-center p-2 border border-black rounded-lg mt-2"
                  >
                    <h1>{player.fullName}</h1>
                    <input
                      type="checkbox"
                      id={player.pid}
                      onChange={() => handlePlayerChange(player.fullName,player.eventName)}
                      disabled={epeeCount >=4 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="w-full mt-2 border border-black rounded-lg p-3">
              <h1 className="font-bold text-xl pl-5">Foil</h1>
              {foilPlayers &&
                foilPlayers.map((player) => (
                  <div
                    key={player.pid}
                    className="w-full flex justify-between items-center p-2 border border-black rounded-lg mt-2"
                  >
                    <h1>{player.fullName}</h1>
                    <input
                      type="checkbox"
                      id={player.pid}
                      onChange={() => handlePlayerChange(player.fullName,player.eventName)}
                      disabled={foilCount >=4 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="w-full mt-2 border border-black rounded-lg p-3">
              <h1 className="font-bold text-xl pl-5">Sabre</h1>
              {sabrePlayers &&
                sabrePlayers.map((player) => (
                  <div
                    key={player.pid}
                    className="w-full flex justify-between items-center p-2 border border-black rounded-lg mt-2"
                  >
                    <h1>{player.fullName}</h1>
                    <input
                      type="checkbox"
                      id={player.pid}
                      onChange={() => handlePlayerChange(player.fullName,player.eventName)}
                      disabled={sabreCount >= 4 ? true : false}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="w-max mt-5">
            <button className="bg-blue-600 text-white rounded-lg p-3 active:bg-blue-700">
              Export Players to PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEntry;
