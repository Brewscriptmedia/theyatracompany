import styles from "./Map.module.css";

export default function Map() {
  return (
    <section className={styles.mapSection}>

      <h2>Find Us</h2>

      <iframe
        src="YOUR_GOOGLE_MAPS_EMBED_LINK"
        loading="lazy"
        allowFullScreen
      ></iframe>

    </section>
  );
}