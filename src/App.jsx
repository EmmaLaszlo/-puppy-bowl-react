import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES`;

function App() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const res = await fetch(`${APIURL}/players`);
        const data = await res.json();
        setPlayers(data.data.players);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPlayers();
  }, []);

  // Delete button
  async function handleDeletePlayer(playerId) {
    try {
      await fetch(`${APIURL}/players/${playerId}`, {
        method: "DELETE",
      });

      // Update local list
      setPlayers((prev) => prev.filter((p) => p.id !== playerId));
    } catch (err) {
      console.error("Error deleting player:", err);
    }
  }

  return (
    <Router>
      <h1>Puppy Bowl</h1>

      {/* Add New Player Button */}
      <div>
        <Link to="/new">
          <button> Add New Player</button>
        </Link>
      </div>

      {/* Search Bar */}
      <div style={{ margin: '1rem 0' }}>
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <AllPlayers
              players={players}
              searchTerm={searchTerm}
              onDelete={handleDeletePlayer}
            />
          }
        />
        <Route path="/player/:id" element={<SinglePlayer />} />
        <Route path="/new" element={<NewPlayerForm setPlayers={setPlayers} />} />
      </Routes>
    </Router>
  );
}

export default App;
