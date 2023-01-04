import ticketStyles from "../css/Ticket.module.css";
import styles from "../css/StudyInfo.module.css";
import Tag from "./Tag";

function StudyInfo() {
	return (
		<div className={styles.info}>
			<img src="img/a.jpeg" className={ticketStyles.studyImg} />
			<div className={styles.text}>
				<div>
					<div className={styles.main}>
						<span className={styles.title}>React</span>
						<div className={styles.tag}>
							<Tag type="leading" />
						</div>
					</div>
					<div className={styles.leader}>김준영</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.members}>
						<span className={styles.bold}>5 </span>Members
					</div>
					<div className={styles.bold}>2022.12.25 ~ 2022.12.29 (4 days)</div>
				</div>
			</div>
		</div>
	);
}

export default StudyInfo;
