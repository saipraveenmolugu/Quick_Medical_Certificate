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

// Certificate types
export const CERTIFICATE_TYPES = [
    {
        id: "sick-leave",
        name: "Sick Leave Certificate",
        description: "Medical certificate for workplace sick leave",
        icon: "🏥",
        price: 499,
        duration: "1-3 days",
    },
    {
        id: "fitness",
        name: "Fitness Certificate",
        description: "Medical fitness certificate for employment/education",
        icon: "💪",
        price: 599,
        duration: "Valid for 1 year",
    },
    {
        id: "recovery",
        name: "Recovery Certificate",
        description: "Certificate confirming recovery from illness",
        icon: "🩺",
        price: 499,
        duration: "Post-illness",
    },
    {
        id: "caretaker",
        name: "Caretaker Certificate",
        description: "Certificate for family care leave",
        icon: "👨‍👩‍👧",
        price: 499,
        duration: "As needed",
    },
    {
        id: "work-from-home",
        name: "Work From Home Certificate",
        description: "Medical recommendation for remote work",
        icon: "🏠",
        price: 599,
        duration: "As recommended",
    },
    {
        id: "sports",
        name: "Sports Fitness Certificate",
        description: "Fitness certificate for sports participation",
        icon: "⚽",
        price: 699,
        duration: "Valid for 6 months",
    },
    {
        id: "international",
        name: "International Certificate",
        description: "Medical certificate for visa/travel purposes",
        icon: "✈️",
        price: 999,
        duration: "As required",
    },
] as const;

export type CertificateType = (typeof CERTIFICATE_TYPES)[number]["id"];
