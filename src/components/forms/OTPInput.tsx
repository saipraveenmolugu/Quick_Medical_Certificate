'use client';

import React, { useState } from 'react';
import { UseFormRegister, FieldError, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface OTPInputProps {
    phoneRegister: UseFormRegister<FieldValues>;
    otpRegister: UseFormRegister<FieldValues>;
    phoneError?: FieldError;
    otpError?: FieldError;
    onRequestOTP?: (phone: string) => Promise<void>;
    className?: string;
}

export function OTPInput({
    phoneRegister,
    otpRegister,
    phoneError,
    otpError,
    onRequestOTP,
    className = '',
}: OTPInputProps) {
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');
    const [countdown, setCountdown] = useState(0);

    const handleRequestOTP = async () => {
        if (!phoneValue || phoneValue.length < 10) {
            return;
        }

        setLoading(true);
        try {
            if (onRequestOTP) {
                await onRequestOTP(phoneValue);
            }
            setOtpSent(true);
            setCountdown(60);

            // Start countdown
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } catch (error) {
            console.error('Failed to send OTP:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {/* Phone Number */}
            <div className="space-y-2">
                <Label htmlFor="phone">
                    Phone Number (WhatsApp preferred) <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2">
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 1234567890"
                        {...phoneRegister('phone')}
                        onChange={(e) => setPhoneValue(e.target.value)}
                        className={`flex-1 ${phoneError ? 'border-red-500' : ''}`}
                    />
                    <Button
                        type="button"
                        onClick={handleRequestOTP}
                        disabled={loading || countdown > 0}
                        variant="outline"
                    >
                        {countdown > 0 ? `Resend (${countdown}s)` : otpSent ? 'Resend OTP' : 'Send OTP'}
                    </Button>
                </div>
                {phoneError && <p className="text-sm text-red-600">{phoneError.message}</p>}
            </div>

            {/* OTP Input */}
            <div className="space-y-2">
                <Label htmlFor="otp">
                    Enter OTP <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    {...otpRegister('otp')}
                    disabled={!otpSent}
                    className={otpError ? 'border-red-500' : ''}
                />
                {otpError && <p className="text-sm text-red-600">{otpError.message}</p>}
                {otpSent && !otpError && (
                    <p className="text-sm text-green-600">
                        OTP sent successfully to your phone number
                    </p>
                )}
            </div>
        </div>
    );
}
