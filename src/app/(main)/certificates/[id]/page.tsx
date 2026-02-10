"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Clock,
    CheckCircle,
    FileText,
    Phone,
    ArrowRight,
    Shield,
    Award,
    Users,
    Sparkles,
    Star,
} from "lucide-react";
import { CERTIFICATE_TYPES, PAYMENT_OPTIONS, formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function CertificateDetailPage() {
    const params = useParams();
    const certificateId = params.id as string;

    const certificate = CERTIFICATE_TYPES.find((c) => c.id === certificateId);

    if (!certificate) {
        notFound();
    }

    const processSteps = [
        {
            step: 1,
            title: "Submit Your Request",
            description: "Fill out our easy online form with accurate personal and medical details.",
            icon: FileText,
            color: "from-blue-500 to-blue-600",
        },
        {
            step: 2,
            title: "Online Doctor Consultation",
            description: "A certified doctor will review your request and connect with you.",
            icon: Phone,
            color: "from-indigo-500 to-indigo-600",
        },
        {
            step: 3,
            title: "Receive Your Certificate",
            description: "Get your certificate via WhatsApp/Email within 30 minutes.",
            icon: CheckCircle,
            color: "from-sky-500 to-sky-600",
        },
    ];

    const features = [
        { icon: Shield, text: "NMC & WHO Compliant", color: "text-blue-500" },
        { icon: Award, text: "Verified Doctors", color: "text-indigo-500" },
        { icon: Users, text: "10,000+ Satisfied Customers", color: "text-sky-500" },
        { icon: Clock, text: "Quick Turnaround", color: "text-blue-600" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-100/50 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-100/30 rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="container mx-auto px-4 relative z-10"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-6 shadow-sm border border-blue-100"
                        >
                            <Sparkles className="w-4 h-4 text-blue-500" />
                            Trusted by 10,000+ Users
                        </motion.div>

                        {/* Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/20"
                        >
                            <span className="text-5xl">{certificate.icon}</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {certificate.name}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            {certificate.longDescription}
                        </p>

                        {/* Price Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center gap-4 mb-8"
                        >
                            <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-gray-100">
                                <span className="text-sm text-gray-500">Starting at</span>
                                <span className="block text-3xl font-bold gradient-text">
                                    {formatCurrency(certificate.basePrice)}
                                </span>
                            </div>
                            <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-gray-100">
                                <span className="text-sm text-gray-500">Delivery</span>
                                <span className="block text-xl font-bold text-gray-900">
                                    {certificate.duration}
                                </span>
                            </div>
                        </motion.div>

                        <Link href={`/certificates/apply/${certificate.id}`}>
                            <Button size="xl" className="shadow-xl shadow-primary/20 animate-pulse-glow">
                                Apply Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Features Bar */}
            <section className="relative z-10 -mt-6 mx-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex flex-col items-center text-center gap-2"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">
                                            {feature.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 container mx-auto px-4">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                            Simple Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A simple 3-step process to get your {certificate.name}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative group"
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                                    {/* Step Number */}
                                    <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-bold text-lg shadow-lg`}>
                                        {step.step}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6">
                                        <step.icon className="w-7 h-7 text-blue-600" />
                                    </div>

                                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>

                                {/* Connector Line (hidden on mobile) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                                Transparent Pricing
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Choose Your Plan
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Select the option that works best for you. All prices include taxes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PAYMENT_OPTIONS.slice(0, 6).map((option, index) => (
                                <motion.div
                                    key={option.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${option.popular
                                        ? "border-blue-500 ring-4 ring-blue-100"
                                        : "border-gray-100 hover:border-blue-200"
                                        }`}
                                >
                                    {option.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                                                <Star className="w-3 h-3 fill-current" />
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <h3 className="font-bold text-gray-900 text-lg mb-2 mt-2">
                                        {option.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-6">
                                        {option.description}
                                    </p>

                                    <div className="mb-6">
                                        <span className="text-4xl font-bold gradient-text">
                                            {formatCurrency(option.price)}
                                        </span>
                                    </div>

                                    <Link href={`/certificates/apply/${certificate.id}`}>
                                        <Button
                                            className="w-full"
                                            variant={option.popular ? "default" : "outline"}
                                        >
                                            Select & Apply
                                        </Button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-12 md:p-16">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-80 h-80 border border-white rounded-full translate-y-1/2 -translate-x-1/2" />
                            </div>

                            <div className="relative z-10 text-center text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Ready to Get Your {certificate.name}?
                                </h2>
                                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Our certified doctors are ready to help you. Start your
                                    application now and receive your certificate quickly.
                                </p>
                                <Link href={`/certificates/apply/${certificate.id}`}>
                                    <Button
                                        size="xl"
                                        className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
