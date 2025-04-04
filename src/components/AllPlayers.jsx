import { Link } from 'react-router-dom';

function AllPlayers({ players }) {
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <p>{player.breed}</p>
          <Link to={`/player/${player.id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllPlayers;
