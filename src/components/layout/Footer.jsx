import Link from "next/link";
import styles from "./Footer.module.css";
import Container from "../ui/Container";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import siteConfig from "@/config/siteConfig";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Container>
                <div className={styles.grid}>
                    <div>
                        <h2>The Yatra Company</h2>
                        <p>
                            Reliable Taxi Services across India.
                            Airport Pickup, Airport Drop,
                            Local & Outstation Cabs.
                        </p>
                    </div>

                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        <div className={styles.socialIcons}>
                        <a
                            href={siteConfig.instagram}
                            target="_blank"
                            rel="noopener noreferrer" 
                        >
                            <FaInstagram/>
                        </a>

                        <a
                            href={siteConfig.facebook}
                            target="_blank"
                            rel="noopener noreferrer" 
                        >
                            <FaFacebookF/>
                        </a>
                    </div>
                    </div>

                    <div>
                        <h3>Contact</h3>
                        <p>📞 +91-91988 93198</p>
                        <p>✉ theyatracompanyofficial@gmail.com</p>
                    </div>

                </div>

                <div className={styles.bottom}>
                    © 2026 The Yatra Company. All Rights Reserved.
                </div>
            </Container>
        </footer>
    )
}