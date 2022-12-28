import React from "react";
import Header from "./Header";
import Ticket from "./Ticket";
import styles from "./App.module.css";

function App() {
	return (
		<>
			<div>
				<Header />
			</div>
			<div className={styles.content}>
				<div className={styles.text}>My Study Group</div>
				<div className={styles.tickets}>
					<Ticket
						studyName="Python"
						leaderName="김준영"
						type="leading"
						image="img/a.jpeg"
					/>
					<Ticket
						studyName="React"
						leaderName="구진서"
						type="group"
						image="img/b.jpeg"
					/>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.text}>Recruiting Study Group</div>
				<div className={styles.tickets}>
					<Ticket
						studyName="Python"
						leaderName="김준영"
						type="leading"
						image="img/b.jpeg"
					/>
					<Ticket
						studyName="React"
						leaderName="구진서"
						type="group"
						image="img/a.jpeg"
					/>
				</div>
			</div>
		</>
	);
}

export default App;
