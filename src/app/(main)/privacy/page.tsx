"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Lock, Cookie, UserCheck, Link2, FileText, Mail } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function PrivacyPage() {
    const sections = [
        {
            id: 1,
            title: "1. Information We Collect",
            icon: UserCheck,
            content:
                "We collect only the information that is necessary to provide our services effectively and securely.",
            subsections: [
                {
                    title: "1.1 Personal Information",
                    list: [
                        "Full Name",
                        "Email Address",
                        "Phone Number",
                        "Date of Birth (if required)",
                        "Medical details required for consultation and issuing medical certificates",
                    ],
                },
                {
                    title: "1.2 Payment Information",
                    content:
                        "To complete transactions, certain payment-related information is required. All payment transactions are carried out using secure, encrypted systems and industry-standard security protocols. Payment information is used only for transaction processing and refunds.",
                },
                {
                    title: "1.3 Automatically Collected Information",
                    list: [
                        "IP address",
                        "Browser type",
                        "Device and operating system information",
                        "Pages visited and basic usage data",
                    ],
                },
            ],
        },
        {
            id: 2,
            title: "2. How We Use Your Information",
            icon: FileText,
            content: "Your information is used to:",
            list: [
                "Provide online medical consultations and issue medical certificates",
                "Process payments and refunds",
                "Communicate regarding your requests or service updates",
                "Improve website functionality and user experience",
                "Comply with applicable legal and regulatory requirements",
            ],
        },
        {
            id: 3,
            title: "3. Sharing of Information",
            icon: Link2,
            content:
                "We do not sell, rent, or trade your personal information. We may share information only in the following cases:",
            list: [
                "With licensed medical practitioners for consultation and certificate issuance",
                "With trusted service providers necessary for website operations and payment processing",
                "When required by law, court orders, or government authorities",
            ],
        },
        {
            id: 4,
            title: "4. Data Security",
            icon: Lock,
            content:
                "We take reasonable administrative and technical measures to protect your personal information, including:",
            list: [
                "Secure Socket Layer (SSL) encryption",
                "Secure hosting environments",
                "Restricted access to personal data",
            ],
            note: "While we follow reasonable security practices, no method of data transmission over the internet is completely secure. Therefore, absolute security cannot be guaranteed.",
        },
        {
            id: 5,
            title: "5. Cookies",
            icon: Cookie,
            content: "QuickMedicalCertificate.com may use cookies to:",
            list: [
                "Improve website functionality",
                "Analyze traffic and usage patterns",
            ],
            note: "You can choose to disable cookies through your browser settings.",
        },
        {
            id: 6,
            title: "6. Your Rights",
            icon: UserCheck,
            content: "You have the right to:",
            list: [
                "Access or update your personal information",
                "Request deletion of your data (subject to legal and regulatory requirements)",
                "Withdraw consent for non-essential communications",
            ],
            contactEmail: "support@quickmedicalcertificate.com",
        },
        {
            id: 7,
            title: "7. Third-Party Links",
            icon: Link2,
            content:
                "Our website may contain links to third-party websites. We are not responsible for the content, security, or privacy practices of those websites.",
        },
        {
            id: 8,
            title: "8. Changes to This Policy",
            icon: FileText,
            content:
                "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
        },
        {
            id: 9,
            title: "9. Contact Us",
            icon: Mail,
            content:
                "If you have any questions about this Privacy Policy or how your data is handled, please contact us at:",
            contactEmail: "support@quickmedicalcertificate.com",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="container mx-auto px-4 relative z-10"
                >
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-lg opacity-90">QuickMedicalCertificate.com</p>
                    </div>
                </motion.div>
            </section>

            {/* Intro */}
            <section className="py-8 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-xl p-6"
                    >
                        <p className="text-gray-700">
                            Welcome to QuickMedicalCertificate.com. Protecting your privacy is
                            important to us. This Privacy Policy explains how we collect, use,
                            store, and protect your personal information when you use our website
                            and services.
                        </p>
                        <p className="text-gray-600 mt-3 text-sm">
                            By accessing or using QuickMedicalCertificate.com, you agree to this
                            Privacy Policy. If you do not agree, please do not use our services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    {sections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sectionIndex * 0.05 }}
                            className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <section.icon className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                                        {section.title}
                                    </h2>
                                    {section.content && (
                                        <p className="text-gray-600 mb-3">{section.content}</p>
                                    )}
                                    {section.list && (
                                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                                            {section.list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.subsections && (
                                        <div className="space-y-4 mt-4">
                                            {section.subsections.map((sub, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className="bg-gray-50 rounded-lg p-4"
                                                >
                                                    <h3 className="font-semibold text-gray-700 mb-2">
                                                        {sub.title}
                                                    </h3>
                                                    {sub.content && (
                                                        <p className="text-gray-600 text-sm">
                                                            {sub.content}
                                                        </p>
                                                    )}
                                                    {sub.list && (
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-2">
                                                            {sub.list.map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {section.note && (
                                        <p className="mt-3 text-sm text-gray-500 italic">
                                            {section.note}
                                        </p>
                                    )}
                                    {section.contactEmail && (
                                        <p className="mt-3">
                                            📧{" "}
                                            <Link
                                                href={`mailto:${section.contactEmail}`}
                                                className="text-emerald-600 hover:underline font-medium"
                                            >
                                                {section.contactEmail}
                                            </Link>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Back to Home */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center pt-4"
                    >
                        <Link
                            href="/"
                            className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                            ← Back to Home
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
