import "./globals.css";
import { Geist } from "next/font/google"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"]
})

export const metadata = {
  title: {
    default: "The Yatra Company",
    template: "%s | The Yatra Company",
  },

  description:
    "Reliable taxi services, airport pickup, airport drop and outstation cab booking across India.",

  keywords: [
    "Taxi Service",
    "Airport Pickup",
    "Airport Drop",
    "Outstation Taxi",
    "Cab Booking",
    "Travel Company",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}