"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Shield, CheckCircle, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "support@quickmedicalcertificate.com",
            href: "mailto:support@quickmedicalcertificate.com",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 8737854807",
            href: "tel:+918737854807",
            gradient: "from-indigo-500 to-indigo-600",
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "+91 8737854807",
            href: "https://wa.me/918737854807",
            gradient: "from-green-500 to-green-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500">
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
                            We&apos;re Here to Help
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Contact <span className="text-blue-100">Us</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                            Have questions about our services or need support?
                            Our team is ready to assist you.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={fadeInUp}
                            className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Send us a message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and our team will get back to you shortly.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-600 text-center max-w-sm">
                                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 bg-white"
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="certificate">Certificate Query</option>
                                                <option value="payment">Payment Issue</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="feedback">Feedback</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 resize-none"
                                            placeholder="Write your message here..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full shadow-lg shadow-primary/20"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Get in Touch
                                </h2>

                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                                        >
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">{item.label}</p>
                                                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Business Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/50"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900">Support Hours</h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium text-gray-900">9 AM - 8 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-medium text-gray-900">10 AM - 6 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-medium text-gray-900">Emergency Only</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Privacy Notice */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-amber-50 border border-amber-200 rounded-2xl p-6"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            Privacy Notice
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            For your safety, please avoid sharing confidential medical
                                            or payment details in this message. Our team will guide
                                            you through secure channels.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Location Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                            >
                                <div className="h-32 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
                                    <MapPin className="w-12 h-12 text-blue-500" />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                                    <p className="text-gray-600 text-sm">
                                        Available across all major cities and states in India
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
