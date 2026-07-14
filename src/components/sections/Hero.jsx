import styles from "./Hero.module.css";

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
              Book Your Ride
            </button>

            <button className={styles.secondary}>
              Call Now
            </button>
          </div>

          <div className={styles.features}>
            <span>✔ Professional Drivers</span>
            <span>✔ Safe Journey</span>
            <span>✔ 24×7 Support</span>
          </div>

        </div>

        <div className={styles.right}>
          <img
            src="/Images/hero-car.jpeg"
            alt="Taxi"
          />
        </div>

      </div>
    </section>
  );
}