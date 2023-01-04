import ticketStyles from "../css/Ticket.module.css";
import styles from "../css/StudyInfo.module.css";
import Tag from "./Tag";

interface props {
	studyName: string;
	leaderName: string;
	members: number;
	period: string;
	type: string;
	img: string;
}

function StudyInfo({
	studyName,
	leaderName,
	members,
	period,
	type,
	img,
}: props) {
	return (
		<div className={styles.info}>
			<img src={img} className={ticketStyles.studyImg} />
			<div className={styles.text}>
				<div>
					<div className={styles.main}>
						<span className={styles.title}>{studyName}</span>
						<div className={styles.tag}>
							<Tag type={type} />
						</div>
					</div>
					<div className={styles.leader}>{leaderName}</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.members}>
						<span className={styles.bold}>{members} </span>Members
					</div>
					<div className={styles.bold}>{period}</div>
				</div>
			</div>
		</div>
	);
}

export default StudyInfo;
