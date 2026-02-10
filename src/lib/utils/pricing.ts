import { DocumentFormat } from '@/types/certificate.types';
import { getPaymentOptionById, SPECIAL_FORMAT_FEE_INR } from '@/constants/pricing';

/**
 * Calculate total amount for certificate
 */
export const calculateTotalAmount = (
    documentFormat: DocumentFormat,
    hasSpecialFormat: boolean = false
): number => {
    const paymentOption = getPaymentOptionById(documentFormat);
    if (!paymentOption) return 0;

    let total = paymentOption.price;

    if (hasSpecialFormat) {
        total += SPECIAL_FORMAT_FEE_INR;
    }

    return total;
};

/**
 * Format currency amount
 */
export const formatCurrency = (amount: number, currency: string = 'INR'): string => {
    if (currency === 'INR') {
        return `₹${amount.toLocaleString('en-IN')}`;
    } else if (currency === 'USD') {
        return `$${amount.toLocaleString('en-US')}`;
    } else if (currency === 'EUR') {
        return `€${amount.toLocaleString('en-EU')}`;
    }
    return `${currency} ${amount}`;
};

/**
 * Get refund amount after deducting convenience fee
 */
export const calculateRefundAmount = (documentFormat: DocumentFormat): number => {
    const paymentOption = getPaymentOptionById(documentFormat);
    if (!paymentOption || !paymentOption.isRefundable) return 0;

    const convenienceFee = paymentOption.convenienceFee || 0;
    return paymentOption.price - convenienceFee;
};
