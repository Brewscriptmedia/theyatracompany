import styles from "./BookingProcess.module.css";

const steps = [
    {
        number: "01",
        title: "Book Your Ride",
        description: "Call us or send a Whatsapp message with your pickup and destination."
    },
    {
        number: "02",
        title: "Confirm Booking",
        description: "Our team confirms your booking instantly with all the trip details."
    },
    {
        number: "03",
        title: "Driver Arrives",
        description: "Professional driver reaches your pickup location on time."
    },
    {
        number: "04",
        title: "Enjoy Your Journey",
        description: "Relax and travel safely to your destination."
    },
];

export default function BookingProcess(){
    return (
        <section className={styles.process}>
            <h2>How it Works</h2>

            <div className={styles.grid}>
                {steps.map((step) => (
                    <div className={styles.card} key={step.number}>
                        <div className={styles.number}>{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}