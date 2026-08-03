"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";
import Container from "../ui/Container";
import siteConfig from "@/config/siteConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <Link href="/" onClick={closeMenu} className={styles.logo}>
            <Image
              src="/Images/logo1.jpeg"
              alt="The Yatra Company"
              width={180}
              height={60}
              priority
            />
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div
            className={`${styles.menu} ${
              menuOpen ? styles.menuOpen : ""
            }`}
          >
            <ul className={styles.navLinks}>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>

              <li>
                <Link href="/travel-guides" onClick={closeMenu}>
                  Travel Guides
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            <a
              href={`tel:${siteConfig.phone}`}
              className={styles.callButton}
              onClick={closeMenu}
            >
              📞 Call Now
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}