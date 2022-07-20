import { useState } from "react";

const users = [
	{ name: "Vera", age: 50 },
	{ name: "Ola", age: 20 },
	{ name: "Kat", age: 30 },
];

const UserSearch: React.FC = () => {
	const [name, setSearch] = useState("");
	const [user, setUserFound] = useState<
		{ name: string; age: number } | undefined
	>();

	const onClickSearch = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});
		setUserFound(foundUser);
		setSearch("");
	};

	return (
		<div>
			<h2>User search: </h2>
			<input value={name} onChange={(e) => setSearch(e.target.value)} />
			<button onClick={onClickSearch}>Search user</button>
			<div>
				<h5>User name: {user && user.name}</h5>
				<h5>User age: {user && user.age}</h5>
			</div>
		</div>
	);
};

export default UserSearch;
