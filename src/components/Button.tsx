import styles from "../css/Button.module.css";

interface props {
	url: string;
}

function Button({ url }: props) {
	const styleObj = {};
	return (
		<>
			<a href={url}>
				<button style={styleObj} className={styles.btn}>
					JOIN
				</button>
			</a>
		</>
	);
}

export default Button;
