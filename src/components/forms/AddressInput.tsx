'use client';

import React from 'react';
import { UseFormRegister, FieldError, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface AddressInputProps {
    register: UseFormRegister<FieldValues>;
    errors?: {
        street?: FieldError;
        city?: FieldError;
        state?: FieldError;
        postalCode?: FieldError;
        country?: FieldError;
    };
    prefix?: string;
    className?: string;
}

export function AddressInput({
    register,
    errors = {},
    prefix = 'address',
    className = '',
}: AddressInputProps) {
    return (
        <div className={`space-y-4 ${className}`}>
            <h3 className="text-lg font-semibold">Address</h3>

            {/* Street */}
            <div className="space-y-2">
                <Label htmlFor={`${prefix}.street`}>
                    Street Address <span className="text-red-500">*</span>
                </Label>
                <Input
                    id={`${prefix}.street`}
                    placeholder="Street address"
                    {...register(`${prefix}.street`)}
                    className={errors.street ? 'border-red-500' : ''}
                />
                {errors.street && (
                    <p className="text-sm text-red-600">{errors.street.message}</p>
                )}
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor={`${prefix}.city`}>
                        City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}.city`}
                        placeholder="City"
                        {...register(`${prefix}.city`)}
                        className={errors.city ? 'border-red-500' : ''}
                    />
                    {errors.city && (
                        <p className="text-sm text-red-600">{errors.city.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor={`${prefix}.state`}>
                        State / Region / Province <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}.state`}
                        placeholder="State"
                        {...register(`${prefix}.state`)}
                        className={errors.state ? 'border-red-500' : ''}
                    />
                    {errors.state && (
                        <p className="text-sm text-red-600">{errors.state.message}</p>
                    )}
                </div>
            </div>

            {/* Postal Code and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor={`${prefix}.postalCode`}>
                        Postal / ZIP Code <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}.postalCode`}
                        placeholder="Postal code"
                        {...register(`${prefix}.postalCode`)}
                        className={errors.postalCode ? 'border-red-500' : ''}
                    />
                    {errors.postalCode && (
                        <p className="text-sm text-red-600">{errors.postalCode.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor={`${prefix}.country`}>
                        Country <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}.country`}
                        placeholder="Country"
                        {...register(`${prefix}.country`)}
                        className={errors.country ? 'border-red-500' : ''}
                    />
                    {errors.country && (
                        <p className="text-sm text-red-600">{errors.country.message}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
