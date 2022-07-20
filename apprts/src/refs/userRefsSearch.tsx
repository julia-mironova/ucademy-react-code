import { useState, useRef, useEffect } from "react";

const users = [
	{ name: "Vera", age: 50 },
	{ name: "Ola", age: 20 },
	{ name: "Kat", age: 30 },
];

const UserSearchRef: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setSearch] = useState("");
	const [user, setUserFound] = useState<
		{ name: string; age: number } | undefined
	>();

	useEffect(() => {
		if (!inputRef.current) {
			return;
		}
		inputRef.current.focus();
	}, []);

	const onClickSearch = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});
		setUserFound(foundUser);
		setSearch("");
	};

	return (
		<div>
			<h2 style={{ color: "blue" }}>User by ref search: </h2>
			<input
				ref={inputRef}
				value={name}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button onClick={onClickSearch}>Search user</button>
			<div>
				<h5 style={{ color: "blue" }}>User name: {user && user.name}</h5>
				<h5 style={{ color: "blue" }}>User age: {user && user.age}</h5>
			</div>
		</div>
	);
};

export default UserSearchRef;
