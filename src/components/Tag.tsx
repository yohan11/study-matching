interface props {
	type: string;
}

function Tag({ type }: props) {
	const styleObj = {
		backgroundColor: type === "leading" ? "#ABC7FE" : "#C5FAC4",
		padding: "5px 12px",
		borderRadius: "20px",
		fontSize: "14px",
	};

	return <span style={styleObj}>리딩</span>;
}

export default Tag;
