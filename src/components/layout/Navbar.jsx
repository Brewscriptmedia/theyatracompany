"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Container from "../ui/Container";
import siteConfig from "@/config/siteConfig";

export default function Navbar() {
    return(
        <header className={styles.header}>
            <Container>
                <nav className={styles.navbar}>
                    <Link href="/">
                        <Image 
                            src="/Images/logo1.jpeg"
                            alt="The Yatra Company"
                            width={180}
                            height={60}
                            priority
                        />
                    </Link>

                    <ul className={styles.navLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    <a
                        href= {`tel:${siteConfig.phone}`}
                        className={styles.callButton}
                    >
                        📞 Call Now
                    </a>
                </nav>
            </Container>
        </header>
    )
}