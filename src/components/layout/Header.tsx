"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/certificates", label: "Certificates" },
        { href: "/how-it-works", label: "How It Works" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-blue-100/90 backdrop-blur-md py-3 shadow-lg shadow-primary/5"
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="ghost" size="sm">
                                Login
                            </Button>
                        </Link>
                        <Link href="/get-certificate">
                            <Button size="sm">Get Certificate</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-900"
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
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-600 hover:text-primary font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 pt-4">
                                <Link href="/login">
                                    <Button variant="outline" className="w-full">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/get-certificate">
                                    <Button className="w-full">Get Certificate</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
