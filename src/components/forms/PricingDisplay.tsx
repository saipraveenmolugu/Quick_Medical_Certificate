'use client';

import React from 'react';
import { DocumentFormat } from '@/types/certificate.types';
import { calculateTotalAmount, formatCurrency } from '@/lib/utils/pricing';
import { getPaymentOptionById, SPECIAL_FORMAT_FEE_INR } from '@/constants/pricing';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface PricingDisplayProps {
    documentFormat: DocumentFormat;
    hasSpecialFormat: boolean;
    className?: string;
}

export function PricingDisplay({
    documentFormat,
    hasSpecialFormat,
    className = '',
}: PricingDisplayProps) {
    const paymentOption = getPaymentOptionById(documentFormat);
    const total = calculateTotalAmount(documentFormat, hasSpecialFormat);

    if (!paymentOption) {
        return null;
    }

    return (
        <Card className={`bg-blue-50 border-blue-200 ${className}`}>
            <CardHeader>
                <CardTitle className="text-lg">Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {/* Base Price */}
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Base Price</span>
                    <span className="font-medium">{formatCurrency(paymentOption.price)}</span>
                </div>

                {/* Special Format Fee */}
                {hasSpecialFormat && (
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Special Format Fee</span>
                        <span className="font-medium">
                            + {formatCurrency(SPECIAL_FORMAT_FEE_INR)}
                        </span>
                    </div>
                )}

                <Separator />

                {/* Total */}
                <div className="flex justify-between items-center">
                    <span className="text-base font-semibold">Total Amount</span>
                    <span className="text-xl font-bold text-blue-600">
                        {formatCurrency(total)}
                    </span>
                </div>

                {/* Refund Info */}
                <div className="text-xs text-gray-600 mt-2">
                    {paymentOption.isRefundable ? (
                        <p className="text-green-700">
                            ✓ Refundable (Convenience fee: {formatCurrency(paymentOption.convenienceFee || 0)})
                        </p>
                    ) : (
                        <p className="text-red-700">✗ Non-Refundable</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
