/* eslint-disable react/no-unescaped-entities */
import styles from "./MissionVision.module.css";

export default function MissionVision(){
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.card}>
                    <div className={styles.icon}>🎯</div>
                    <h2>Our Mission</h2>
                    <p>
                        To provide dependable, affordable, and safe taxi services while
                        delivering exceptional customer satisfaction through punctuality,
                        professionalism, and comfort.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.icon}>🚖</div>
                    <h2>Our Vision</h2>
                    <p>
                        To become India's most trusted taxi service by continuously
                        improving customer experience, embracing innovation, and expanding
                        our reach across the country.
                    </p>
                </div>
            </div>
        </section>
    )
}