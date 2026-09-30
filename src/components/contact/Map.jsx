import styles from "./Map.module.css";
import siteConfig from "@/config/siteConfig";

export default function Map() {
  return (
    <section className={styles.mapSection}>

      <h2>Find Us</h2>

      <iframe
        src={siteConfig.googleMap}
        loading="lazy"
        allowFullScreen
      ></iframe>

    </section>
  );
}