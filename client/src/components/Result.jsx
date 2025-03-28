import React, { useEffect, useState } from "react";
import ChampionResult from "./ChampionResult";
import IndivisualResult from "./IndivisualResult";
import ParticipationCertificate from "./ParticipationCertificate.jsx";
import MeritCertificate from "./MeritCertificate.jsx";
import CreateEntry from "./CreateEntry.jsx";

const Result = () => {




  return (
    <div>
      <div className="p-4 bg-white text-black shadow-[0_20px_20px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden">
        <div className=" gap-4">
          {/* <Link
            to="championResult"
            className="  bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            Champions Result
          </Link>

          <Link
            to="indivisualResult"
            className=" bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            Indivisual Result
          </Link>
          <Link
            to="participationCertificate"
            className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            Add Participation Certificate
          </Link>
          <Link
            to="meritCertificate"
            className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
          >
            Add Merit Certificate
          </Link> */}



     

          <CreateEntry />
          <IndivisualResult />
          <ChampionResult />
          <MeritCertificate />
          <ParticipationCertificate />
        </div>

        {/* <main className="flex-1 p-6">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="championResult" replace />}
            />
            <Route
              path="participationCertificate"
              element={<ParticipationCertificate />}
            />
            <Route path="meritCertificate" element={<MeritCertificate />} />
            <Route path="championResult" element={<ChampionResult />} />
            <Route path="indivisualResult" element={<IndivisualResult />} />
          </Routes>

          <Outlet />
        </main> */}
      </div>
    </div>
  );
};

export default Result;
