import styles from "./Ticket.module.css";
import Tag from "./Tag";

interface props {
	studyName: string;
	leaderName: string;
	type: string;
	image: string;
}

function Ticket({ studyName, leaderName, type, image }: props) {
	return (
		<span className={styles.content}>
			<span className={styles.img}>
				<img src={image} className={styles.studyImg} />
			</span>
			<span className={styles.text}>
				<span>
					<span className={styles.title}>{studyName}</span>
					<span className={styles.leader}>{leaderName}</span>
				</span>
				<span className={styles.tag}>
					<Tag type={type} />
				</span>
			</span>
		</span>
	);
}

export default Ticket;
