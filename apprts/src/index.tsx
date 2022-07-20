import ReactDOM from "react-dom";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSerch";

const App = () => {
	return (
		<div>
			<UserSearch />
			<GuestList />
			<Parent />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);*/
