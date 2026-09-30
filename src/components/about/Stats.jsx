import styles from "./Stats.module.css";

export default function Stats(){
    const stats = [
        {
            number: "5000+",
            title: "Happy Customers"
        },
        {
            number: "50+",
            title: "Professional Drivers"
        },
        {
            number: "24*7",
            title: "Customer Support"
        },
        {
            number: "4.9⭐️",
            title: "Customer Rating"
        }
    ];

    return (
        <section className={styles.stats}>
            <div className={styles.container}>

                <h2>Our Journey in Numbers</h2>

                <p>
                    We take pride in delivering reliable taxi services across India with
                    thousands of satisfied customers.
                </p>

                <div className={styles.grid}>
                    {stats.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <h3>{item.number}</h3>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>               
            </div>
        </section>
    )
}