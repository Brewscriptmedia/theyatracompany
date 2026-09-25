import LinkedText, { plainText } from "@/components/ui/LinkedText";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "Do you provide airport pickup and drop?",
        answer: "Yes, we provide reliable airport pickup and drop services 24*7."
    },
    {
        question: "Do you offer outstation trips?",
        answer: "Yes, we provide intercity travel across Uttar Pradesh and nearby states. Popular routes include Ayodhya, Varanasi, Kanpur and Gorakhpur; check the [distance from Lucknow to Gorakhpur via Purvanchal Expressway](/travel-guides/lucknow-to-gorakhpur-taxi#lucknow-to-gorakhpur-distance-via-purvanchal-expressway) before you book."
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
    },
    {
        question: "How far is Gorakhpur from Lucknow via the Purvanchal Expressway?",
        answer: "About 282 km of expressway: the Purvanchal Expressway from Lucknow to the Salarpur interchange, then the Gorakhpur Link Expressway into Gorakhpur. Most trips take 4.5 to 5 hours. Our one-way [Lucknow to Gorakhpur taxi](/travel-guides/lucknow-to-gorakhpur-taxi#lucknow-to-gorakhpur-distance-via-purvanchal-expressway) starts at ₹4,999 for a sedan, including expressway toll."
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
            "text": plainText(faq.answer)
        }
    }))
}

export default function FAQ(){
    return (
        <section className={styles.faq} id="faq">
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
                        <p><LinkedText text={item.answer} /></p>
                    </div>
                ))}
            </div>
        </section>
    )
}