import styles from "./Services.module.css";
import {
  FaPlaneArrival,
  FaPlaneDeparture,
  FaTaxi,
  FaRoute,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaPlaneArrival />,
      title: "Airport Pickup",
      text: "On-time airport pickup with professional drivers.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Airport Drop",
      text: "Reach the airport comfortably without any hassle.",
    },
    {
      icon: <FaTaxi />,
      title: "Local Taxi",
      text: "Affordable taxi service for local city travel.",
    },
    {
      icon: <FaRoute />,
      title: "Outstation Trips",
      text: "Safe and comfortable long-distance travel across India.",
    },
  ];

  return (
    <section className={styles.services}>
      <div className="container">
        <h2>Our Services</h2>
        <p>Reliable taxi services for every journey.</p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}