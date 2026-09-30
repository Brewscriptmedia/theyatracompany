import styles from "./HeroAbout.module.css";

export default function HeroAbout(){
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.content}>

                    <span className={styles.badge}>About The Yatra Company</span>

                    <h1>
                        Your Trusted Travel 
                        <br/>
                        Partner Across India
                    </h1>

                    <p>
                        The yatra Company provides safe, reliable, and affordable taxi
                        services for airport transfers, local city rides, outstation
                        journeys, and corporate travel. Our mission is to make every
                        journey comfortable, punctual, and stress-free.
                    </p>
                </div>
            </div>
        </section>
    )
}