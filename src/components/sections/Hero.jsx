"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaTaxi, FaShieldAlt } from "react-icons/fa";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-slate-50">

      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="text-amber-500 uppercase tracking-[3px] font-semibold">
              Trusted Taxi Service Across India
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight">
              Your Journey
              <br />
              Starts Here
            </h1>

            <p className="mt-8 text-lg text-slate-600 max-w-xl">
              Airport Pickup, Airport Drop, Local Taxi,
              Outstation Trips and Corporate Travel with
              professional drivers across India.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Button href="/contact">
                Book Ride
              </Button>

              <Button
                href="tel:+919999999999"
                variant="secondary"
              >
                <FaPhoneAlt />
                Call Now
              </Button>

            </div>

            {/* Trust badges */}

            <div className="flex flex-wrap gap-6 mt-12">

              <div className="flex items-center gap-3 bg-white shadow-soft rounded-xl px-5 py-4">

                <FaTaxi className="text-amber-500 text-xl" />

                <span>Professional Drivers</span>

              </div>

              <div className="flex items-center gap-3 bg-white shadow-soft rounded-xl px-5 py-4">

                <FaShieldAlt className="text-amber-500 text-xl" />

                <span>Safe Journey</span>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <Image
              src="/images/hero.jpg"
              alt="Taxi Service"
              width={700}
              height={700}
              priority
              className="rounded-3xl shadow-2xl object-cover"
            />

          </motion.div>

        </div>

      </Container>

    </section>
  );
}