import { useEffect, useState } from "react";

export function useTeams(selectedLeague) {
  const [teams, setTeams] = useState([]);
  const [load, setload] = useState(false);
  const [error, setError] = useState("");


  const TEAMS_SELECT = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${selectedLeague}`



  useEffect(() => {
    if (!selectedLeague) return;

    setload(true);
    setError("");

    fetch(TEAMS_SELECT)
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams || []);
        setload(false);
      })
      .catch(() => {
        setError("Error al cargar los equipos");
        setload(false);
      });
  }, [selectedLeague]);

  return { teams, load, error };
}
