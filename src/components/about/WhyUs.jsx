import styles from "./WhyUs.module.css";

import {
FaUserTie,
FaClock,
FaShieldAlt,
FaMoneyBillWave,
FaMapMarkedAlt,
FaHeadset
} from "react-icons/fa";

export default function WhyUs(){
    const reasons=[
        {
            icon:<FaUserTie/>,
            title:"Professional Drivers",
            text:"Experienced chauffeurs ensuring a safe and comfortable journey."
        },
        {
            icon:<FaClock/>,
            title:"24×7 Service",
            text:"Book a taxi anytime, anywhere."
        },
        {
            icon:<FaShieldAlt/>,
            title:"Safe Travel",
            text:"Clean, sanitized and well-maintained vehicles."
        },
        {
            icon:<FaMoneyBillWave/>,
            title:"Affordable Pricing",
            text:"Transparent pricing without hidden charges."
        },
        {
            icon:<FaMapMarkedAlt/>,
            title:"PAN India Coverage",
            text:"Airport, local and outstation travel across India."
        },
        {
            icon:<FaHeadset/>,
            title:"Dedicated Support",
            text:"Friendly customer support whenever you need assistance."
        }
    ];

return(
    <section className={styles.whyUs}>
        <div className={styles.container}>
            <h2>Why Choose The Yatra Company?</h2>
            <p>
                Your trusted travel partner committed to making every journey safe,
                comfortable and hassle-free.
            </p>
            <div className={styles.grid}>
                {reasons.map((item,index)=>(
                    <div className={styles.card} key={index}>
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