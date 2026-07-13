"use client"

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import Container from "../ui/Container";

export default function Navbar(){
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <Container>
                <nav className="flex items-center justify-between h-20">

                    {/* logo */}
                    <Link href="/" className="text-2x1 font-bold text-slate-900">
                    The Yatra Company
                    </Link>

                    {/* Navigation */}
                    <ul className="hidden md:flex items-center gap-8 text-grey-700 font-medium">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    {/* CTA */}
                    <a
                        href="tel:+919999999999"
                        className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 transition text-white px-5 py-3 rounded-full"
                    >
                        <FaPhoneAlt/>
                        Call Now
                    </a>

                </nav>
            </Container>
        </header>
    )
}