/* eslint-disable @next/next/no-img-element */
import styles from "./Hero.module.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import siteConfig from "@/config/siteConfig";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>

        <div className={styles.left}>

          <span className={styles.badge}>
            Trusted Taxi Service Across India
          </span>

          <h1>
            Your Journey <br />
            Starts Here
          </h1>

          <p>
            Airport Pickup • Airport Drop • Local Taxi •
            Outstation Trips • Corporate Travel
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Ride
              </a>
            </button>

            <button className={styles.secondary}>
              <a
                href={`tel:${siteConfig.phone}`}
              >
                📞 Call Now
              </a>
            </button>
          </div>

          <div className={styles.socials}>
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

          <div className={styles.features}>
            <span>✔ Professional Drivers</span>
            <span>✔ Safe Journey</span>
            <span>✔ 24×7 Support</span>
          </div>

        </div>

        <div className={styles.right}>
          <img
            src="/Images/innova-sada1.png"
            alt="Taxi"
          />
        </div>

      </div>
    </section>
  );
}