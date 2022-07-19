import { Child } from "./Child";

const Parent = () => {
	return <Child color="yellow" onClick={() => alert("Wow")} />;
};

export default Parent;
