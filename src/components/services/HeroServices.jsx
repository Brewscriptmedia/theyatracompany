import styles from "./HeroServices.module.css";

export default function HeroServices(){
    return(
        <section className={styles.hero}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <span className={styles.tag}>
                    Trusted Taxi Services in Uttar Pradesh
                </span>

                <h1>
                    Our <span>Services</span>
                </h1>

                <p>
                    Comfortable, Safe and Affordable Taxi Services across Uttar Pradesh 
                    and India.
                </p>
            </div>
        </section>
    )
}