import styles from "./HeroGuides.module.css";

export default function HeroGuides(){
    return(
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <span className={styles.badge}>Travel Knowledge Hub</span>

                    <h1>Travel Guides</h1>

                    <p>
                        Discover destination guides, airport transfer tips, taxi booking
                        advice, and travel information to help you plan smooth journeys
                        across Lucknow and beyond. 
                    </p>

                    <a href="#guides" className={styles.button}>
                        Explore Guides
                    </a>
                </div>
            </div>
        </section>
    )
}