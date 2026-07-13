import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <Container>

        <div className="grid md:grid-cols-3 gap-10 py-16">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              The Yatra Company
            </h2>

            <p className="leading-7">
              Reliable taxi services, airport transfers and outstation travel
              across India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <p>📞 +91 99999 99999</p>
            <p>✉ info@theyatracompany.com</p>
          </div>

        </div>

        <div className="border-t border-slate-700 py-6 text-center text-sm">
          © {new Date().getFullYear()} The Yatra Company. All Rights Reserved.
        </div>

      </Container>

    </footer>
  );
}