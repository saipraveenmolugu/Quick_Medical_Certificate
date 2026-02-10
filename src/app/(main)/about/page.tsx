"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Shield,
    CheckCircle,
    Users,
    Building,
    Plane,
    GraduationCap,
    Briefcase,
    Heart,
    Clock,
    FileCheck,
    Globe,
    Lock,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { CERTIFICATE_TYPES } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function AboutPage() {
    const trustFeatures = [
        "Consultations conducted by registered doctors",
        "Certificates issued in approved medical formats",
        "Full compliance with Telemedicine Act 2019 and NMC guidelines",
        "Strict doctor–patient confidentiality",
        "Secure handling of personal and medical data",
    ];

    const whyChooseUs = [
        {
            icon: Clock,
            title: "Fast Processing",
            description: "Receive digital certificates within minutes after consultation",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: Building,
            title: "Convenience",
            description: "Consult registered doctors from the comfort of your home",
            gradient: "from-indigo-500 to-indigo-600",
        },
        {
            icon: Globe,
            title: "Nationwide Service",
            description: "Available across major cities and states in India",
            gradient: "from-sky-500 to-sky-600",
        },
        {
            icon: Lock,
            title: "Privacy First",
            description: "Your health information is protected with high-security standards",
            gradient: "from-blue-600 to-indigo-600",
        },
        {
            icon: FileCheck,
            title: "Accepted Formats",
            description: "Certificates suitable for offices, colleges, travel, and official submissions",
            gradient: "from-indigo-600 to-blue-600",
        },
    ];

    const userCategories = [
        { icon: Briefcase, text: "Working professionals", color: "text-blue-500" },
        { icon: GraduationCap, text: "Students and educators", color: "text-indigo-500" },
        { icon: Users, text: "Job seekers and employers", color: "text-sky-500" },
        { icon: Plane, text: "Travelers and business professionals", color: "text-blue-600" },
        { icon: Heart, text: "Individuals caring for family members", color: "text-indigo-600" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="container mx-auto px-4 relative z-10"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white mb-6 shadow-sm border border-white/30"
                        >
                            <Sparkles className="w-4 h-4 text-white" />
                            Trusted by 10,000+ Users
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-blue-100">QuickMedicalCertificate</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Your trusted online destination for obtaining genuine medical
                            certificates quickly, securely, and conveniently.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="py-16 container mx-auto px-4">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                                <Shield className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our mission is to make medical certification accessible, ethical, and
                            reliable for everyone across India. We aim to reduce unnecessary clinic
                            visits while ensuring that every certificate issued meets legal, medical,
                            and professional standards.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            In today&apos;s fast-paced world, visiting a clinic just for documentation can
                            be time-consuming and stressful—especially when you&apos;re unwell.
                            QuickMedicalCertificate.com was created to eliminate this hassle by offering
                            online medical certificates issued only after proper doctor evaluation,
                            fully compliant with Indian telemedicine regulations.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                                Our Services
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                What We Do
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                QuickMedicalCertificate.com provides a secure platform where individuals
                                can consult registered doctors online and receive valid medical
                                certificates for various purposes.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {CERTIFICATE_TYPES.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={`/certificates/${cert.id}`}
                                        className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-3xl">{cert.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                                                    {cert.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 line-clamp-2">
                                                    {cert.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Trust & Authenticity Section */}
            <section className="py-16 container mx-auto px-4">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                            Trust & Security
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How We Ensure Trust & Authenticity
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 p-8 border border-blue-100/50"
                    >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100/30 rounded-full blur-2xl" />

                        <div className="relative z-10 space-y-4">
                            {trustFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="relative z-10 mt-8 text-gray-600 text-center italic bg-white/60 rounded-xl p-4">
                            We strongly discourage fake or self-generated medical certificates. Every
                            certificate issued through our platform is backed by professional medical
                            assessment and ethical healthcare practices.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                                Why Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Choose QuickMedicalCertificate.com?
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {whyChooseUs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Who Can Use Section */}
            <section className="py-16 container mx-auto px-4">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                            For Everyone
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Who Can Use Our Services?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Our platform is designed for everyone who needs medical documentation.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {userCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                                    <category.icon className={`w-6 h-6 ${category.color}`} />
                                </div>
                                <span className="text-gray-800 font-medium">{category.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Commitment Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-12 md:p-16">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-80 h-80 border border-white rounded-full translate-y-1/2 -translate-x-1/2" />
                            </div>

                            <div className="relative z-10 text-center text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
                                <p className="text-lg text-blue-100 leading-relaxed mb-6 max-w-2xl mx-auto">
                                    At QuickMedicalCertificate.com, we believe healthcare documentation should
                                    be simple, ethical, and transparent. We continuously improve our services
                                    to ensure timely support, professional consultations, and medical
                                    certificates you can trust.
                                </p>
                                <p className="text-xl font-semibold">
                                    Your health, privacy, and peace of mind remain our top priorities.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Whether you need a certificate urgently or for planned documentation,
                        we&apos;re here to support you every step of the way.
                    </p>
                    <Link href="/#certificates">
                        <Button size="xl" className="shadow-xl shadow-primary/20">
                            Apply for Certificate Now
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
