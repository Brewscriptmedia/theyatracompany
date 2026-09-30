/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from "./CompanyStory.module.css";

export default function CompanyStory(){
    return (
        <section className={styles.CompanyStory}>
            <div className={styles.container}>

                <div className={styles.imageSection}>
                    <img
                        src="/Images/logo1.jpeg"
                        alt="The Yatra Company"
                    />
                </div>

                <div className={styles.contentSection}>
                    <span className={styles.tag}>Who We Are</span>

                    <h2>
                        Delivering Safe & Comfortable Journeys Across India
                    </h2>

                    <p>
                        The Yatra Company is dedicated to providing reliable taxi services
                        for local travel, airport transfers, outstation trips, and 
                        corporate transportation. We believe every customer deserves a 
                        comfortable, punctual, and safe travel experience.
                    </p>

                    <p>
                        Our experienced drivers, well-maintained vehicles, and 24*7 support 
                        ensure every ride is smooth from pickup to destination. whether 
                        you're travelling for business or leisure, we'er always ready to 
                        serve you.
                    </p>

                    <div className={styles.stats}>

                        <div className={styles.card}>
                            <h3>5000+</h3>
                            <p>Happy Customers</p>
                        </div>

                        <div className={styles.card}>
                            <h3>1500+</h3>
                            <p>Airport Transfers</p>
                        </div>

                        <div className={styles.card}>
                            <h3>24*7</h3>
                            <p>Customer Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}