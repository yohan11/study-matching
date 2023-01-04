import styles from "../css/Button.module.css";

function Button() {
	const styleObj = {};
	return (
		<>
			<a href="https://forms.gle/SN5bVUVVPhagEiiw8">
				<button style={styleObj} className={styles.btn}>
					JOIN
				</button>
			</a>
		</>
	);
}

export default Button;
