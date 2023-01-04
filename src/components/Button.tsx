import styles from "../css/Button.module.css";

interface props {
	width: string;
	height: string;
	color: string;
	textSize: string;
	text: string;
	url: string;
}

function Button({ width, height, color, textSize, text, url }: props) {
	return (
		<>
			<a href={url}>
				<button
					style={{
						width,
						height,
						backgroundColor: color,
						fontSize: textSize,
					}}
					className={styles.btn}
				>
					{text}
				</button>
			</a>
		</>
	);
}

export default Button;
