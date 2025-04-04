import { useState } from 'react';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES`;

function NewPlayerForm({ setPlayers }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        await fetch(`${APIURL}/players`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, breed, imageUrl }),
          });
          
      // Optional: refetch players
      const updatedRes = await fetch(`${APIURL}/players`);
      const updatedData = await updatedRes.json();
      setPlayers(updatedData.data.players);

      setName('');
      setBreed('');
      setImageUrl('');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Puppy</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed" required />
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default NewPlayerForm;
