"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function TermsPage() {
    const sections = [
        {
            id: 1,
            title: "1. Introduction",
            content: `Welcome to QuickMedicalCertificate.com. By using our website and services, you agree to these Terms & Conditions. If you do not agree, please do not use our website.`,
        },
        {
            id: 2,
            title: "2. Our Service",
            content: `QuickMedicalCertificate.com provides an online consultation platform where users can connect with registered medical doctors.`,
            list: [
                "We help users request medical certificates after doctor consultation.",
                "Final approval and issuance depend only on the doctor's decision.",
                "We do not guarantee that a certificate will be issued.",
                "Certificates are provided for genuine medical reasons only.",
            ],
        },
        {
            id: 3,
            title: "3. Doctor Responsibility",
            list: [
                "All medical consultations are handled by registered doctors.",
                "Doctors may approve or reject requests based on medical evaluation.",
                "The website is not responsible for doctor decisions.",
                "Certificates may include digital or handwritten signatures/seals as decided by the doctor.",
            ],
        },
        {
            id: 4,
            title: "4. User Responsibility",
            content: "By using our service, you agree that:",
            list: [
                "You will provide true and correct information",
                "You will not submit fake, misleading, or false details",
                "You understand that wrong information may lead to rejection without refund",
                "You will attend the consultation properly if required",
            ],
        },
        {
            id: 5,
            title: "5. Medical Certificate Acceptance",
            list: [
                "We do not guarantee acceptance of certificates by employers, colleges, companies, or authorities.",
                "Acceptance depends on the organization requesting the certificate.",
                "We are not liable for rejection by any third party.",
            ],
        },
        {
            id: 6,
            title: "6. Refund Policy",
            content: "Refunds are not applicable if:",
            list: [
                "Consultation is completed",
                "Doctor has reviewed your case",
                "Certificate is issued or rejected after consultation",
                "Incorrect or incomplete information is provided",
                "Refund is requested after service processing",
            ],
            note: "If any refund is approved, service or convenience charges may be deducted.",
        },
        {
            id: 7,
            title: "7. Misuse & Restricted Activities",
            content: "Users must not:",
            list: [
                "Use the website for illegal purposes",
                "Upload fake reports or documents",
                "Misuse doctor identity or certificates",
                "Attempt hacking, spamming, or system abuse",
                "Copy or misuse website content",
            ],
            note: "Violation may result in permanent access ban.",
        },
        {
            id: 8,
            title: "8. Intellectual Property",
            content:
                "All website content including text, design, logos, and structure belongs to QuickMedicalCertificate.com. You may not copy, reuse, or distribute content without permission.",
        },
        {
            id: 9,
            title: "9. Website Availability",
            content:
                "We try to keep services running smoothly. We are not responsible for delays due to:",
            list: ["Technical issues", "Internet problems", "Doctor availability"],
        },
        {
            id: 10,
            title: "10. Changes to Services",
            content:
                "QuickMedicalCertificate.com may update, modify, or stop services anytime without prior notice.",
        },
        {
            id: 11,
            title: "11. Disclaimer",
            list: [
                "We do not provide emergency medical services.",
                "Our platform is for online consultation and documentation only.",
                "Medical certificates are valid only for the mentioned duration.",
                "Once issued, certificates cannot be changed.",
            ],
        },
        {
            id: 12,
            title: "12. Limitation of Liability",
            content: "QuickMedicalCertificate.com is not responsible for:",
            list: [
                "Loss due to certificate rejection",
                "Misuse of certificate by user",
                "Any indirect or third-party damages",
            ],
        },
        {
            id: 13,
            title: "13. Governing Law",
            content:
                "These Terms are governed by Indian law. Any disputes will be handled under Indian jurisdiction.",
        },
        {
            id: 14,
            title: "14. Contact Us",
            content: "For support or questions:",
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg opacity-90">QuickMedicalCertificate.com</p>
                    </div>
                </motion.div>
            </section>

            {/* Content */}
            <section className="py-12 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    >
                        <div className="prose prose-gray max-w-none">
                            {sections.map((section) => (
                                <div key={section.id} className="mb-8 last:mb-0">
                                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                                        {section.title}
                                    </h2>
                                    {section.content && (
                                        <p className="text-gray-600 mb-3">{section.content}</p>
                                    )}
                                    {section.list && (
                                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                            {section.list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.note && (
                                        <p className="mt-3 text-gray-600 italic">{section.note}</p>
                                    )}
                                    {section.contactEmail && (
                                        <p className="mt-2">
                                            📧{" "}
                                            <Link
                                                href={`mailto:${section.contactEmail}`}
                                                className="text-emerald-600 hover:underline"
                                            >
                                                {section.contactEmail}
                                            </Link>
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Back to Home */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-8"
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
