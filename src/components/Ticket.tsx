import styles from "../css/Ticket.module.css";
import Tag from "./Tag";
import { Link } from "react-router-dom";

interface study {
	studyName: string;
	leaderName: string;
	type: string;
	image: string;
}

function Ticket(props: study) {
	return (
		<span className={styles.content}>
			<span className={styles.img}>
				<img src={props.image} className={styles.studyImg} />
			</span>
			<span className={styles.text}>
				<span>
					<span className={styles.title}>{props.studyName}</span>
					<span className={styles.leader}>{props.leaderName}</span>
				</span>
				<span className={styles.tag}>
					<Tag type={props.type} />
				</span>
			</span>
		</span>
	);
}

export default Ticket;
