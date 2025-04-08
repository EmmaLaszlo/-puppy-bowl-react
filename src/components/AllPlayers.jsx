import { Link } from "react-router-dom";

function AllPlayers({ players, searchTerm, onDelete }) {
  // Filter players based on the search term
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredPlayers.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <img src={player.imageUrl} alt={player.name} width="100" />
          <br />
          <Link to={`/player/${player.id}`}>See Details</Link>
          <br />
          <button onClick={() => onDelete(player.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AllPlayers;
