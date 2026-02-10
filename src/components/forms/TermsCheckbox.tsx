'use client';

import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface TermsCheckboxProps {
    register: UseFormRegister<any>;
    error?: FieldError;
    onChange?: (checked: boolean) => void;
    className?: string;
}

const TERMS_TEXT = `I confirm that quickmedicalcertificate.com is a facilitating platform only and does not issue medical certificates directly. The issuance, content, duration, and acceptance of the medical certificate are solely at the discretion of the consulting registered doctor. I understand that quickmedicalcertificate.com shall not be liable for non-issuance, rejection, or any consequences arising from the use of the medical certificate. I confirm that all information provided by me is true and accurate and that this certificate will not be used for any medico-legal or unethical purposes, including legal proceedings, insurance claims, police cases, government job regularisation, or judicial matters. I understand that this online consultation is not a substitute for an in-person doctor visit or treatment of serious medical conditions. In case of non-issuance or cancellation, a convenience charge may apply as per the Refund & Cancellation Policy, and no refunds are available for non-refundable formats. I agree that all certificates are issued in English and that certificate formats cannot be altered. I consent to online consultation and to the use of my information as per the Privacy Policy and Terms of Service of quickmedicalcertificate.com.`;

export function TermsCheckbox({
    register,
    error,
    onChange,
    className = '',
}: TermsCheckboxProps) {
    return (
        <div className={`space-y-3 ${className}`}>
            <Label className="text-sm font-semibold">Terms & Conditions</Label>

            {/* Scrollable Terms Container */}
            <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-md p-4 bg-gray-50">
                <p className="text-sm text-gray-700 leading-relaxed">{TERMS_TEXT}</p>
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-2">
                <Checkbox
                    id="terms"
                    {...register('termsAccepted')}
                    onCheckedChange={onChange}
                    className={error ? 'border-red-500' : ''}
                />
                <Label
                    htmlFor="terms"
                    className="text-sm font-normal cursor-pointer leading-tight"
                >
                    I agree to the Terms & Conditions{' '}
                    <span className="text-red-500">*</span>
                </Label>
            </div>

            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
    );
}
