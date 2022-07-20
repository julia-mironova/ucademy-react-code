import { Component } from "react";

interface User {
	name: string;
	age: number;
}

interface searchProps {
	users: User[];
}

interface searchState {
	name: string;
	user: User | undefined;
}

class Search extends Component<searchProps> {
	state: searchState = {
		name: "",
		user: undefined,
	};

	onClickSearch = () => {
		const foundUser = this.props.users.find((user) => {
			return user.name === this.state.name;
		});
		this.setState({ user: foundUser });
	};

	render() {
		const { name, user } = this.state;

		return (
			<div>
				<h2>User search: </h2>
				<input
					value={name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={this.onClickSearch}>Search user</button>
				<div>
					<h5>User name: {user && user.name}</h5>
					<h5>User age: {user && user.age}</h5>
				</div>
			</div>
		);
	}
}

export default Search;
