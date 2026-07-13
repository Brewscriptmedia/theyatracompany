import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <body className="bg-white text-slate-900">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}