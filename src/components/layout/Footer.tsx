import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        certificates: [
            { href: "/certificates/sick-leave", label: "Sick Leave Certificate" },
            { href: "/certificates/fitness", label: "Fitness Certificate" },
            { href: "/certificates/recovery", label: "Recovery Certificate" },
            { href: "/certificates/work-from-home", label: "WFH Certificate" },
            { href: "/certificates/sports", label: "Sports Fitness" },
        ],
        company: [
            { href: "/about", label: "About Us" },
            { href: "/how-it-works", label: "How It Works" },
            { href: "/pricing", label: "Pricing" },
            { href: "/contact", label: "Contact Us" },
            { href: "/faq", label: "FAQs" },
        ],
        legal: [
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-of-service", label: "Terms of Service" },
            { href: "/refund-policy", label: "Refund Policy" },
            { href: "/medical-disclaimer", label: "Medical Disclaimer" },
        ],
    };

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group transition-transform hover:scale-105">
                            <Image
                                src="/footer-logo.png"
                                alt="Quick Medical Certificate"
                                width={220}
                                height={160}
                                className="h-28 w-auto object-contain filter invert-[0.9] hue-rotate-[180deg] brightness-[1.2] contrast-[1.1]"
                                priority
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            India's most trusted platform for legitimate medical certificates.
                            Secure teleconsultation with NMC-registered doctors, available 24/7 with instant delivery.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-2">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                                    aria-label={social}
                                >
                                    <span className="sr-only">{social}</span>
                                    {/* Placeholder social icons using tiny SVG circles/stars */}
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="8" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            {/* Trust Badges */}
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-gray-800/50 border border-gray-700 px-3 py-1.5 rounded-full uppercase tracking-widest">
                                <span className="text-green-500 font-bold">✓</span> NMC Compliant
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-gray-800/50 border border-gray-700 px-3 py-1.5 rounded-full uppercase tracking-widest">
                                <span className="text-blue-500 font-bold">🔒</span> SSL Secure
                            </div>
                        </div>
                    </div>

                    {/* Certificates */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2 inline-block">Certificates</h4>
                        <ul className="space-y-3">
                            {footerLinks.certificates.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2 inline-block">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2 inline-block">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Link
                                href="/verify-certificate"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 rounded-xl text-sm font-bold transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Verify Certificate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800/50 bg-black/20">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <p className="text-gray-500 text-xs">
                                © {currentYear} QuickMedicalCertificate. All rights reserved.
                            </p>
                            <p className="text-gray-600 text-[10px]">
                                *Terms and conditions apply. Medical certificates are subject to doctor's approval.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-3">
                            <div className="flex items-center gap-4 bg-gray-800/30 px-4 py-2 rounded-xl border border-gray-700/50">
                                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Payments secured by</span>
                                <span className="text-white font-bold text-sm">₹ Razorpay</span>
                            </div>
                            <div className="flex gap-2 opacity-50 grayscale contrast-125">
                                {/* Simple payment icons placeholders */}
                                <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
                                <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
                                <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
