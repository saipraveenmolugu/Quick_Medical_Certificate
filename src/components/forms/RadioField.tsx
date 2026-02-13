'use client';

import React from 'react';
import { UseFormRegister, FieldError, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface RadioOption {
    value: string;
    label: string;
}

interface RadioFieldProps {
    label: string;
    name: string;
    options: RadioOption[];
    register: UseFormRegister<FieldValues>;
    error?: FieldError;
    required?: boolean;
    onChange?: (value: string) => void;
    className?: string;
}

export function RadioField({
    label,
    name,
    options,
    register,
    error,
    required = false,
    onChange,
    className = '',
}: RadioFieldProps) {
    return (
        <div className={`space-y-3 ${className}`}>
            <Label className="text-sm font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <RadioGroup onValueChange={onChange} {...register(name)}>
                <div className="flex flex-col sm:flex-row gap-4">
                    {options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
                            <Label htmlFor={`${name}-${option.value}`} className="font-normal cursor-pointer">
                                {option.label}
                            </Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>
            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
    );
}
