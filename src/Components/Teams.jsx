import React from "react";

export default function Teams({ teams }) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "15px",
      }}
    >
      {teams.map((team) => (
        <article
          key={team.idTeam}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={team.strBadge}
            alt={team.strTeam}
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            {team.strTeam}
          </p>
     </article>
      ))}
    </section>
  );
}
