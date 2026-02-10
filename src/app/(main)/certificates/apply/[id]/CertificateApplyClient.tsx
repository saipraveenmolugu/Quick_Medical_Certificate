"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    User,
    FileText,
    CreditCard,
    CheckCircle,
    Upload,
    Info,
    AlertCircle,
} from "lucide-react";
import {
    CERTIFICATE_TYPES,
    PAYMENT_OPTIONS,
    SPECIAL_FORMAT_FEE,
    formatCurrency,
} from "@/lib/utils";

// Medical problems dropdown options
const MEDICAL_PROBLEMS = [
    "Fever",
    "Cold",
    "Headache",
    "Body Pain",
    "Viral Fever",
    "Food Poisoning",
    "Migraine",
    "Back Pain",
    "Stomach Upset",
    "Weakness",
    "Other",
];

// Leave duration options
const LEAVE_DURATIONS = [
    "1 day",
    "2 days",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
    "1 week",
    "2 weeks",
    "Other",
];

// Guardian relationships
const GUARDIAN_RELATIONSHIPS = [
    "Father",
    "Husband",
    "Mother",
    "Wife",
    "Son",
    "Daughter",
    "Other",
];

// Caretaker relationships
const CARETAKER_RELATIONSHIPS = ["Parent", "Wife", "Husband", "Other"];

interface CertificateApplyClientProps {
    certificateId: string;
}

