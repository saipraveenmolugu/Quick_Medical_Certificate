"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Stethoscope } from "lucide-react";
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
    const [activeHash, setActiveHash] = useState(() => (typeof window !== "undefined" ? window.location.hash : ""));
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active hash based on scroll position or just use window.location.hash
            if (window.location.hash !== activeHash) {
                setActiveHash(window.location.hash);
            }
        };

        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [activeHash]);

    // Helper to check if a link is active
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/" && (!activeHash || activeHash === "#");
        }
        if (href.startsWith("/#")) {
            const hash = href.substring(1);
            return pathname === "/" && activeHash === hash;
        }
        return pathname?.startsWith(href);
    };

    const isAboutOrContact = pathname?.startsWith("/about") || pathname?.startsWith("/contact");
    const isHeaderWhite = scrolled || mobileMenuOpen || isAboutOrContact;
    const navLinkClass = isAboutOrContact ? "text-gray-600" : "text-gray-600 hover:text-primary";
    const specialNavClass = "text-gray-600 transition-colors";
    const mobileMenuIconClass = "text-gray-900";

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
                    <div className="hidden lg:flex items-center gap-8">
                        <Link
                            href="/"
                            className={cn(
                                "relative font-medium transition-colors py-1",
                                isActive("/") ? "text-primary" : navLinkClass
                            )}
                        >
                            Home
                            {isActive("/") && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    initial={false}
                                />
                            )}
                        </Link>

                        {/* Certificates Mega Menu */}
                        <div ref={dropdownRef} className="relative">
                            <button
                                className={cn(
                                    "relative flex items-center gap-1 font-medium transition-colors py-1",
                                    isActive("/certificates") ? "text-primary" : navLinkClass
                                )}
                                onClick={() => setCertificatesDropdownOpen(!certificatesDropdownOpen)}
                                onMouseEnter={() => setCertificatesDropdownOpen(true)}
                            >
                                Certificates
                                <ChevronDown className={cn("w-4 h-4 transition-transform", certificatesDropdownOpen && "rotate-180")} />
                                {isActive("/certificates") && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        initial={false}
                                    />
                                )}
                            </button>

                            <AnimatePresence>
                                {certificatesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 overflow-hidden"
                                        onMouseLeave={() => setCertificatesDropdownOpen(false)}
                                    >
                                        <div className="grid grid-cols-3 gap-8">
                                            {/* Leave Certificates */}
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 pb-2 border-b border-gray-50">
                                                    <div className="p-2 bg-blue-50 rounded-lg">
                                                        <span className="text-xl">📋</span>
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 leading-tight">
                                                        Leave<br />Certificates
                                                    </h4>
                                                </div>
                                                <ul className="space-y-1">
                                                    {leaveCertificates.map((cert) => (
                                                        <li key={cert.id}>
                                                            <Link
                                                                href={`/certificates/${cert.id}/`}
                                                                className={cn(
                                                                    "text-[13px] transition-all block py-1.5 px-3 rounded-lg hover:bg-blue-50 hover:text-primary",
                                                                    pathname?.startsWith(`/certificates/${cert.id}`) ? "text-primary font-semibold bg-blue-50" : "text-gray-600"
                                                                )}
                                                                onClick={() => setCertificatesDropdownOpen(false)}
                                                            >
                                                                {cert.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Fitness & Work Status */}
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 pb-2 border-b border-gray-50">
                                                    <div className="p-2 bg-green-50 rounded-lg">
                                                        <span className="text-xl">💪</span>
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 leading-tight">
                                                        Fitness &<br />Work Status
                                                    </h4>
                                                </div>
                                                <ul className="space-y-1">
                                                    {fitnessCertificates.map((cert) => (
                                                        <li key={cert.id}>
                                                            <Link
                                                                href={`/certificates/${cert.id}/`}
                                                                className={cn(
                                                                    "text-[13px] transition-all block py-1.5 px-3 rounded-lg hover:bg-green-50 hover:text-green-600",
                                                                    pathname?.startsWith(`/certificates/${cert.id}`) ? "text-green-600 font-semibold bg-green-50" : "text-gray-600"
                                                                )}
                                                                onClick={() => setCertificatesDropdownOpen(false)}
                                                            >
                                                                {cert.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Medical Records */}
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 pb-2 border-b border-gray-50">
                                                    <div className="p-2 bg-purple-50 rounded-lg">
                                                        <span className="text-xl">🏥</span>
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 leading-tight">
                                                        Medical<br />Records
                                                    </h4>
                                                </div>
                                                <ul className="space-y-1">
                                                    {medicalCertificates.map((cert) => (
                                                        <li key={cert.id}>
                                                            <Link
                                                                href={`/certificates/${cert.id}/`}
                                                                className={cn(
                                                                    "text-[13px] transition-all block py-1.5 px-3 rounded-lg hover:bg-purple-50 hover:text-purple-600",
                                                                    pathname?.startsWith(`/certificates/${cert.id}`) ? "text-purple-600 font-semibold bg-purple-50" : "text-gray-600"
                                                                )}
                                                                onClick={() => setCertificatesDropdownOpen(false)}
                                                            >
                                                                {cert.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Link
                                                    href="/#certificates"
                                                    className="mt-4 flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all px-3"
                                                    onClick={() => setCertificatesDropdownOpen(false)}
                                                >
                                                    View All Certificates <ChevronDown className="w-4 h-4 -rotate-90" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/#certificates"
                            className={cn(
                                "relative font-medium transition-colors flex items-center gap-1 py-1",
                                isActive("/#certificates") ? "text-primary" : navLinkClass
                            )}
                        >
                            <Stethoscope className="w-4 h-4" />
                            Doctor Consultation
                            {isActive("/#certificates") && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    initial={false}
                                />
                            )}
                        </Link>

                        <Link
                            href="/about"
                            className={cn(
                                "relative font-medium transition-colors py-1",
                                isActive("/about") ? "text-primary" : specialNavClass
                            )}
                        >
                            About Us
                            {isActive("/about") && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    initial={false}
                                />
                            )}
                        </Link>

                        <Link
                            href="/#faq"
                            className={cn(
                                "relative font-medium transition-colors py-1",
                                isActive("/#faq") ? "text-primary" : navLinkClass
                            )}
                        >
                            FAQ
                            {isActive("/#faq") && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    initial={false}
                                />
                            )}
                        </Link>

                        <Link
                            href="/contact"
                            className={cn(
                                "relative font-medium transition-colors py-1",
                                isActive("/contact") ? "text-primary" : specialNavClass
                            )}
                        >
                            Contact Us
                            {isActive("/contact") && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    initial={false}
                                />
                            )}
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
                                        className={cn(
                                            "font-medium py-3 px-4 rounded-lg flex items-center justify-between transition-colors",
                                            isActive("/") ? "bg-blue-50 text-primary border-l-4 border-primary" : "text-gray-600"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                        {isActive("/") && <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />}
                                    </Link>

                                    {/* Mobile Certificates Accordion */}
                                    <div className={cn("rounded-lg overflow-hidden transition-colors", isActive("/certificates") && "bg-gray-50/50")}>
                                        <button
                                            className={cn(
                                                "flex items-center justify-between w-full font-medium py-3 px-4",
                                                isActive("/certificates") ? "text-primary border-l-4 border-primary bg-blue-50" : "text-gray-600"
                                            )}
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
                                                    className="pl-8 pr-4 pb-2 space-y-1 overflow-hidden"
                                                >
                                                    {CERTIFICATE_TYPES.map((cert) => (
                                                        <Link
                                                            key={cert.id}
                                                            href={`/certificates/${cert.id}/`}
                                                            className={cn(
                                                                "block text-sm py-2 px-3 rounded-md transition-colors",
                                                                pathname?.startsWith(`/certificates/${cert.id}`) ? "text-primary font-semibold bg-white shadow-sm" : "text-gray-500"
                                                            )}
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
                                        className={cn(
                                            "font-medium py-3 px-4 rounded-lg flex items-center gap-2 transition-colors",
                                            isActive("/#certificates") ? "bg-blue-50 text-primary border-l-4 border-primary" : "text-gray-600"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Stethoscope className="w-4 h-4" />
                                        Doctor Consultation
                                    </Link>

                                    <Link
                                        href="/about"
                                        className={cn(
                                            "font-medium py-3 px-4 rounded-lg flex items-center justify-between transition-colors",
                                            isActive("/about") ? "bg-blue-50 text-primary border-l-4 border-primary" : "text-gray-600"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        About Us
                                        {isActive("/about") && <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />}
                                    </Link>

                                    <Link
                                        href="/#faq"
                                        className={cn(
                                            "font-medium py-3 px-4 rounded-lg flex items-center justify-between transition-colors",
                                            isActive("/#faq") ? "bg-blue-50 text-primary border-l-4 border-primary" : "text-gray-600"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        FAQ
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className={cn(
                                            "font-medium py-3 px-4 rounded-lg flex items-center justify-between transition-colors",
                                            isActive("/contact") ? "bg-blue-50 text-primary border-l-4 border-primary" : "text-gray-600"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                        {isActive("/contact") && <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />}
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
