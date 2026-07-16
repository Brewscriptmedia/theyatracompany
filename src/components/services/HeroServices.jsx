import styles from "./HeroServices.module.css";

export default function HeroServices(){
    return(
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h1>Our Services</h1>
                    <p>
                        Comfortable, Safe and Affordable Taxi Serices across Uttar Pradesh and India
                    </p>
                </div>
            </div>
        </section>
    )
}