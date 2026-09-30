import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      review:
        "Excellent airport pickup service. Driver arrived on time and the journey was smooth.",
    },
    {
      name: "Priya Verma",
      review:
        "Very professional drivers and clean cars. Highly recommended.",
    },
    {
      name: "Amit Singh",
      review:
        "Booked an outstation trip with my family. Great experience and affordable pricing.",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>What Our Clients Say</h2>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>

              <p>{item.review}</p>

              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}