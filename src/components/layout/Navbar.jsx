"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Container from "../ui/Container";

export default function Navbar() {
    return(
        <header className={styles.header}>
            <Container>
                <nav className={styles.navbar}>
                    <Link href="/" className={styles.logo}>
                        The Yatra Company
                    </Link>

                    <ul className={styles.navLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    <a
                        href="tel:+919999999999"
                        className={styles.callButton}
                    >
                        📞 Call Now
                    </a>
                </nav>
            </Container>
        </header>
    )
}