import { useState } from "react";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES`;

function NewPlayerForm({ setPlayers }) {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch(`${APIURL}/players`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, breed, imageUrl }) // status not accepted by API
            });

            const result = await res.json();

            const newPlayer = { ...result.data.newPlayer, status };

            setPlayers((prev) => [...prev, newPlayer]);

            setName("");
            setBreed("");
            setImageUrl("");
            setStatus("");
        } catch (err) {
            console.error("Error adding player:", err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Puppy</h2>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder="Breed"
                required
            />
            <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
            />
            <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
                required
            />

            <button type="submit">Add Player</button>
        </form>
    );
}

export default NewPlayerForm;
