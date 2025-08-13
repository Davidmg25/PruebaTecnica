import React from "react";

export default function LeagueS({ leagues, onChange }) {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "8px", marginBottom: "20px", width: "100%" }}
    >
      <option value="">-- Selecciona una Liga --</option>
      {leagues.map((league) => (
        <option key={league.idLeague} value={league.strLeague}>
          {league.strLeague}
        </option>
      ))}
    </select>
  );
}
