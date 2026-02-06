import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format currency to INR
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

// Format date to readable format
export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(date);
}

// Format phone number
export function formatPhone(phone: string): string {
    if (!phone) return "";
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 10) {
        return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }
    return phone;
}

// Generate unique ID
export function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

// Certificate Categories
export const CERTIFICATE_CATEGORIES = {
    leave: {
        name: "Leave Certificates",
        icon: "📋"
    },
    fitness: {
        name: "Fitness & Work Status",
        icon: "💪"
    },
    medical: {
        name: "Medical Records",
        icon: "🏥"
    }
} as const;

// Certificate types - All 9 types
export const CERTIFICATE_TYPES = [
    {
        id: "sick-leave",
        name: "Sick Leave Certificate",
        description: "Medical certificate for workplace sick leave",
        longDescription: "When health issues prevent you from attending work, school, or college, a Sick Leave Medical Certificate provides official medical confirmation of your condition.",
        icon: "🏥",
        category: "leave",
        formTemplate: "sick-leave",
        basePrice: 599,
        duration: "1-3 days",
    },
    {
        id: "fitness",
        name: "Fitness Certificate",
        description: "Medical fitness certificate for employment/education",
        longDescription: "A Medical Fitness Certificate is often required before starting a job, academic program, sports activity, or travel plan. Through an online consultation, our doctors review your health details and issue a fitness certificate where appropriate.",
        icon: "💪",
        category: "fitness",
        formTemplate: "fitness",
        basePrice: 599,
        duration: "Valid for 1 year",
    },
    {
        id: "work-from-home",
        name: "Work From Home Certificate",
        description: "Medical recommendation for remote work",
        longDescription: "Certain medical conditions may allow you to work but make office attendance difficult. A Work from Home Medical Certificate supports remote working arrangements based on medical advice.",
        icon: "🏠",
        category: "leave",
        formTemplate: "sick-leave",
        basePrice: 599,
        duration: "As recommended",
    },
    {
        id: "unfit-to-travel",
        name: "Unfit To Travel Certificate",
        description: "Medical certificate for travel cancellation",
        longDescription: "Medical conditions or recovery phases may make travel unsafe or inadvisable. An Unfit To Travel Medical Certificate formally states that travel should be avoided for a defined duration.",
        icon: "✈️",
        category: "fitness",
        formTemplate: "sick-leave",
        basePrice: 599,
        duration: "As needed",
    },
    {
        id: "unfit-to-work",
        name: "Unfit To Work Certificate",
        description: "Certificate confirming inability to work",
        longDescription: "When illness or injury affects your ability to perform work duties safely, an Unfit To Work Medical Certificate provides clear medical documentation of your condition.",
        icon: "🚫",
        category: "fitness",
        formTemplate: "sick-leave",
        basePrice: 599,
        duration: "As needed",
    },
    {
        id: "medical-diagnosis",
        name: "Medical Diagnosis Certificate",
        description: "Official documentation of diagnosed condition",
        longDescription: "A Medical Diagnosis Certificate serves as official documentation of a diagnosed medical condition following professional medical assessment. It is commonly required for insurance purposes, academic submissions, workplace records, or administrative and legal documentation.",
        icon: "📋",
        category: "medical",
        formTemplate: "diagnosis",
        basePrice: 599,
        duration: "As required",
    },
    {
        id: "caretaker",
        name: "Caretaker Certificate",
        description: "Certificate for family care leave",
        longDescription: "When a family member requires medical care, a Caretaker Medical Certificate confirms the need for your presence as a caregiver during their recovery.",
        icon: "👨‍👩‍👧",
        category: "leave",
        formTemplate: "sick-leave",
        basePrice: 599,
        duration: "As needed",
    },
    {
        id: "recovery",
        name: "Recovery Certificate",
        description: "Certificate confirming recovery from illness",
        longDescription: "A Recovery Medical Certificate confirms that an individual has recovered from a medical condition and is fit to resume regular activities such as work, studies, or travel.",
        icon: "🩺",
        category: "leave",
        formTemplate: "fitness",
        basePrice: 599,
        duration: "Post-illness",
    },
    {
        id: "fit-to-fly",
        name: "Fit-to-Fly Certificate",
        description: "Medical clearance for air travel",
        longDescription: "A Fit-to-Fly Medical Certificate confirms that an individual is medically safe to travel by air. Doctors assess your current health condition to ensure that flying will not pose any risk to you or others during the journey.",
        icon: "🛫",
        category: "fitness",
        formTemplate: "fitness",
        basePrice: 599,
        duration: "As required",
    },
] as const;

