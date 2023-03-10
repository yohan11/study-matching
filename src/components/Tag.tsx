import styles from "../css/Tag.module.css";

interface props {
	type: string;
}

function Tag({ type }: props) {
	const styleObj = {
		backgroundColor: type === "leading" ? "#ABC7FE" : "#C5FAC4",
	};

	return (
		<>
			<span style={styleObj} className={styles.tag} id="tag">
				{type === "leading" ? "리딩" : "그룹"}
			</span>
		</>
	);
}

export default Tag;