export default function CertificateApplyClient({ certificateId }: CertificateApplyClientProps) {
    const certificate = CERTIFICATE_TYPES.find((c) => c.id === certificateId);

    if (!certificate) {
        notFound();
    }

    const isCaretakerCertificate = certificateId === "caretaker";

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = isCaretakerCertificate ? 4 : 3;

    const [formData, setFormData] = useState({
        // Step 1: Personal Info
        firstName: "",
        lastName: "",
        phone: "",
        otp: "",
        guardianRelationship: "",
        guardianName: "",
        email: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
        dateOfBirth: "",
        organizationName: "",
        organizationLocation: "India",

        // Step 2: Medical Details
        medicalProblem: "",
        medicalProblemOther: "",
        leaveDuration: "",
        leaveDurationOther: "",
        certificateStartDate: "",
        govtIdProof: null as File | null,

        // Step 3: Caretaker Details (if applicable)
        caretakerFirstName: "",
        caretakerLastName: "",
        caretakerDob: "",
        caretakerRelationship: "",
        caretakerAddress: "",
        caretakerCity: "",
        caretakerState: "",
        caretakerPostalCode: "",
        caretakerCountry: "India",
        caretakerGovtIdProof: null as File | null,

        // Step 4: Payment
        specialFormat: false,
        specialFormatFile: null as File | null,
        selectedPaymentOption: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else if (type === "file") {
            const files = (e.target as HTMLInputElement).files;
            setFormData({
                ...formData,
                [name]: files ? files[0] : null,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }

        // Clear error
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateStep = (step: number) => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.firstName.trim())
                newErrors.firstName = "First name is required";
            if (!formData.lastName.trim())
                newErrors.lastName = "Last name is required";
            if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
            if (!formData.email.trim()) newErrors.email = "Email is required";
            if (!formData.gender) newErrors.gender = "Gender is required";
            if (!formData.dateOfBirth)
                newErrors.dateOfBirth = "Date of birth is required";
            if (!formData.organizationName.trim())
                newErrors.organizationName = "Organization name is required";
            if (!formData.city.trim()) newErrors.city = "City is required";
            if (!formData.state.trim()) newErrors.state = "State is required";
            if (!formData.postalCode.trim())
                newErrors.postalCode = "Postal code is required";
        }

        if (step === 2) {
            if (!formData.medicalProblem)
                newErrors.medicalProblem = "Medical problem is required";
            if (formData.medicalProblem === "Other" && !formData.medicalProblemOther)
                newErrors.medicalProblemOther = "Please specify the medical problem";
            if (!formData.leaveDuration)
                newErrors.leaveDuration = "Leave duration is required";
            if (formData.leaveDuration === "Other" && !formData.leaveDurationOther)
                newErrors.leaveDurationOther = "Please specify the duration";
            if (!formData.certificateStartDate)
                newErrors.certificateStartDate = "Certificate start date is required";
            if (!formData.govtIdProof)
                newErrors.govtIdProof = "Government ID proof is required";
        }

        if (step === 3 && isCaretakerCertificate) {
            if (!formData.caretakerFirstName.trim())
                newErrors.caretakerFirstName = "Caretaker first name is required";
            if (!formData.caretakerLastName.trim())
                newErrors.caretakerLastName = "Caretaker last name is required";
            if (!formData.caretakerDob)
                newErrors.caretakerDob = "Caretaker date of birth is required";
            if (!formData.caretakerRelationship)
                newErrors.caretakerRelationship = "Relationship is required";
            if (!formData.caretakerCity.trim())
                newErrors.caretakerCity = "City is required";
            if (!formData.caretakerState.trim())
                newErrors.caretakerState = "State is required";
            if (!formData.caretakerPostalCode.trim())
                newErrors.caretakerPostalCode = "Postal code is required";
            if (!formData.caretakerGovtIdProof)
                newErrors.caretakerGovtIdProof = "Caretaker ID proof is required";
        }

        const paymentStep = isCaretakerCertificate ? 4 : 3;
        if (step === paymentStep) {
            if (!formData.selectedPaymentOption)
                newErrors.selectedPaymentOption =
                    "Please select a payment option";
            if (!formData.termsAccepted)
                newErrors.termsAccepted =
                    "You must accept the terms and conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
        }
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const calculateTotal = () => {
        const selectedOption = PAYMENT_OPTIONS.find(
            (p) => p.id === formData.selectedPaymentOption
        );
        let total = selectedOption?.price || 0;
        if (formData.specialFormat) {
            total += SPECIAL_FORMAT_FEE;
        }
        return total;
    };

    const handleSubmit = async () => {
        const paymentStep = isCaretakerCertificate ? 4 : 3;
        if (!validateStep(paymentStep)) return;

        // TODO: Integrate with Razorpay and Firebase
        console.log("Form submitted:", formData);
        alert("Form submitted! Razorpay integration will process payment.");
    };

    const steps = isCaretakerCertificate
        ? [
            { num: 1, title: "Personal Details", icon: User },
            { num: 2, title: "Medical Details", icon: FileText },
            { num: 3, title: "Caretaker Details", icon: User },
            { num: 4, title: "Payment", icon: CreditCard },
        ]
        : [
            { num: 1, title: "Personal Details", icon: User },
            { num: 2, title: "Medical Details", icon: FileText },
            { num: 3, title: "Payment", icon: CreditCard },
        ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
            {/* Header */}
            <section className="relative pt-24 pb-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-indigo-100/40 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href={`/certificates/${certificateId}`}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-4 transition-colors text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to {certificate.name}
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                                <span className="text-3xl">{certificate.icon}</span>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    Apply for {certificate.name}
                                </h1>
                                <p className="text-gray-500 mt-1">Complete the form below to proceed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="bg-white/80 backdrop-blur-md shadow-sm sticky top-16 z-20 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto py-4">
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => (
                                <React.Fragment key={step.num}>
                                    <div
                                        className={`flex items-center gap-2 ${currentStep >= step.num
                                            ? "text-blue-600"
                                            : "text-gray-400"
                                            }`}
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold transition-all ${currentStep > step.num
                                                ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg"
                                                : currentStep === step.num
                                                    ? "bg-blue-100 text-blue-600 ring-2 ring-blue-500"
                                                    : "bg-gray-100 text-gray-400"
                                                }`}
                                        >
                                            {currentStep > step.num ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : (
                                                step.num
                                            )}
                                        </div>
                                        <span className="hidden sm:block text-sm font-medium">
                                            {step.title}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div
                                            className={`flex-1 h-1 mx-3 rounded-full transition-colors ${currentStep > step.num
                                                ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                                                : "bg-gray-200"
                                                }`}
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Content */}
            <section className="py-8 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
                        >
                            {/* Step 1: Personal Details */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                                        Patient & Organization Details
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.firstName
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.firstName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.firstName}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.lastName
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.lastName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.lastName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="WhatsApp preferred"
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.phone
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.email
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Guardian Relationship
                                            </label>
                                            <select
                                                name="guardianRelationship"
                                                value={formData.guardianRelationship}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                            >
                                                <option value="">Select relationship</option>
                                                {GUARDIAN_RELATIONSHIPS.map((rel) => (
                                                    <option key={rel} value={rel}>
                                                        {rel}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Guardian&apos;s Name
                                            </label>
                                            <input
                                                type="text"
                                                name="guardianName"
                                                value={formData.guardianName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Gender <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-4 mt-2">
                                                {["Female", "Male", "Other"].map((g) => (
                                                    <label
                                                        key={g}
                                                        className="flex items-center gap-2 cursor-pointer"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="gender"
                                                            value={g}
                                                            checked={formData.gender === g}
                                                            onChange={handleChange}
                                                            className="w-4 h-4 text-blue-500"
                                                        />
                                                        <span className="text-gray-700">{g}</span>
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.gender && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.gender}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Date of Birth <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.dateOfBirth
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.dateOfBirth && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.dateOfBirth}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="Street address"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                City <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.city
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                State <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.state
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Postal Code <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                value={formData.postalCode}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.postalCode
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Organization Name{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="organizationName"
                                                value={formData.organizationName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.organizationName
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.organizationName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.organizationName}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Organisation Located In
                                            </label>
                                            <div className="flex gap-4 mt-2">
                                                {["India", "Outside India"].map((loc) => (
                                                    <label
                                                        key={loc}
                                                        className="flex items-center gap-2 cursor-pointer"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="organizationLocation"
                                                            value={loc}
                                                            checked={
                                                                formData.organizationLocation === loc
                                                            }
                                                            onChange={handleChange}
                                                            className="w-4 h-4 text-blue-500"
                                                        />
                                                        <span className="text-gray-700">{loc}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Medical Details */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                                        Medical Certificate Details
                                    </h2>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Details of Medical Problem{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="medicalProblem"
                                            value={formData.medicalProblem}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.medicalProblem
                                                ? "border-red-300"
                                                : "border-gray-200"
                                                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                        >
                                            <option value="">Select medical problem</option>
                                            {MEDICAL_PROBLEMS.map((prob) => (
                                                <option key={prob} value={prob}>
                                                    {prob}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.medicalProblem && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.medicalProblem}
                                            </p>
                                        )}
                                    </div>

                                    {formData.medicalProblem === "Other" && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Please specify{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="medicalProblemOther"
                                                value={formData.medicalProblemOther}
                                                onChange={handleChange}
                                                rows={3}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.medicalProblemOther
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.medicalProblemOther && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.medicalProblemOther}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            How many days leave / WFH / medical note do you want?{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="leaveDuration"
                                            value={formData.leaveDuration}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.leaveDuration
                                                ? "border-red-300"
                                                : "border-gray-200"
                                                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                        >
                                            <option value="">Select duration</option>
                                            {LEAVE_DURATIONS.map((dur) => (
                                                <option key={dur} value={dur}>
                                                    {dur}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.leaveDuration && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.leaveDuration}
                                            </p>
                                        )}
                                        <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                                            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm text-amber-800">
                                                The consulting doctor determines the issuance and
                                                duration of the medical certificate. For requests
                                                exceeding seven days, a prescription or relevant
                                                reports may be required.
                                            </p>
                                        </div>
                                    </div>

                                    {formData.leaveDuration === "Other" && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Please specify duration{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="leaveDurationOther"
                                                value={formData.leaveDurationOther}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.leaveDurationOther
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.leaveDurationOther && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.leaveDurationOther}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Certificate Start Date{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="certificateStartDate"
                                            value={formData.certificateStartDate}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.certificateStartDate
                                                ? "border-red-300"
                                                : "border-gray-200"
                                                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                        />
                                        {errors.certificateStartDate && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.certificateStartDate}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Government ID Proof{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <div
                                            className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.govtIdProof
                                                ? "border-red-300 bg-red-50"
                                                : "border-gray-200 bg-gray-50"
                                                }`}
                                        >
                                            <input
                                                type="file"
                                                name="govtIdProof"
                                                onChange={handleChange}
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                className="hidden"
                                                id="govtIdProof"
                                            />
                                            <label
                                                htmlFor="govtIdProof"
                                                className="cursor-pointer"
                                            >
                                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                <p className="text-gray-600">
                                                    {formData.govtIdProof
                                                        ? formData.govtIdProof.name
                                                        : "Click to upload PDF or Image"}
                                                </p>
                                            </label>
                                        </div>
                                        {errors.govtIdProof && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.govtIdProof}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Caretaker Details (only for caretaker certificate) */}
                            {currentStep === 3 && isCaretakerCertificate && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                                        Caretaker Details
                                    </h2>
                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 mb-6">
                                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-blue-800">
                                            In case of a Caretaker Certificate request, the
                                            consulting doctor may request to speak with the patient,
                                            ask for a 15-second patient video, or initiate a video
                                            call, as per their discretion.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Caretaker First Name{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="caretakerFirstName"
                                                value={formData.caretakerFirstName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.caretakerFirstName
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.caretakerFirstName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.caretakerFirstName}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Caretaker Last Name{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="caretakerLastName"
                                                value={formData.caretakerLastName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.caretakerLastName
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.caretakerLastName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.caretakerLastName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Date of Birth (18+){" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                name="caretakerDob"
                                                value={formData.caretakerDob}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.caretakerDob
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                            {errors.caretakerDob && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.caretakerDob}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Relationship with Patient{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex flex-wrap gap-4 mt-2">
                                                {CARETAKER_RELATIONSHIPS.map((rel) => (
                                                    <label
                                                        key={rel}
                                                        className="flex items-center gap-2 cursor-pointer"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="caretakerRelationship"
                                                            value={rel}
                                                            checked={
                                                                formData.caretakerRelationship === rel
                                                            }
                                                            onChange={handleChange}
                                                            className="w-4 h-4 text-blue-500"
                                                        />
                                                        <span className="text-gray-700">{rel}</span>
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.caretakerRelationship && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.caretakerRelationship}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Caretaker Address
                                        </label>
                                        <input
                                            type="text"
                                            name="caretakerAddress"
                                            value={formData.caretakerAddress}
                                            onChange={handleChange}
                                            placeholder="Street address"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                City <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="caretakerCity"
                                                value={formData.caretakerCity}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.caretakerCity
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                State <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="caretakerState"
                                                value={formData.caretakerState}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.caretakerState
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Postal Code <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="caretakerPostalCode"
                                                value={formData.caretakerPostalCode}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${errors.caretakerPostalCode
                                                    ? "border-red-300"
                                                    : "border-gray-200"
                                                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                name="caretakerCountry"
                                                value={formData.caretakerCountry}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Government ID Proof of Caretaker{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <div
                                            className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.caretakerGovtIdProof
                                                ? "border-red-300 bg-red-50"
                                                : "border-gray-200 bg-gray-50"
                                                }`}
                                        >
                                            <input
                                                type="file"
                                                name="caretakerGovtIdProof"
                                                onChange={handleChange}
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                className="hidden"
                                                id="caretakerGovtIdProof"
                                            />
                                            <label
                                                htmlFor="caretakerGovtIdProof"
                                                className="cursor-pointer"
                                            >
                                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                <p className="text-gray-600">
                                                    {formData.caretakerGovtIdProof
                                                        ? formData.caretakerGovtIdProof.name
                                                        : "Click to upload PDF or Image"}
                                                </p>
                                            </label>
                                        </div>
                                        {errors.caretakerGovtIdProof && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.caretakerGovtIdProof}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Payment Step */}
                            {((currentStep === 3 && !isCaretakerCertificate) ||
                                (currentStep === 4 && isCaretakerCertificate)) && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-6">
                                            Select Payment Option
                                        </h2>

                                        {/* Special Format Option */}
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="specialFormat"
                                                    checked={formData.specialFormat}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 mt-0.5"
                                                />
                                                <div>
                                                    <span className="font-medium text-gray-800">
                                                        Special Format Attestation
                                                    </span>
                                                    <p className="text-sm text-gray-500">
                                                        Extra cost: {formatCurrency(SPECIAL_FORMAT_FEE)} |
                                                        Handwritten format: up to 48 hours
                                                    </p>
                                                </div>
                                            </label>
                                        </div>

                                        {formData.specialFormat && (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Upload Special Format File
                                                </label>
                                                <div className="border-2 border-dashed rounded-lg p-6 text-center border-gray-200 bg-gray-50">
                                                    <input
                                                        type="file"
                                                        name="specialFormatFile"
                                                        onChange={handleChange}
                                                        accept=".pdf,.jpg,.jpeg,.png"
                                                        className="hidden"
                                                        id="specialFormatFile"
                                                    />
                                                    <label
                                                        htmlFor="specialFormatFile"
                                                        className="cursor-pointer"
                                                    >
                                                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                        <p className="text-gray-600">
                                                            {formData.specialFormatFile
                                                                ? formData.specialFormatFile.name
                                                                : "Click to upload PDF or Image"}
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        )}

                                        {/* Payment Options */}
                                        <div className="space-y-3">
                                            {PAYMENT_OPTIONS.map((option) => (
                                                <label
                                                    key={option.id}
                                                    className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.selectedPaymentOption === option.id
                                                        ? "border-blue-500 bg-blue-50"
                                                        : "border-gray-200 hover:border-gray-300"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="selectedPaymentOption"
                                                        value={option.id}
                                                        checked={
                                                            formData.selectedPaymentOption === option.id
                                                        }
                                                        onChange={handleChange}
                                                        className="w-5 h-5 text-blue-500"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-gray-800">
                                                                {option.name}
                                                            </span>
                                                            {option.popular && (
                                                                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                                                    Popular
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-500">
                                                            {option.description}
                                                        </p>
                                                    </div>
                                                    <span className="text-lg font-bold text-blue-600">
                                                        {formatCurrency(option.price)}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.selectedPaymentOption && (
                                            <p className="text-red-500 text-sm">
                                                {errors.selectedPaymentOption}
                                            </p>
                                        )}

                                        {/* Terms & Conditions */}
                                        <div
                                            className={`p-4 rounded-lg ${errors.termsAccepted
                                                ? "bg-red-50 border border-red-200"
                                                : "bg-gray-50"
                                                }`}
                                        >
                                            <div className="max-h-40 overflow-y-auto mb-4 p-3 bg-white rounded border text-sm text-gray-600">
                                                <p>
                                                    I agree to the Terms & Conditions. I confirm that
                                                    quickmedicalcertificate.com is a facilitating
                                                    platform only and does not issue medical
                                                    certificates directly. The issuance, content,
                                                    duration, and acceptance of the medical certificate
                                                    are solely at the discretion of the consulting
                                                    registered doctor. I understand that
                                                    quickmedicalcertificate.com shall not be liable for
                                                    non-issuance, rejection, or any consequences arising
                                                    from the use of the medical certificate. I confirm
                                                    that all information provided by me is true and
                                                    accurate and that this certificate will not be used
                                                    for any medico-legal or unethical purposes, including
                                                    legal proceedings, insurance claims, police cases,
                                                    government job regularisation, or judicial matters. I
                                                    understand that this online consultation is not a
                                                    substitute for an in-person doctor visit or treatment
                                                    of serious medical conditions.
                                                </p>
                                            </div>
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="termsAccepted"
                                                    checked={formData.termsAccepted}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 mt-0.5"
                                                />
                                                <span className="text-sm text-gray-700">
                                                    I agree to the Terms & Conditions{" "}
                                                    <span className="text-red-500">*</span>
                                                </span>
                                            </label>
                                            {errors.termsAccepted && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {errors.termsAccepted}
                                                </p>
                                            )}
                                        </div>

                                        {/* Total Amount */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-medium text-gray-800">
                                                    Total Amount
                                                </span>
                                                <span className="text-2xl font-bold text-blue-600">
                                                    {formatCurrency(calculateTotal())}
                                                </span>
                                            </div>
                                            {formData.specialFormat && (
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Includes special format fee of{" "}
                                                    {formatCurrency(SPECIAL_FORMAT_FEE)}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-6">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${currentStep === 1
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                                }`}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Previous
                        </button>

                        {currentStep < totalSteps ? (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all"
                            >
                                Next
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.termsAccepted}
                                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all ${formData.termsAccepted
                                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                Pay {formatCurrency(calculateTotal())}
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
