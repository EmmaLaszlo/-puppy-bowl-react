import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES/players`;

function App() {
  const [players, setPlayers] = useState([]);

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

  return (
    <Router>
      <h1> Puppy Bowl </h1>
      <Routes>
        <Route path="/" element={<AllPlayers players={players} />} />
        <Route path="/player/:id" element={<SinglePlayer />} />
        <Route path="/new" element={<NewPlayerForm setPlayers={setPlayers} />} />
      </Routes>
    </Router>
  );
}

export default App;
// routing and fetching the API