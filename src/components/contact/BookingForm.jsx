/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "",
    trip: "One Way",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendWhatsApp = () => {
    // Basic validation
    if (
      !form.name ||
      !form.phone ||
      !form.pickup ||
      !form.drop ||
      !form.date ||
      !form.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappMessage = `🚖 *New Taxi Booking Request*

👤 *Passenger Details*

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not Provided"}

📍 *Trip Details*

Pickup: ${form.pickup}
Drop: ${form.drop}

📅 Journey Date: ${form.date}
🕒 Journey Time: ${form.time}

👥 Passengers: ${form.passengers || "Not Mentioned"}

🚕 Trip Type: ${form.trip}

📝 Additional Notes:
${form.message || "None"}

Thank you.`;

    const phoneNumber = "919876543210";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.booking}>
      <div className={styles.container}>
        <h2>Book Your Ride</h2>

        <p className={styles.subtitle}>
          Fill in your travel details and we'll connect you instantly on
          WhatsApp.
        </p>

        <div className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <select
            name="trip"
            value={form.trip}
            onChange={handleChange}
          >
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Airport Pickup</option>
            <option>Airport Drop</option>
            <option>Local Rental</option>
            <option>Corporate Travel</option>
            <option>Wedding Transport</option>
            <option>Pilgrimage Tour</option>
          </select>

          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location *"
            value={form.pickup}
            onChange={handleChange}
          />

          <input
            type="text"
            name="drop"
            placeholder="Drop Location *"
            value={form.drop}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />

          <input
            type="number"
            name="passengers"
            placeholder="Number of Passengers"
            value={form.passengers}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Additional Information (Luggage, Child Seat, etc.)"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="button"
            onClick={sendWhatsApp}
          >
            🚖 Book on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}