"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { FileText, Download, Eye, X, ArrowRight } from "lucide-react";
import { CERTIFICATE_TYPES } from "@/lib/utils";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

// Sample certificate data - can be managed via admin panel
const sampleCertificates = [
    {
        id: "sick-leave",
        title: "Sick Leave Certificate",
        description: "Medical certificate for workplace sick leave",
        image: "/samples/sick-leave-sample.jpg",
    },
    {
        id: "fitness",
        title: "Fitness Certificate",
        description: "Medical fitness certificate for employment/education",
        image: "/samples/fitness-sample.jpg",
    },
    {
        id: "work-from-home",
        title: "Work From Home Certificate",
        description: "Medical recommendation for remote work",
        image: "/samples/wfh-sample.jpg",
    },
    {
        id: "unfit-to-travel",
        title: "Unfit To Travel Certificate",
        description: "Medical certificate for travel cancellation",
        image: "/samples/unfit-travel-sample.jpg",
    },
    {
        id: "unfit-to-work",
        title: "Unfit To Work Certificate",
        description: "Certificate confirming inability to work",
        image: "/samples/unfit-work-sample.jpg",
    },
    {
        id: "medical-diagnosis",
        title: "Medical Diagnosis Certificate",
        description: "Official documentation of diagnosed condition",
        image: "/samples/diagnosis-sample.jpg",
    },
    {
        id: "caretaker",
        title: "Caretaker Certificate",
        description: "Certificate for family care leave",
        image: "/samples/caretaker-sample.jpg",
    },
    {
        id: "recovery",
        title: "Recovery Certificate",
        description: "Certificate confirming recovery from illness",
        image: "/samples/recovery-sample.jpg",
    },
    {
        id: "fit-to-fly",
        title: "Fit-to-Fly Certificate",
        description: "Medical clearance for air travel",
        image: "/samples/fit-to-fly-sample.jpg",
    },
];

export default function SampleCertificatesPage() {
    const [selectedCertificate, setSelectedCertificate] = useState<typeof sampleCertificates[0] | null>(null);

    const getCertificateIcon = (id: string) => {
        const cert = CERTIFICATE_TYPES.find((c) => c.id === id);
        return cert?.icon || "📋";
    };

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
                            <FileText className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Sample Certificates
                        </h1>
                        <p className="text-lg opacity-90">
                            View examples of our medical certificates to understand the
                            format and information included.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Certificates Grid */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {sampleCertificates.map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group"
                            >
                                {/* Certificate Preview */}
                                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    {/* Placeholder for actual certificate image */}
                                    <div className="text-center">
                                        <span className="text-5xl mb-2 block">
                                            {getCertificateIcon(cert.id)}
                                        </span>
                                        <p className="text-gray-500 text-sm">Sample Preview</p>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <button
                                            onClick={() => setSelectedCertificate(cert)}
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                                            title="View Full Size"
                                        >
                                            <Eye className="w-5 h-5 text-gray-700" />
                                        </button>
                                        <button
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                                            title="Download Sample"
                                        >
                                            <Download className="w-5 h-5 text-gray-700" />
                                        </button>
                                    </div>
                                </div>

                                {/* Certificate Info */}
                                <div className="p-5">
                                    <h3 className="font-semibold text-gray-800 mb-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {cert.description}
                                    </p>
                                    <Link
                                        href={`/certificates/apply/${cert.id}`}
                                        className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            About Our Certificates
                        </h2>
                        <p className="text-gray-600 mb-6">
                            All certificates are issued by registered medical practitioners
                            after a proper online consultation. Each certificate includes
                            the doctor&apos;s name, registration number, and contact details
                            for verification.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Get Your Certificate
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Full Size Modal */}
            {selectedCertificate && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="font-semibold text-gray-800">
                                {selectedCertificate.title}
                            </h3>
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                        <div className="p-8 bg-gray-50 flex items-center justify-center min-h-[400px]">
                            {/* Placeholder for actual certificate image */}
                            <div className="text-center">
                                <span className="text-8xl mb-4 block">
                                    {getCertificateIcon(selectedCertificate.id)}
                                </span>
                                <p className="text-gray-500">
                                    Full Certificate Preview
                                </p>
                                <p className="text-sm text-gray-400 mt-2">
                                    (Actual sample will be displayed here)
                                </p>
                            </div>
                        </div>
                        <div className="p-4 border-t flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                                {selectedCertificate.description}
                            </p>
                            <Link
                                href={`/certificates/apply/${selectedCertificate.id}`}
                                className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
