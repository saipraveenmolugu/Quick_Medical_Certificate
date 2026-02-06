"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, CheckCircle, MessageSquare } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function ReviewPage() {
    const [formData, setFormData] = useState({
        title: "",
        message: "",
        dateOfExperience: "",
        rating: 0,
        consent: false,
    });
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.title.trim()) {
            newErrors.title = "Review title is required";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Review message is required";
        }
        if (!formData.dateOfExperience) {
            newErrors.dateOfExperience = "Date of experience is required";
        }
        if (!formData.consent) {
            newErrors.consent = "You must confirm this is a genuine review";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full text-center"
                >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Thank You for Your Review!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Your review has been submitted successfully. It will be published
                        after verification.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        );
    }

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
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Leave a Review
                        </h1>
                        <p className="text-lg opacity-90">
                            Tell us more about your experience with our service
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Form Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Review Title */}
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Review Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.title ? "border-red-300" : "border-gray-200"
                                        } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200`}
                                    placeholder="Give your review a title"
                                />
                                {errors.title && (
                                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                                )}
                            </div>

                            {/* Review Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Review Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-300" : "border-gray-200"
                                        } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 resize-none`}
                                    placeholder="What went wrong or what went well? Please be honest and helpful."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Date of Experience */}
                            <div>
                                <label
                                    htmlFor="dateOfExperience"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Date of Experience <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="dateOfExperience"
                                    name="dateOfExperience"
                                    value={formData.dateOfExperience}
                                    onChange={handleChange}
                                    max={new Date().toISOString().split("T")[0]}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.dateOfExperience ? "border-red-300" : "border-gray-200"
                                        } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200`}
                                />
                                {errors.dateOfExperience && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.dateOfExperience}
                                    </p>
                                )}
                            </div>

                            {/* Star Rating */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Star Rating (Optional)
                                </label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() =>
                                                setFormData({ ...formData, rating: star })
                                            }
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-8 h-8 ${star <= (hoveredRating || formData.rating)
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
                                                    } transition-colors`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Consent Checkbox */}
                            <div
                                className={`p-4 rounded-lg ${errors.consent ? "bg-red-50 border border-red-200" : "bg-gray-50"
                                    }`}
                            >
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 mt-0.5"
                                    />
                                    <span className="text-sm text-gray-600">
                                        By submitting this review, you confirm it is based on a
                                        genuine experience and you have not received any incentive
                                        to write it. <span className="text-red-500">*</span>
                                    </span>
                                </label>
                                {errors.consent && (
                                    <p className="text-red-500 text-sm mt-2">{errors.consent}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Review"
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
