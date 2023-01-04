import React, { useState } from "react";
import { Link } from "react-router-dom";

import Ticket from "../components/Ticket";
import styles from "../css/Home.module.css";

import myStudyData from "../myStudyData";
import recruitingStudyData from "../recruitStudyData";

function Home() {
	const [myStudyList, setMyStudyList] = useState(myStudyData);
	const [recruitingStudyList, setRecruitingStudyList] =
		useState(recruitingStudyData);

	return (
		<>
			<div className={styles.content}>
				<div className={styles.text}>My Study Group</div>
				<div className={styles.tickets}>
					{myStudyList &&
						myStudyList.map((study) => (
							<Link
								to={`/mystudy-detail/${study.id}`}
								style={{ textDecoration: "none", color: "black" }}
								key={study.id}
							>
								<Ticket
									studyName={study.studyName}
									leaderName={study.leaderName}
									type={study.type}
									image={study.image}
								/>
							</Link>
						))}
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.text}>Recruiting Study Group</div>
				<div className={styles.tickets}>
					{recruitingStudyList &&
						recruitingStudyList.map((study) => (
							<Link
								to={`/recruitingstudy-detail/${study.id}`}
								style={{ textDecoration: "none", color: "black" }}
								key={study.id}
							>
								<Ticket
									studyName={study.studyName}
									leaderName={study.leaderName}
									type={study.type}
									image={study.image}
								/>
							</Link>
						))}
				</div>
			</div>
		</>
	);
}

export default Home;
