import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "Do you provide airport pickup and drop?",
        answer: "Yes, we provide reliable airport pickup and drop services 24*7."
    },
    {
        question: "Do you offer outstation trips?",
        answer: "Yes, we provide intercity travel across Uttar Pradesh and nearby states."
    },
    {
        question: "Can I book a taxi on Whatsapp?",
        answer: "Absolutely! You can call or message us directly on Whatsapp."
    },
    {
        question: "Are your drivers verified?",
        answer: "Yes, Every driver is experienced, licensed and professionally trained."
    },
    {
        question: "Do you provide corporate travel?",
        answer: "Yes, we provide transportation solutions for companies and employees."
    }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
}

export default function FAQ(){
    return (
        <section className={styles.faq}>
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <h2>Frequently Asked Questions</h2>
            <div className={styles.container}>
                {faqs.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}