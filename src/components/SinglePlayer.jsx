import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES`;

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchSinglePlayer() {
      try {
        const res = await fetch(`${APIURL}/players/${id}`);
        const data = await res.json();
        console.log("Single player data:", data);
        setPlayer(data.data.player); 
      } catch (err) {
        console.error("Failed to fetch player:", err);
      }
    }
  
    fetchSinglePlayer();
  }, [id]);
  

  if (!player) return <p>Loading...</p>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      {player.imageUrl && <img src={player.imageUrl} alt={player.name} width="200" />}
      <br />
      <Link to="/">⬅ Back to All Players</Link>
    </div>
  );
}

export default SinglePlayer;
