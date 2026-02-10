import { DocumentFormat, PaymentOption } from '@/types/certificate.types';

// Payment Options with Pricing
export const PAYMENT_OPTIONS: PaymentOption[] = [
    {
        id: DocumentFormat.DIGITAL_NO_PRESCRIPTION,
        name: 'Digital Certificate without prescription (Non-Refundable)',
        price: 599,
        currency: 'INR',
        isRefundable: false,
        description: 'Digital format, no prescription included',
    },
    {
        id: DocumentFormat.DIGITAL_WITH_PRESCRIPTION,
        name: 'Digital Certificate with prescription',
        price: 799,
        currency: 'INR',
        isRefundable: true,
        convenienceFee: 199,
        description: 'Digital format with prescription',
    },
    {
        id: DocumentFormat.DIGITAL_EXPRESS,
        name: 'Digital Certificate with prescription (30-Minute Express Delivery)',
        price: 899,
        currency: 'INR',
        isRefundable: true,
        convenienceFee: 199,
        description: 'Express delivery within 30 minutes',
    },
    {
        id: DocumentFormat.HANDWRITTEN_NO_PRESCRIPTION,
        name: 'Handwritten Certificate without prescription (Non-Refundable)',
        price: 1099,
        currency: 'INR',
        isRefundable: false,
        description: 'Physical handwritten certificate',
    },
    {
        id: DocumentFormat.HANDWRITTEN_WITH_PRESCRIPTION,
        name: 'Handwritten Certificate with prescription',
        price: 1399,
        currency: 'INR',
        isRefundable: true,
        convenienceFee: 299,
        description: 'Physical handwritten certificate with prescription',
    },
    {
        id: DocumentFormat.HANDWRITTEN_NO_PRESCRIPTION_SHIPPING,
        name: 'Handwritten Medical Certificate without prescription + Shipping',
        price: 1299,
        currency: 'INR',
        isRefundable: true,
        convenienceFee: 299,
        description: 'Physical certificate with India shipping',
    },
    {
        id: DocumentFormat.HANDWRITTEN_WITH_PRESCRIPTION_SHIPPING,
        name: 'Handwritten Medical Certificate with prescription + Shipping',
        price: 1499,
        currency: 'INR',
        isRefundable: true,
        convenienceFee: 299,
        description: 'Physical certificate with prescription and India shipping',
    },
];

// Other Fees
export const SPECIAL_FORMAT_FEE_INR = 250;
export const SPECIAL_FORMAT_FEE_USD = 5;
export const DOCTOR_CONSULTATION_FEE = 299;

// Verification Fees
export const VERIFICATION_FEES = {
    EMAIL: 0, // Free
    PHONE_INR: 599,
    PHONE_USD: 10,
    PHONE_EUR: 10,
};

// Shipping Fees
export const SHIPPING_FEES = {
    FIRST_ATTEMPT: 0, // Included
    SECOND_ATTEMPT: 499,
};

// Helper function to get payment option by ID
export const getPaymentOptionById = (id: DocumentFormat): PaymentOption | undefined => {
    return PAYMENT_OPTIONS.find(option => option.id === id);
};
