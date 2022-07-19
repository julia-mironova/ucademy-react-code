interface ChildProps {
	color: string;
	onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			{color}
			<button onClick={onClick}>Click</button>
		</div>
	);
};

//export const Child:React.FC<ChildProps> =({color}) => {return ...} - this type is easy for children
