import { useState } from "react";

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
	const [guests, setGests] = useState<string[]>([]);

	const onClick = () => {
		setGests([...guests, name]);
		setName("");
	};

	return (
		<div>
			<h2>Guest List</h2>
			<ul>
				{guests.map((guest) => (
					<li key={guest}>{guest}</li>
				))}
			</ul>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Ad Guest</button>
		</div>
	);
};

export default GuestList;
