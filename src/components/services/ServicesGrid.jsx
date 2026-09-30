import styles from "./ServicesGrid.module.css";

const services = [
  {
    title: "Intercity Travel",
    icon: "🚖",
    description:
      "Comfortable rides between Lucknow, Delhi, Varanasi, Kanpur and other cities."
  },

  {
    title: "Airport Transfers",
    icon: "✈️",
    description:
      "Timely pickup and drop services to Lucknow Airport."
  },

  {
    title: "Corporate Travel",
    icon: "🏢",
    description:
      "Reliable transport solutions for companies and employees."
  },

  {
    title: "Local City Rental",
    icon: "🏙️",
    description:
      "Hourly and full-day city taxi rentals."
  },

  {
    title: "Wedding Transportation",
    icon: "💍",
    description:
      "Luxury vehicles for weddings and family events."
  },

  {
    title: "Religious Tours",
    icon: "🛕",
    description:
      "Pilgrimage trips to Ayodhya, Varanasi and Prayagraj."
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.services}>
        <h2>What We Offer</h2>
        
        <div className={styles.grid}>
            {services.map((service, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.icon}>
                        {service.icon}
                    </div>

        <h3>{service.title}</h3>
        <p>{service.description}</p>
                </div>
            ))}
        </div>
    </section>
  );
}