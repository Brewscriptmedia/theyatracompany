import styles from "./WhyChooseUs.module.css";
import {
  FaUserTie,
  FaClock,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <FaUserTie />,
      title: "Professional Drivers",
      text: "Experienced and courteous chauffeurs.",
    },
    {
      icon: <FaClock />,
      title: "24×7 Availability",
      text: "Available whenever you need us.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Journey",
      text: "Comfortable and secure rides every time.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Pricing",
      text: "Transparent pricing with no hidden charges.",
    },
  ];

  return (
    <section className={styles.why}>
      <div className="container">
        <h2>Why Choose Us?</h2>

        <div className={styles.grid}>
          {points.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}