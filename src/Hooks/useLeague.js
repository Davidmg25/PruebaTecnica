import { useEffect, useState } from "react";

export function useLeagues() {
  const [leagues, setLeagues] = useState([]);
  const [error, setError] = useState("");

  const LEAGUES_SELECT = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"

  useEffect(() => {
    fetch(LEAGUES_SELECT)
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues || []))
      .catch(() => setError("Error al cargar las ligas "));
  }, []);

  return {leagues, error };
}
