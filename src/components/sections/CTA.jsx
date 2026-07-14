import styles from "./CTA.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTA(){
    return (
        <section className={styles.cta}>
            <div className="container">
                <div className={styles.content}>
                    
                    <h2>Ready to Travel With Us?</h2>

                    <p>Book your airport transfer, local taxi or outstation ride today. Safe, comfortable and affordable taxi services across India</p>

                    <div className={styles.buttons}>

                        <a
                            href="tel:+919999999999"
                            className={styles.callBtn}
                        >
                            <FaPhoneAlt/>
                            Call Now
                        </a>

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            <FaWhatsapp/>
                            Whatsapp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}