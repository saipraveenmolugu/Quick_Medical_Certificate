"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Stethoscope, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, CERTIFICATE_TYPES } from "@/lib/utils";

// Group certificates by category
const leaveCertificates = CERTIFICATE_TYPES.filter(c => c.category === "leave");
const fitnessCertificates = CERTIFICATE_TYPES.filter(c => c.category === "fitness");
const medicalCertificates = CERTIFICATE_TYPES.filter(c => c.category === "medical");

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [certificatesDropdownOpen, setCertificatesDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const isAboutOrContact = pathname?.startsWith("/about") || pathname?.startsWith("/contact");
    const isHeaderWhite = scrolled || mobileMenuOpen || isAboutOrContact;

    const navLinkClass = isAboutOrContact ? "text-gray-600" : "text-gray-600 hover:text-primary";
    const activeBlueClass = isAboutOrContact ? "text-primary" : "text-gray-600 hover:text-primary";
    const specialNavClass = "text-gray-600 transition-colors";

    const mobileMenuIconClass = "text-gray-900";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setCertificatesDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#certificates", label: "Doctor Consultation" },
        { href: "/about", label: "About Us" },
        { href: "/#faq", label: "FAQ" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isHeaderWhite
                    ? "bg-white py-3 shadow-md border-b border-gray-100"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/footer-logo.PNG"
                            alt="Quick Medical Certificate"
                            width={240}
                            height={65}
                            className="h-12 lg:h-16 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            href="/"
                            className={cn("font-medium transition-colors", navLinkClass)}
                        >
                            Home
                        </Link>

                        {/* Certificates Mega Menu */}
                        <div ref={dropdownRef} className="relative">
                            <button
                                className={cn("flex items-center gap-1 font-medium transition-colors", navLinkClass)}
                                onClick={() => setCertificatesDropdownOpen(!certificatesDropdownOpen)}
                                onMouseEnter={() => setCertificatesDropdownOpen(true)}
                            >
                                Certificates
                                <ChevronDown className={cn("w-4 h-4 transition-transform", certificatesDropdownOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {certificatesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 p-6"
                                        onMouseLeave={() => setCertificatesDropdownOpen(false)}
                                    >
                                        <div className="grid grid-cols-3 gap-6">
                                            {/* Leave Certificates */}
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                    <span className="text-lg">📋</span>
                                                    Leave Certificates
                                                </h4>
                                                <ul className="space-y-2">
                                                    {leaveCertificates.map((cert) => (
                                                        <li key={cert.id}>
                                                            <Link
                                                                href={`/certificates/${cert.id}/`}
                                                                className="text-sm text-gray-600 transition-colors block py-1"
                                                                onClick={() => setCertificatesDropdownOpen(false)}
                                                            >
                                                                {cert.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Fitness & Work Status */}
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                    <span className="text-lg">💪</span>
                                                    Fitness & Work Status
                                                </h4>
                                                <ul className="space-y-2">
                                                    {fitnessCertificates.map((cert) => (
                                                        <li key={cert.id}>
                                                            <Link
                                                                href={`/certificates/${cert.id}/`}
                                                                className="text-sm text-gray-600 transition-colors block py-1"
                                                                onClick={() => setCertificatesDropdownOpen(false)}
                                                            >
                                                                {cert.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Medical Records */}
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                    <span className="text-lg">🏥</span>
                                                    Medical Records
                                                </h4>
                                                <ul className="space-y-2">
                                                    {medicalCertificates.map((cert) => (
                                                        <li key={cert.id}>
                                                            <Link
                                                                href={`/certificates/${cert.id}/`}
                                                                className="text-sm text-gray-600 transition-colors block py-1"
                                                                onClick={() => setCertificatesDropdownOpen(false)}
                                                            >
                                                                {cert.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Link
                                                    href="/#certificates"
                                                    className="mt-4 inline-block text-sm font-semibold text-primary transition-colors"
                                                    onClick={() => setCertificatesDropdownOpen(false)}
                                                >
                                                    View All Certificates →
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/#certificates"
                            className={cn("font-medium transition-colors flex items-center gap-1", activeBlueClass)}
                        >
                            <Stethoscope className="w-4 h-4" />
                            Doctor Consultation
                        </Link>

                        <Link
                            href="/about"
                            className={cn("font-medium transition-colors", specialNavClass)}
                        >
                            About Us
                        </Link>

                        <Link
                            href="/#faq"
                            className={cn("font-medium transition-colors", navLinkClass)}
                        >
                            FAQ
                        </Link>

                        <Link
                            href="/contact"
                            className={cn("font-medium transition-colors", specialNavClass)}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className={cn(navLinkClass, isAboutOrContact ? "hover:bg-transparent" : "hover:bg-white/10")}>
                                Login
                            </Button>
                        </Link>
                        <Link href="/#certificates">
                            <Button
                                size="sm"
                                className={cn("shadow-lg shadow-primary/25", isAboutOrContact && "hover:translate-y-0 hover:shadow-lg")}
                            >
                                Get Certificate
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={cn("w-6 h-6", mobileMenuIconClass)}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="mt-4 pb-4 border-t border-gray-100 pt-4">
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href="/"
                                        className="text-gray-600 font-medium py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>

                                    {/* Mobile Certificates Accordion */}
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full text-gray-600 font-medium py-2"
                                            onClick={() => setCertificatesDropdownOpen(!certificatesDropdownOpen)}
                                        >
                                            Certificates
                                            <ChevronDown className={cn("w-4 h-4 transition-transform", certificatesDropdownOpen && "rotate-180")} />
                                        </button>
                                        <AnimatePresence>
                                            {certificatesDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 overflow-hidden"
                                                >
                                                    {CERTIFICATE_TYPES.map((cert) => (
                                                        <Link
                                                            key={cert.id}
                                                            href={`/certificates/${cert.id}/`}
                                                            className="block text-sm text-gray-500 py-1.5"
                                                            onClick={() => {
                                                                setMobileMenuOpen(false);
                                                                setCertificatesDropdownOpen(false);
                                                            }}
                                                        >
                                                            {cert.icon} {cert.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <Link
                                        href="/#certificates"
                                        className="text-gray-600 font-medium py-2 flex items-center gap-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Stethoscope className="w-4 h-4" />
                                        Doctor Consultation
                                    </Link>

                                    <Link
                                        href="/about"
                                        className="text-gray-600 font-medium py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>

                                    <Link
                                        href="/#faq"
                                        className="text-gray-600 font-medium py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        FAQ
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="text-gray-600 font-medium py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>

                                    <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 mt-2">
                                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                            <Button variant="outline" className="w-full">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link href="/#certificates" onClick={() => setMobileMenuOpen(false)}>
                                            <Button className="w-full">Get Certificate</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
