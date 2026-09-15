"use client";

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
                        <h2>Raahify</h2>
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
                            <li><Link href="/travel-guides">Travel Guides</Link></li>
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
                        <p><a href={`tel:${siteConfig.phone}`} onClick={() => { if (typeof window !== "undefined" && window.gtag) window.gtag("event", "call_click", { event_category: "lead", event_label: "footer" }); }}>📞 +91-91988 93198</a></p>
                        <p><a href={`mailto:${siteConfig.email}`}>✉ theyatracompanyofficial@gmail.com</a></p>
                    </div>

                </div>

                <div className={styles.bottom}>
                    © 2026 Raahify. All Rights Reserved.
                </div>
            </Container>
        </footer>
    )
}