// Payment Options
export const PAYMENT_OPTIONS = [
    {
        id: "digital-no-rx",
        name: "Digital Certificate without prescription",
        price: 599,
        refundable: false,
        convenienceFee: 0,
        description: "Non-Refundable",
        popular: false,
    },
    {
        id: "digital-rx",
        name: "Digital Certificate with prescription",
        price: 799,
        refundable: true,
        convenienceFee: 199,
        description: "Includes prescription",
        popular: true,
    },
    {
        id: "digital-express",
        name: "Digital Certificate with prescription (30-Min Express)",
        price: 899,
        refundable: true,
        convenienceFee: 199,
        description: "30-Minute Express Delivery",
        popular: false,
    },
    {
        id: "handwritten-no-rx",
        name: "Handwritten Certificate without prescription",
        price: 1099,
        refundable: false,
        convenienceFee: 0,
        description: "Non-Refundable",
        popular: false,
    },
    {
        id: "handwritten-rx",
        name: "Handwritten Certificate with prescription",
        price: 1399,
        refundable: true,
        convenienceFee: 299,
        description: "Includes prescription",
        popular: false,
    },
    {
        id: "handwritten-no-rx-ship",
        name: "Handwritten Certificate without prescription + Shipping",
        price: 1299,
        refundable: true,
        convenienceFee: 299,
        description: "Includes shipping (India only)",
        popular: false,
    },
    {
        id: "handwritten-rx-ship",
        name: "Handwritten Certificate with prescription + Shipping",
        price: 1499,
        refundable: true,
        convenienceFee: 299,
        description: "Includes prescription + shipping",
        popular: false,
    },
] as const;

// Doctor Consultation Fee
export const CONSULTATION_FEE = 299;

// Special Format Add-on
export const SPECIAL_FORMAT_FEE = 250;

// Social Links
export const SOCIAL_LINKS = {
    linkedin: "https://linkedin.com/company/quickmedicalcertificate",
    instagram: "https://instagram.com/quickmedicalcertificate",
    whatsapp: "https://wa.me/+91XXXXXXXXXX",
    facebook: "https://facebook.com/quickmedicalcertificate",
    youtube: "https://youtube.com/@quickmedicalcertificate",
    twitter: "https://x.com/quickmedcert",
} as const;

// FAQ Data
export const FAQ_DATA = [
    {
        question: "How long does it take to get a medical certificate?",
        answer: "Most certificates are issued within 30 minutes after successful doctor consultation. Express delivery options are available for urgent requirements."
    },
    {
        question: "Are the certificates legally valid?",
        answer: "Yes, all certificates are issued by NMC-registered doctors and comply with Indian medical standards. They are accepted by employers, educational institutions, airlines, and government bodies."
    },
    {
        question: "What is the refund policy?",
        answer: "Refunds are available for most products before doctor consultation begins. Some formats are non-refundable. A convenience fee applies to eligible refunds. Please check our refund policy for details."
    },
    {
        question: "Do I need to upload any documents?",
        answer: "Yes, you need to upload a government-issued ID proof. For fitness certificates, you may also need to provide vital signs (blood pressure, pulse) and a short walking video."
    },
    {
        question: "How does the doctor consultation work?",
        answer: "After submitting your form and payment, a registered doctor will contact you via phone or video call to verify your information and medical condition before issuing the certificate."
    },
    {
        question: "Can I get a certificate for someone else?",
        answer: "Yes, you can apply on behalf of a family member. You will need to provide guardian details and attend the consultation on their behalf if they are a minor."
    },
    {
        question: "What if my certificate request is rejected?",
        answer: "If a doctor determines that the certificate cannot be issued based on medical judgment, you may be eligible for a refund minus the convenience fee, provided you haven't selected a non-refundable format."
    },
    {
        question: "Do you provide physical/handwritten certificates?",
        answer: "Yes, we offer handwritten certificates with optional shipping within India. Handwritten formats take up to 48 hours for delivery."
    },
] as const;

export type CertificateType = (typeof CERTIFICATE_TYPES)[number]["id"];
export type PaymentOptionType = (typeof PAYMENT_OPTIONS)[number]["id"];
