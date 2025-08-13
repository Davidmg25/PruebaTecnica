import React, { useState } from "react";
import LeagueS from "./Components/League.jsx";
import TeamLI from "./Components/Teams.jsx";
import { useLeagues } from "./Hooks/useLeague.js";
import { useTeams } from "./Hooks/useTeams.js";

export default function App() {
  const [LeaguaSelect, setLeaguaSelect] = useState("");

  const { leagues, error: leaguesError } = useLeagues();
  const { teams, loading, error: teamsError } = useTeams(LeaguaSelect);

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Seleccione una liga</h1>

      {(leaguesError || teamsError) && (
        <p style={{ color: "red" }}>{leaguesError || teamsError}</p>
      )}

      <LeagueS leagues={leagues} onChange={setLeaguaSelect} />

      {loading && <p>Equipos cargando...</p>}

      {!loading && teams.length > 0 && <TeamLI teams={teams} />}
    </main>
  );
}
