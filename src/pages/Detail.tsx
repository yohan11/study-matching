import React from "react";
import Button from "../components/Button";
import StudyInfo from "../components/StudyInfo";
import styles from "../css/Detail.module.css";

function Detail() {
	return (
		<div className={styles.content}>
			<div className={styles.main}>
				<StudyInfo
					studyName="Python"
					leaderName="김준영"
					members={7}
					period="2023.01.01 ~ 2023.02.01 (4주)"
					type="group"
					img="img/a.jpeg"
				/>
				<div className={styles.btn}>
					<Button
						width="239px"
						height="61px"
						color="#2d67bd"
						text="JOIN"
						textSize="36px"
						url="https://github.com/yohan11/study-matching"
					/>
				</div>
			</div>

			<div className={styles.detailInfo}>
				<div className={styles.section}>
					<div className={styles.title}>About</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</div>
				</div>
				<div className={styles.section}>
					<div className={styles.title}>Curriculum</div>
					<div>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolo res
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;
